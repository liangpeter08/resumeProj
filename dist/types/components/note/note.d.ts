import { FunctionComponent } from 'react';
import NoteSchema from '../../util/objectDef';
interface NotesProps {
    remove: () => void;
    saved: NoteSchema;
    finalize?: (saved: NoteSchema) => void;
}
declare const Note: FunctionComponent<NotesProps>;
export default Note;
