import React, { FunctionComponent } from 'react';
import css from './resumeDisplayBox.css';
import ResumeHeader from '../../components/resume/resumeHeader/resumeHeader';
import ContentSelections from '../ResumeContents/ResumeContentEnum';

interface ResumeDisplayBoxProps {
    setSelected: (selected : ContentSelections) => void;
};

const ResumeDisplayBox : FunctionComponent<ResumeDisplayBoxProps> = ({setSelected}: ResumeDisplayBoxProps) => {
    return (
        <div className={css.resumeWrapper}>
            <ResumeHeader selectOnClick={() => setSelected(ContentSelections.ContactInfo)}></ResumeHeader>
        </div>
    );
};

export default ResumeDisplayBox;