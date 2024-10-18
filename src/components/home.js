import React from "react";
import "../style/home.css";
import { Link } from "react-router-dom";
import Animations from "../static/animations";

function Home() {
    return (
        <Animations>
            <div className="home_container">
                <img
                    className="home_img"
                    src="https://media.istockphoto.com/id/1531911838/vector/vector-3d-realistic-yellow-brown-orange-cats-eye-of-a-black-cat-in-the-dark-at-night-cat.jpg?b=1&s=612x612&w=0&k=20&c=TanFloiGO3oge6hs_EcMGbon5twZSn59E1fJjfR_z5o="
                    alt="Profil"
                />
                <div className="home_text_container">
                    <p className="home_text">Hello , I'm</p>
                    <h1 className="home_name">Ben Zriouil Yassine</h1>
                    <h2 className="home_title">Full-Stack-Developer</h2>
                    <div className="home_btns">
                        <button className="btn_black">Download CV</button>
                        <Link to="/contact">
                            <button className="btn_white">Contact Info</button>
                        </Link>
                    </div>
                    <div className="home_social">
                        <i class="fa-brands fa-linkedin fa-2xl"></i>
                        <i class="fa-brands fa-github fa-2xl "></i>
                    </div>
                </div>
            </div>
        </Animations>
    );
}

export default Home;
