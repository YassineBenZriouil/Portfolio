import React from "react";
import Animations from "../static/animations";
import "../style/projects.css";

function Projects() {
    return (
        <Animations>
            <div className="main_projects">
                <h1 className="projects_title">Projects</h1>
                <div className="art_container">
                    <article className="card">
                        <img
                            className="project_img"
                            src="https://i0.wp.com/clubkaizenblog.wordpress.com/wp-content/uploads/2022/04/kanban_map.png?resize=800%2C800&ssl=1"
                            alt="img"
                        />
                        <h2 className="project_title">Advanced KanBan</h2>
                        <p className="project_description">
                            A project management tool with enhanced features for
                            task tracking, workflow automation, and team
                            collaboration. Built with React and Firebase for
                            real-time updates.
                        </p>
                        <div className="project_btns">
                            <button className="btn">Git Hub</button>
                            <button className="btn">Live Demo</button>
                        </div>
                    </article>
                    <article className="card">
                        <img
                            className="project_img"
                            src="https://images.ctfassets.net/oco7uqwlyque/LXTHUh7n2PkzrIRhvDh6K/f0259aafd825f1aad2bb9d0026a096f7/mt-blog-cover-barber-salon-menu-1__1_.png?w=760&h=428&q=100&fm=webp&bg=transparent"
                            alt="img"
                        />
                        <h2 className="project_title">Cut It </h2>
                        <p className="project_description">
                            A home barber booking app that lets users schedule a
                            haircut service at their location. Built with React
                            Native and Node.js.
                        </p>
                        <div className="project_btns">
                            <button className="btn">Git Hub</button>
                            <button className="btn">Live Demo</button>
                        </div>
                    </article>{" "}
                    <article className="card">
                        <img
                            className="project_img"
                            src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/802dfbc8-d814-40f2-b0c1-b1e58b1a3d7f.png"
                            alt="img"
                        />
                        <h2 className="project_title">...</h2>
                        <p className="project_description">...</p>
                        <div className="project_btns">
                            <button className="btn">Git Hub</button>
                            <button className="btn">Live Demo</button>
                        </div>
                    </article>
                </div>
            </div>
        </Animations>
    );
}

export default Projects;
