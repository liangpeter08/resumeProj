import React from 'react';
import css from './customButton.css';

interface CustomButtonProps {
    onclick: () => void;
    text: string;
}

export default function customButton(props : CustomButtonProps) {
    return (
        <div className={css.button} onClick={props.onclick}>{props.text}</div>
    );
}