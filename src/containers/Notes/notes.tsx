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

    componentDidMount() {
        axios.get('/api/user', {params: {
            google_id: '10001'
        }}).then(({data}) => console.log(data));
        axios.get('/api/notes', {params: {
            email: 'test@gmail.com'
        }}).then(({data}) => this.setState({notes: data}));
    }

    successLogin (response: any) {
        console.log(response);
    }

    failLogin (response: any) {
        console.log(response);
    }

    remove() {
    }

    render() {
        const notesElem = this.state.notes.map((noteState) => 
            <Note saved={noteState} remove={this.remove}></Note>
        );

        return (
            <div className={css.gridTemplate}>
                <div className={css.controls}>
                    <CustomButton text={'Create New'} onclick={() => {}} />
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
                <div>
                    {notesElem}
                </div>
            </div>
        );
    }
}

export default Notes;