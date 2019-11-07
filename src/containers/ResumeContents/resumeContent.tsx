import React, {FunctionComponent, useState} from 'react';
import ResumeDisplayBox from '../resumeDisplayBox/resumeDisplayBox';
import css from './resumeContent.css';
import ContentSelections from './ResumeContentEnum';


const ResumeContent : FunctionComponent = () => {
    const [selectedContent, setSelectedContent] = useState<ContentSelections | null>(null);

    return (
        <div className={selectedContent === null ? css.gridTemplate : css.gridTemplateCollapsed}>
            {selectedContent === null && <div/>}
            <ResumeDisplayBox setSelected={(selected: ContentSelections) => setSelectedContent(selected)}/>
            <div>
                {ContentSelections.getComponent(selectedContent)}
            </div>
        </div>
    );
}

export default ResumeContent