import React from 'react';
import css from './mainPageContent.css';
import CustomButton from '../../components/customButton/customButton';

export default function MainPageContent() {
    return (
        <div className={css.body}>
            <div className={css.backgroundWhite}>
            </div>
            <div className={css.backgroundBlur}>
            </div>
            <div className={css.backgroundPic}>
                <div className={css.topIntro}>
                </div>
                <div className={css.mainIntro}>
                    Welcome to my website
                </div>
                <div className={[css.mainIntro, css.subIntro].join(' ')}>
                    Check out my resume and my simple tools
                </div>
            </div>

            <div className={css.content}>
                <CustomButton text={"Contact Me"} onclick={() => {}} />
            </div>
            <div className={[css.content, css.reverseContent, css.footer].join(' ')}>
                <span className={css.extra}>The source code is avaliable on</span>
                <span> &nbsp; Github: &nbsp;</span>
                <a href="https://github.com/liangpeter08/resumeProj">
                    github.com/liangpeter08/resumeProj
                </a>
            </div>
        </div>
    );
}