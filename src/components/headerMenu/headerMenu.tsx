import * as React from 'react'
import css from './headerMenu.css';
import close from '../../assets/close.svg';
import {Link} from 'react-router-dom';

interface HeaderMenuProps {
    onClose: (boolean) => void;
};

export default function HeaderMenu(props: HeaderMenuProps) {
    return (
        <div className={css.menuOptions}>
            <div className={css.closeButton} dangerouslySetInnerHTML={{__html: close}}
                onClick={props.onClose}/>
            <div className={css.menuChoicesContainer}>
                <Link to="/view/" className={css.menuChoices} onClick={props.onClose}>Home</Link>
                <Link to="/view/resume" className={css.menuChoices} onClick={props.onClose}>Resume</Link>
                <Link to="/view/notes" className={css.menuChoices} onClick={props.onClose}>Notes</Link>
                <Link to="/view/contact" className={css.menuChoices} onClick={props.onClose}>Contact</Link>

            </div>
        </div>          
    );
}