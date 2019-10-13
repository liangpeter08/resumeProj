import React from 'react';
import ResumeDisplayBox from '../resumeDisplayBox/resumeDisplayBox';
import css from './resumeContent.css';

export default function ResumeContent() {
    return (
        <div className={css.gridTemplate}>
            <div></div>
            <ResumeDisplayBox />
            <div></div>
        </div>
    );
}