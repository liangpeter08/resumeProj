import React, { FunctionComponent } from 'react';
import css from './resumeComputerSkills.css';
//Note Prop
interface ResumeComputerSkillsProps {
    selectOnClick: () => void;
};

// Note state
const resumeComputerSkills : FunctionComponent<ResumeComputerSkillsProps> = ({selectOnClick}: ResumeComputerSkillsProps) => {

    return (
        <div className={css.resumeComputerSkillsWrapper} onClick={selectOnClick}>
            <div className={css.title}>
                Computer Skills
            </div>
            <div className={css.skillList}>
                <div><b>Web Development</b>: AngularJS, React, JavaScript, Typescript, Thrift, Flask, gRPC, Jinja, HTML, CSS, ASP.NET, ExpressJs, Webpack, Rollup, D3.js</div>
                <div><b>Languages/Database</b>: Go,Java, Python, C, C++, PostgreSQL, mongoDB, Elastic-Search</div>
                <div><b>Application</b>: Visual Studio Code, IntelliJ, Docker, Postman, Amazon Redshift, Github, Gerrit, Jenkins, Datadog, Librato, Sentry, SendGrid, MailChimp, SendWithUs, Filestack</div>
            </div>
        </div>
    );
};

export default resumeComputerSkills;