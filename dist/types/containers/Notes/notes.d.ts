import React from 'react';
import NoteSchema, { UserInfo } from '../../util/objectDef';
interface NotesProps {
}
interface NotesState {
    notes: NoteSchema[];
    userInfo?: UserInfo;
}
declare class Notes extends React.Component<NotesProps, NotesState> {
    constructor(props: NotesProps);
    readonly getNewNote: {
        allowed_email: string[];
        title: string;
        content: string;
        email: string;
        google_id: string;
    };
    componentDidMount(): void;
    successLogin(response: any): void;
    failLogin(response: any): void;
    remove(index: any): void;
    createNewNote(): void;
    render(): JSX.Element;
}
export default Notes;
