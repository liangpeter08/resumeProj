import React, { FunctionComponent, useState } from 'react';
import css from './note.css';
import closeButton from '../../assets/close.svg';
import NoteSchema from '../../util/objectDef';
import axios from 'axios';

//Note Prop
interface NotesProps {
    remove: () => void;
    saved?: NoteSchema;
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

    const savenNote = () => {
        if (saved && saved.note_id) { 
            axios.put('/api/notes', {
                note_id: saved.note_id,
                content: note,
                title: title,
                email: 'test@gmail.com',
            }).then((data) => console.log(data));
        }
    };

    return (
        <>
            <div className={css.header}>
                <input className={css.title} onChange={editTitle} value={title} />
                <div className={css.deleteButton} dangerouslySetInnerHTML={{__html: closeButton}}
                        onClick={remove}/>
                <button onClick={savenNote}>Save</button>
            </div>
            <textarea
                className={css.wrapper}
                placeholder="Enter some text here"
                value={note}
                onChange={editNote}>
            </textarea>
        </>
    );
};

export default Note;