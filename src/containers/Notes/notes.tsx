import React from 'react';
import css from './notes.css';
import { GoogleLogin } from 'react-google-login';

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
    successLogin () {

    }

    failLogin () {

    }

    render() {
        return (
            <div className={css.gridTemplate}>
                <div className={css.controls}>
                <GoogleLogin
                    clientId="239128037217-26f613okjt62dqbhh0p3kkdfa7lnfhkl.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.successLogin}
                    onFailure={this.failLogin}
                    cookiePolicy={'single_host_origin'}
                />
                </div>
                <div></div>
            </div>
        );
    }
}

export default Notes;