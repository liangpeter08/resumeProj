export default interface NoteSchema {
    allowed_email: string[];
    content: string;
    created_on: string;
    email: string;
    google_id: string;
    last_modified: string;
    note_id: number;
    title: string;
    version: number;
};