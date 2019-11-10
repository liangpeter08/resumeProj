import React, {FunctionComponent, useState} from 'react';
import ResumeDisplayBox from '../resumeDisplayBox/resumeDisplayBox';
import css from './resumeContent.css';
import ContentSelections from './ResumeContentEnum';


const ResumeContent : FunctionComponent = () => {
    const [selectedContent, setSelectedContent] = useState<ContentSelections | null>(null);

    const handleSelection = (selected : ContentSelections) => {
        if (selectedContent === selected) {
            setSelectedContent(null);
        } else {
            setSelectedContent(selected);
        }
    };

    return (
        <div className={selectedContent === null ? css.gridTemplate : css.collapsedGrid}>
            {<div className={css.placeHolder}/>}
            <ResumeDisplayBox setSelected={(selected: ContentSelections) => handleSelection(selected)}/>
            <div className={css.content}>
                {ContentSelections.getComponent(selectedContent)}
            </div>
        </div>
    );
}

export default ResumeContent