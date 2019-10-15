import React from 'react';
interface NotesProps {
}
interface NotesState {
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
