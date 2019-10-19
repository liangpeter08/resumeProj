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
}
export interface UserInfo {
    created_on: string;
    family_name: string;
    given_name: string;
    google_id: string;
    image_url: string;
    last_login: string;
    user_id: number;
}
