import React from "react";
import "../style/experience.css";

import Animations from "../static/animations";

function Experience() {
    const experiences = [
        {
            title: "Web Development Bootcamp",
            company: "OFPPT",
            duration: "2022 - 2025",
            description: "Learned HTML, CSS, JavaScript, and React.",
        },
        {
            title: "Freelance Front-End Developer",
            company: "Self-Employed",
            duration: "2022 ",
            description:
                "Specialized in converting Figma designs into fully functional front-end websites, ensuring responsive and user-friendly interfaces using HTML, CSS, JavaScript, and React. Collaborated with clients to bring their design visions to life, meeting deadlines and maintaining high-quality standards.",
        },
        {
            title: "Game Developer (Godot Engine)",
            company: "Independent Game Development Team",
            duration: "2023 ",
            description:
                "Worked as part of a small team in the development of a game using the Godot engine. Contributed to both the programming and design aspects of the game, focusing on game mechanics, UI integration, and ensuring smooth performance across platforms. Collaborated closely with team members to ensure project milestones were met.",
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
                <br />
                <br />
            </div>
        </Animations>
    );
}

export default Experience;
