import React from 'react';
import css from './customButton.css';

interface CustomButtonProps {
    onclick: () => void;
    text: string;
    additionalClass?: string;
}

export default function customButton({onclick, text, additionalClass = ''} : CustomButtonProps) {
    return (
        <div className={[css.button, additionalClass].join(' ')} onClick={onclick}>{text}</div>
    );
}