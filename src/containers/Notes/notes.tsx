import React from 'react';
import css from './notes.css';
import { GoogleLogin } from 'react-google-login';
import CustomButton from '../../components/customButton/customButton';
import Note from '../../components/note/note';

interface NotesProps {

};

interface NotesState {

};

class Notes extends React.Component<NotesProps, NotesState> {
    constructor(props: NotesProps) {
        super(props);
        this.state = {
        };
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
        return (
            <div className={css.gridTemplate}>
                <div className={css.controls}>
                    <CustomButton text={'Create New'} onclick={() => {}} />
                    <GoogleLogin
                        clientId="239128037217-26f613okjt62dqbhh0p3kkdfa7lnfhkl.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.successLogin}
                        onFailure={this.failLogin}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
                <div>
                    <Note remove={this.remove}></Note>
                </div>
            </div>
        );
    }
}

export default Notes;