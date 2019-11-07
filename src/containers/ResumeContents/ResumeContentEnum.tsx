import ResumeHeaderDetails from '../../components/resume/details/resumeHeader/resumeHeaderDetails';
import React from 'react';

enum ContentSelections {
    ContactInfo,
};

namespace ContentSelections {
    export function getComponent(component: ContentSelections | null) {
        if (component === null) return;
        switch (component) {
            case ContentSelections.ContactInfo:
                return <ResumeHeaderDetails></ResumeHeaderDetails>
        }
    }
};

export default ContentSelections;