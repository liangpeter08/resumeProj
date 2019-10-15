import React from 'react';
interface NotesProps {
    remove: () => void;
}
interface NotesState {
    text: string;
    title: string;
}
declare class Note extends React.Component<NotesProps, NotesState> {
    constructor(props: NotesProps);
    editNote(e: React.FormEvent<HTMLTextAreaElement>): void;
    editTitle(e: React.FormEvent<HTMLInputElement>): void;
    render(): JSX.Element;
}
export default Note;
