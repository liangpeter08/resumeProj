import React, { FunctionComponent } from 'react';
import css from './resumeHeaderDetails.css';

interface ResumeHeaderProps {
};


const resumeHeaderDetails : FunctionComponent<ResumeHeaderProps> = ({}: ResumeHeaderProps) => {

    return (
        <div className={css.wrapper}>
            <div>My Legal name is Yi Chao Peter Liang</div>
            <div>Here is my website: liangpeter.com</div>
            <div>Also I have a old resume website here: https://ycpliang.github.io/ResumeProj/</div>
            <div>Feel free to reach out to my email: liangpeter08@gmail.com</div>
            <div>I have several github account, liangpeter08 is my primary github account as of now</div> 
            <div>My phone number is included as of now, might be removed in future revisions. It would preferred if you text.</div>
        </div>
    );
};

export default resumeHeaderDetails;