import React from 'react';
import css from './note.css';
import closeButton from '../../assets/close.svg';

interface NotesProps {
    remove: () => void;
};

interface NotesState {
    text: string;
    title: string;
};

class Note extends React.Component<NotesProps, NotesState> {
    constructor(props: NotesProps) {
        super(props);
        this.state = {
            text: '',
            title: '',
        };
    }

    editNote(e : React.FormEvent<HTMLTextAreaElement>) {
        this.setState({text: e.currentTarget.value});
    }

    editTitle(e: React.FormEvent<HTMLInputElement>) {
        this.setState({title: e.currentTarget.value});
    }

    render() {
        return (
            <>
                <div className={css.header}>
                    <input className={css.title} onChange={this.editTitle.bind(this)} value={this.state.title} />
                    <div className={css.deleteButton} dangerouslySetInnerHTML={{__html: closeButton}}
                            onClick={this.props.remove}/>
                </div>
                <textarea
                    className={css.wrapper}
                    placeholder="Enter some text here"
                    value={this.state.text}
                    onChange={this.editNote.bind(this)}>
                </textarea>
            </>
        );
    }
}

export default Note;