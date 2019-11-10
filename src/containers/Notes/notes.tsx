import React from 'react';
import css from './notes.css';
import { GoogleLogin } from 'react-google-login';
import CustomButton from '../../components/customButton/customButton';
import Note from '../../components/note/note';
import NoteSchema, {UserInfo} from '../../util/objectDef';
import axios from 'axios';

interface NotesProps {

};

interface NotesState {
    notes: NoteSchema[];
    userInfo?: UserInfo;
};


class Notes extends React.Component<NotesProps, NotesState> {
    constructor(props: NotesProps) {
        super(props);
        this.state = {
            notes: [],
            userInfo: undefined,
        };
    }

    get getNewNote() {
        const userInfo = this.state.userInfo ? this.state.userInfo : {
            email: 'none',
            google_id: '',
        };
        const defaultNote = {
            allowed_email: [userInfo.email],
            title: '',
            content: '',
            email: userInfo.email,
            google_id: userInfo.google_id,
        };
        return defaultNote;
    }

    componentDidMount() {
        // axios.get('/api/user', {params: {
        //     google_id: '10001'
        // }}).then(({data}) => {
        //     console.log(data);
        //     this.setState({
        //         userInfo: {
        //             email: 'test@gmail.com',
        //             google_id: '10001',
        //         }
        //     });
        // });
        this.fetchNotes();
    }

    fetchNotes() {
        if (this.state.userInfo) {
            axios.get('/api/notes', {params: {
                email: this.state.userInfo && this.state.userInfo.email,
            }}).then(({data}) => {
                const loadedNotes : NoteSchema[] = data;
                if (data.length) {
                    // sort by creation id
                    this.setState({notes: loadedNotes.sort((a, b) =>  ((a.note_id || 0) > (b.note_id || 0) ? 1 : -1))});
                } else {
                    this.setState({notes: [this.getNewNote]});
                }
            });
         } else {
            this.setState({notes: [this.getNewNote]});
         }
    }

    successLogin (response: any) {
        const {profileObj} = response;
        const {email, familyName, givenName, googleId, imageUrl} = profileObj;
        this.setState((state) => ({
            userInfo: {
                email,
                family_name: familyName,
                given_name: givenName,
                google_id: googleId,
                image_url: imageUrl,
            },
            notes: state.notes.map(note => Object.assign(note, {allowedEmail: [email], google_id: googleId, email}))
        }), () => this.fetchNotes());
        console.log(response);
    }

    failLogin (response: any) {
        console.log(response);
    }

    remove(index) {
        const array = [...this.state.notes];
        const removedNote: NoteSchema  = array.splice(index, 1)[0];
        this.setState({notes: array});
        if (removedNote.note_id) {
            axios.delete('/api/notes', {data: {note_id: removedNote.note_id || ''}});
        }
    }

    createNewNote() {
        this.setState({notes: [...this.state.notes, this.getNewNote]});
    }


    render() {
        const notesElem = (this.state.notes || []).map((noteState, index) => 
            <Note key={index} saved={noteState} refresh={this.fetchNotes.bind(this)} remove={this.remove.bind(this, index)}></Note>
        );

        return (
            <div className={css.gridTemplate}>
                <div className={css.controls}>
                    <CustomButton additionalClass={css.createNewButton} text={'Create New'} onclick={this.createNewNote.bind(this)} />
                    <div className={css.noteTitle}>Notes</div>
                    {!this.state.userInfo ?
                        <div className={css.loginTab}>
                            <GoogleLogin
                                clientId="239128037217-26f613okjt62dqbhh0p3kkdfa7lnfhkl.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={this.successLogin.bind(this)}
                                onFailure={this.failLogin.bind(this)}
                                cookiePolicy={'single_host_origin'}
                                accessType={'offline'}
                                isSignedIn={true}
                            />
                        </div> :
                        <div className={css.loginTab}>
                            <div className={css.loginName}>{this.state.userInfo.given_name} {this.state.userInfo.family_name}</div>
                            <img className={css.profilePicSize} src={this.state.userInfo.image_url}></img>
                        </div>}
                </div>
                <div className={css.allNotes}>
                    {notesElem}
                </div>
            </div>
        );
    }
}

export default Notes;