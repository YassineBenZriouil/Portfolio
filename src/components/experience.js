import React from "react";
import "../style/experience.css";

import Animations from "../static/animations";

function Experience() {
    const experiences = [
        {
            title: "Jenior Full Stack Developer",
            company: "For Tech",
            duration: "Jan 2023 - Present",
            description: "Developing web applications using React and Node.js.",
        },
        {
            title: "Intern Software Developer",
            company: "Hight Solutions",
            duration: "Jun 2022 - Dec 2022",
            description: "Assisted in front-end development projects.",
        },
        {
            title: "Web Development Bootcamp",
            company: "OFPPT",
            duration: "2021",
            description: "Learned HTML, CSS, JavaScript, and React.",
        },
    ];
    return (
        <Animations>
            <div className="experience_container">
                <h1>My Experiences</h1>
                <ul className="experience_list">
                    {experiences.map((exp, i) => (
                        <li key={i}>
                            <h2 className="experience_title">{exp.title}</h2>
                            <h3 className="experience_company">
                                {exp.company}
                            </h3>
                            <p className="experience_txt">{exp.duration}</p>
                            <p className="experience_txt">{exp.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </Animations>
    );
}

export default Experience;
