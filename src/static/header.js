import React, { useState } from "react";
import "../style/header.css";
import { Link } from "react-router-dom";
import Theme from "./theme";

function Header() {
    const [open, setIsOpen] = useState(false);

    const handleHeaderToggle = () => {
        setIsOpen(!open);
    };

    const handleClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="main_Header">
                <h1>
                    <Link onClick={handleClick} className="Prt_Name" to="/">
                        Ben Zriouil Yassine
                    </Link>
                </h1>

                <ul className="norm_list">
                    <li className="list_item">
                        <Link
                            onClick={handleClick}
                            className="react_link"
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="list_item">
                        <Link
                            onClick={handleClick}
                            className="react_link"
                            to="/about"
                        >
                            About Me
                        </Link>
                    </li>
                    <li className="list_item">
                        <Link
                            onClick={handleClick}
                            className="react_link"
                            to="/experience"
                        >
                            Experience
                        </Link>
                    </li>
                    <li className="list_item">
                        <Link
                            onClick={handleClick}
                            className="react_link"
                            to="/projects"
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="list_item">
                        <Link
                            onClick={handleClick}
                            className="react_link"
                            to="/contact"
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Theme />
                    </li>
                </ul>

                <button className="brg_btn" onClick={handleHeaderToggle}>
                    ☰
                </button>
            </div>
            <div className={open ? "sub_nav_open" : "sub_nav_closed"}>
                <ul className="hidden-list">
                    <li className="list_item">
                        <Link
                            onClick={handleClick}
                            className="react_link"
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="list_item">
                        <Link
                            onClick={handleClick}
                            className="react_link"
                            to="/about"
                        >
                            About Me
                        </Link>
                    </li>
                    <li className="list_item">
                        <Link
                            onClick={handleClick}
                            className="react_link"
                            to="/experience"
                        >
                            Experience
                        </Link>
                    </li>
                    <li className="list_item">
                        <Link
                            onClick={handleClick}
                            className="react_link"
                            to="/projects"
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="list_item">
                        <Link
                            onClick={handleClick}
                            className="react_link"
                            to="/contact"
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Theme />
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Header;
