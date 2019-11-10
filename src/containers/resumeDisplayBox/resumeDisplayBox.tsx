import React, { FunctionComponent } from 'react';
import css from './resumeDisplayBox.css';
import ResumeHeader from '../../components/resume/resumeHeader/resumeHeader';
import ResumeComputerSkills from '../../components/resume/resumeComputerSkills/resumeComputerSkills';
import ContentSelections from '../ResumeContents/ResumeContentEnum';

interface ResumeDisplayBoxProps {
    setSelected: (selected : ContentSelections) => void;
};

const ResumeDisplayBox : FunctionComponent<ResumeDisplayBoxProps> = ({setSelected}: ResumeDisplayBoxProps) => {
    return (
        <div className={css.resumeWrapper}>
            <ResumeHeader selectOnClick={() => setSelected(ContentSelections.ContactInfo)}></ResumeHeader>
            <ResumeComputerSkills selectOnClick={() => setSelected(ContentSelections.ComputerSkills)}></ResumeComputerSkills>
        </div>
    );
};

export default ResumeDisplayBox;