import * as React from 'react'
import css from './headerMenu.css';
import close from '../../assets/close.svg';

interface HeaderMenuProps {
    onClose: (boolean) => void;
};

export default function HeaderMenu(props: HeaderMenuProps) {
    return (
        <div className={css.menuOptions}>
            <div className={css.closeButton} dangerouslySetInnerHTML={{__html: close}}
                onClick={props.onClose}/>
            <div className={css.menuChoicesContainer}>
                <div className={css.menuChoices}>Dashboard</div>
                <div className={css.menuChoices}>Tools</div>
                <div className={css.menuChoices}>Change Theme</div>
                <div className={css.menuChoices}>Edit Dashboard</div>
            </div>
        </div>          
    );
}