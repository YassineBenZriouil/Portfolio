import React from "react";
import "../style/about.css";
import Animations from "../static/animations";

function About() {
    return (
        <Animations>
            <div className="about_container">
                <h1 className="title">About Me</h1>
                <h3 className="sub_title">My Background</h3>
                <p className="text">
                    I am a focused junior full-stack developer, currently
                    interning as part of my second-year web development training
                    at OFPPT (Bac +2) in Morocco. I am dedicated to building
                    functional and efficient web applications, and I approach
                    problem-solving and learning with a structured mindset. I am
                    proficient in developing complete websites using
                    technologies such as React.js, Node.js, PHP, ASP.NET, and
                    SQL/NoSQL databases. Additionally, I am expanding my
                    expertise in cross-platform mobile application development
                    using React Native and Flutter.
                </p>

                <h3 className="sub_title">Front End Skills</h3>
                <ul className="list">
                    <li>
                        <img
                            src="https://img.icons8.com/color/48/000000/javascript.png"
                            alt="JavaScript"
                        />
                        <h3>JavaScript</h3>
                        Strong understanding of interactive features for
                        seamless user experiences.
                    </li>
                    <li>
                        <img
                            src="https://img.icons8.com/color/48/000000/tailwindcss.png"
                            alt="Tailwind CSS"
                        />
                        <h3>Tailwind CSS</h3>
                        Proficient in quick styling for clean, responsive UI
                        design.
                    </li>
                    <li>
                        <img
                            src="https://img.icons8.com/color/48/000000/bootstrap.png"
                            alt="Bootstrap"
                        />
                        <h3>Bootstrap</h3>
                        Experienced with responsive design for consistent
                        cross-device compatibility.
                    </li>
                    <li>
                        <img
                            src="https://img.icons8.com/color/48/000000/react-native.png"
                            alt="React"
                        />
                        <h3>React</h3>
                        Knowledgeable in component-based architecture for
                        efficient UI development.
                    </li>
                    <li>
                        <img
                            src="https://img.icons8.com/color/48/000000/html-5.png"
                            alt="HTML & CSS"
                        />
                        <h3>HTML & CSS</h3>
                        Solid skills in structuring and styling for visually
                        appealing layouts.
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
                        Familiar with server-side applications and RESTful APIs.
                    </li>
                    <li>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"
                            alt="Laravel"
                            style={{ width: "48px", height: "48px" }}
                        />
                        <h3>Laravel</h3>
                        Familiar with MVC-based development for building
                        structured web apps.
                    </li>
                    <li>
                        <img
                            src="https://img.icons8.com/color/48/000000/python.png"
                            alt="Python"
                        />
                        <h3>Python</h3>
                        Skilled in Python programming, with experience in
                        scripting and automation.{" "}
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
                        Competent in mobile app development with responsive
                        designs.
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
                        Capable of creating interactive games and simulations.
                    </li>
                </ul>
                <br />
                <h3 className="sub_title">Future Goals</h3>
                <p className="text">
                    My goal is to become a versatile developer, expanding my
                    skills in areas like AI and cloud computing to remain
                    adaptive in a rapidly evolving tech landscape.
                </p>
            </div>
        </Animations>
    );
}

export default About;
