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
        axios.get('/api/user', {params: {
            google_id: '10001'
        }}).then(({data}) => {
            console.log(data);
            this.setState({
                userInfo: {
                    email: 'test@gmail.com',
                    google_id: '10001',
                }
            });
        });
        axios.get('/api/notes', {params: {
            email: 'test@gmail.com',
        }}).then(({data}) => {
            if (data.length) {
                this.setState({notes: data});
            } else {
                this.setState({notes: [this.getNewNote]});
            }
        });
    }

    successLogin (response: any) {
        console.log(response);
    }

    failLogin (response: any) {
        console.log(response);
    }

    remove(index) {
        console.log(this.state.notes);
        const array = [...this.state.notes];
        array.splice(index, 1);
        this.setState({notes: array});
    }

    createNewNote() {
        this.setState({notes: [...this.state.notes, this.getNewNote]});
    }

    finalize(index, saved) {
        const array = [...this.state.notes];
        array.splice(index, 1, saved);
        this.setState({notes: array});
    }

    render() {
        const notesElem = (this.state.notes || []).map((noteState, index) => 
            <Note key={index} saved={noteState} finalize={(saved) => this.finalize(index, saved)} remove={this.remove.bind(this, index)}></Note>
        );

        return (
            <div className={css.gridTemplate}>
                <div className={css.controls}>
                    <CustomButton additionalClass={css.createNewButton} text={'Create New'} onclick={this.createNewNote.bind(this)} />
                    <div className={css.noteTitle}>Notes</div>
                    <GoogleLogin
                        clientId="239128037217-26f613okjt62dqbhh0p3kkdfa7lnfhkl.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.successLogin.bind(this)}
                        onFailure={this.failLogin.bind(this)}
                        cookiePolicy={'single_host_origin'}
                        accessType={'offline'}
                        isSignedIn={true}
                    />
                </div>
                <div className={css.allNotes}>
                    {notesElem}
                </div>
            </div>
        );
    }
}

export default Notes;