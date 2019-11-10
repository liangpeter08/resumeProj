import ResumeHeaderDetails from '../../components/resume/details/resumeHeader/resumeHeaderDetails';
import ResumeComputerSkills from '../../components/resume/details/resumeComputerSkills/resumeComputerSkills';
import React from 'react';

enum ContentSelections {
    ContactInfo,
    ComputerSkills,
};

namespace ContentSelections {
    export function getComponent(component: ContentSelections | null) {
        if (component === null) return;
        switch (component) {
            case ContentSelections.ContactInfo:
                return <ResumeHeaderDetails></ResumeHeaderDetails>;
            case ContentSelections.ComputerSkills:
                return <ResumeComputerSkills></ResumeComputerSkills>;
            default:
                return <></>;
        }
    }
};

export default ContentSelections;