import React, { FunctionComponent, useState } from 'react';
import css from './note.css';
import closeButton from '../../assets/delete.svg';
import NoteSchema from '../../util/objectDef';
import axios from 'axios';
import saveButton from '../../assets/save2.svg';


//Note Prop
interface NotesProps {
    remove: () => void;
    saved: NoteSchema;
    finalize?: (saved : NoteSchema) => void;
};

// Note state
const Note : FunctionComponent<NotesProps> = ({remove, saved}: NotesProps) => {
    const [note, setNote] = useState('');
    const [title, setTitle] = useState('');


    React.useEffect(() => {
        setNote(saved ? saved.content : '');
        setTitle(saved ? saved.title : '');
    }, [saved])

    const editNote = (e : React.FormEvent<HTMLTextAreaElement>) => {
        setNote(e.currentTarget.value);
    };

    const editTitle = (e: React.FormEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };

    const saveNote = () => {
        if (saved.note_id) { 
            axios.put('/api/notes', {
                note_id: saved.note_id,
                content: note,
                title,
                email: saved.email,
            });
        } else {
            axios.post('/api/notes',
                Object.assign(saved, {
                    content: note,
                    title,
                })).then(({data}) => console.log(data));
        }
    };

    return (
        <div className={css.noteWrapper}>
            <div className={css.header}>
                <input className={css.title} onChange={editTitle} value={title} placeholder={'New Note'} />
                <div className={css.saveButton} dangerouslySetInnerHTML={{__html: saveButton}}
                    onClick={saveNote}/>
                <div className={css.deleteButton} dangerouslySetInnerHTML={{__html: closeButton}}
                        onClick={remove}/>
            </div>
            <textarea
                className={css.wrapper}
                placeholder="Enter some text here"
                value={note}
                onChange={editNote}>
            </textarea>
        </div>
    );
};

export default Note;