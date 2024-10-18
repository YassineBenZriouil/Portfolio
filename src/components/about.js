import React from "react";
import "../style/about.css";
import Animations from "../static/animations";

function About() {
    return (
        <Animations>
            <div className="about_container">
                <h1 className="title">About Me</h1>
                <h3 className="sub_title">My Passion</h3>
                <p className="text">
                    Hi! I'm a junior full-stack developer with a deep passion
                    for creating dynamic web applications. I thrive on solving
                    complex problems through coding and love bringing ideas to
                    life. Learning new technologies is crucial to me as it
                    sharpens my skills and motivates me to build innovative
                    solutions. My goal is to develop applications that offer
                    real value to users while growing as a developer.
                </p>

                <h3 className="sub_title">Front End Skills</h3>
                <ul className="list">
                    <li>
                        <img
                            src="https://img.icons8.com/color/48/000000/javascript.png"
                            alt="JavaScript"
                        />
                        <h3>JavaScript</h3>
                        Proficient in creating interactive features and
                        improving user experiences.
                    </li>
                    <li>
                        <img
                            src="https://img.icons8.com/color/48/000000/tailwindcss.png"
                            alt="Tailwind CSS"
                        />
                        <h3>Tailwind CSS</h3>
                        Skilled in rapidly styling websites for a better UI.
                    </li>
                    <li>
                        <img
                            src="https://img.icons8.com/color/48/000000/bootstrap.png"
                            alt="Bootstrap"
                        />
                        <h3>Bootstrap</h3>
                        Adept at using responsive design to ensure compatibility
                        across devices.
                    </li>
                    <li>
                        <img
                            src="https://img.icons8.com/color/48/000000/react-native.png"
                            alt="React"
                        />
                        <h3>React</h3>
                        Experienced in building dynamic UIs using
                        component-based architecture.
                    </li>
                    <li>
                        <img
                            src="https://img.icons8.com/color/48/000000/html-5.png"
                            alt="HTML & CSS"
                        />
                        <h3>HTML & CSS</h3>
                        Skilled in structuring content and applying styles for
                        visually appealing web pages.
                    </li>
                </ul>

                <h3 className="sub_title">Back End Skills</h3>
                <ul className="list">
                    <li>
                        <img
                            src="https://img.icons8.com/color/48/000000/nodejs.png"
                            alt="Node.js"
                        />
                        <h3>Node.js</h3>
                        Experienced in building server-side applications and
                        RESTful APIs.
                    </li>
                    <li>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"
                            alt="Laravel"
                            style={{ width: "48px", height: "48px" }}
                        />
                        <h3>Laravel</h3>
                        Skilled in creating web applications using MVC
                        architecture.
                    </li>
                    <li>
                        <img
                            src="https://img.icons8.com/color/48/000000/python.png"
                            alt="Python"
                        />
                        <h3>Python</h3>
                        Proficient in using Python for back-end development and
                        data analysis.
                    </li>
                </ul>

                <h3 className="sub_title">Cross-Platform Skills</h3>
                <ul className="list">
                    <li>
                        <img
                            src="https://img.icons8.com/color/48/000000/react-native.png"
                            alt="React Native"
                        />
                        <h3>React Native</h3>
                        Proficient in building mobile apps with responsive
                        designs.
                    </li>
                    <li>
                        <img
                            src="https://img.icons8.com/color/48/000000/flutter.png"
                            alt="Flutter"
                        />
                        <h3>Flutter</h3>
                        Skilled in creating cross-platform mobile applications.
                    </li>
                </ul>

                <h3 className="sub_title">Game Dev Skills</h3>
                <ul className="list">
                    <li>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Godot_icon.svg"
                            alt="Godot"
                            style={{ width: "48px", height: "48px" }}
                        />
                        <h3>Godot</h3>
                        Skilled in developing games and interactive content
                        using a flexible game engine.
                    </li>
                </ul>

                <h3 className="sub_title">Future Goals</h3>
                <p className="text">
                    I aim to become a highly skilled developer, working on
                    projects that challenge my abilities and contribute to
                    advancements in technology. I plan to expand my knowledge in
                    areas like artificial intelligence and cloud computing to
                    stay at the forefront of innovation.
                </p>
            </div>
        </Animations>
    );
}

export default About;
