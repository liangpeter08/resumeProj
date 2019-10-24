import { FunctionComponent } from 'react';
import NoteSchema from '../../util/objectDef';
interface NotesProps {
    remove: () => void;
    saved: NoteSchema;
}
declare const Note: FunctionComponent<NotesProps>;
export default Note;
