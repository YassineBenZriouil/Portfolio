import React from "react";
import Animations from "../static/animations";
import "../style/projects.css";

const projectData = [
    {
        title: "Advanced KanBan",
        imgSrc: "https://i.ytimg.com/vi/_3ooazcK4TI/maxresdefault.jpg",
        description:
            "A basic React Native memo app that organizes notes by color priority.",
        githubLink: "https://i.ytimg.com/vi/_3ooazcK4TI/maxresdefault.jpg",
        liveDemoLink: "#",
    },
    {
        title: "Weather App",
        imgSrc: "https://cosaslearning.com/wp-content/uploads/2022/08/Screenshot-339.png",
        description:
            "A weather app with open weather API that allows you to get the weather of any city based on user input.",
        githubLink: "https://github.com/YassineBenZriouil/Weather-App",
        liveDemoLink: "https://weather-app-orcin-three-59.vercel.app",
    },
    {
        title: "Movie library",
        imgSrc: "https://elfhosted.com/images/blog/riven-frontend-library-fixed.png",
        description: "Front end movie library app",
        githubLink: "https://github.com/YassineBenZriouil/Movie-Library",
        liveDemoLink: "#",
    },
    {
        title: "In Development",
        imgSrc: "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/802dfbc8-d814-40f2-b0c1-b1e58b1a3d7f.png",
        description: "In Development",
        githubLink: "#",
        liveDemoLink: "#",
    },
];

function Projects() {
    return (
        <Animations>
            <div className="main_projects">
                <h1 className="projects_title">Projects</h1>
                <div className="art_container">
                    {projectData.map((project, index) => (
                        <article key={index} className="card">
                            <img
                                className="project_img"
                                src={project.imgSrc}
                                alt="img"
                            />
                            <h2 className="project_title">{project.title}</h2>
                            <p className="project_description">
                                {project.description}
                            </p>
                            <div className="project_btns">
                                <button
                                    className="btn"
                                    onClick={() =>
                                        window.open(
                                            project.githubLink,
                                            "_blank"
                                        )
                                    }
                                >
                                    Git Hub
                                </button>
                                <button
                                    className="btn"
                                    onClick={() =>
                                        window.open(
                                            project.liveDemoLink,
                                            "_blank"
                                        )
                                    }
                                >
                                    Live Demo
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </Animations>
    );
}

export default Projects;
