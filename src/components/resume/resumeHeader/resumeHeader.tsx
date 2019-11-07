import React, { FunctionComponent } from 'react';
import css from './resumeHeader.css';
//Note Prop
interface ResumeHeaderProps {
    selectOnClick: () => void;
};

// Note state
const resumeHeader : FunctionComponent<ResumeHeaderProps> = ({selectOnClick}: ResumeHeaderProps) => {

    return (
        <div className={css.resumeHeaderWrapper} onClick={selectOnClick}>
            <div className={css.nameHeader}>Peter Liang</div>
            <div className={css.contactInfo}>
                <div>Website: liangpeter.com</div>
                <div>929-310-1298</div>
            </div>
            <div className={css.contactInfo}>
                <div>liangpeter08@gmail.com</div>
                <div>Github: liangpeter08</div>
            </div>
        </div>
    );
};

export default resumeHeader;