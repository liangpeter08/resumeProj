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
    componentDidMount(): void;
    successLogin(response: any): void;
    failLogin(response: any): void;
    remove(): void;
    render(): JSX.Element;
}
export default Notes;
