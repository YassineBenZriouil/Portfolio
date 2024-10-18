import React, { useEffect } from "react";
import "../style/header.css";

function Theme() {
    const toggleTheme = () => {
        const currentPrimaryColor = getComputedStyle(document.documentElement)
            .getPropertyValue("--primary-color")
            .trim();

        if (currentPrimaryColor === "white") {
            document.documentElement.style.setProperty(
                "--primary-color",
                "black"
            );
            document.documentElement.style.setProperty(
                "--secondary-color",
                "white"
            );
            document.documentElement.style.setProperty(
                "--primary-background-color",
                "white"
            );
            document.documentElement.style.setProperty(
                "--secondary-background-color",
                "black"
            );
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.style.setProperty(
                "--primary-color",
                "white"
            );
            document.documentElement.style.setProperty(
                "--secondary-color",
                "black"
            );
            document.documentElement.style.setProperty(
                "--primary-background-color",
                "black"
            );
            document.documentElement.style.setProperty(
                "--secondary-background-color",
                "white"
            );
            localStorage.setItem("theme", "light");
        }
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            document.documentElement.style.setProperty(
                "--primary-color",
                "black"
            );
            document.documentElement.style.setProperty(
                "--secondary-color",
                "white"
            );
            document.documentElement.style.setProperty(
                "--primary-background-color",
                "white"
            );
            document.documentElement.style.setProperty(
                "--secondary-background-color",
                "black"
            );
        }
    }, []);

    return (
        <button onClick={toggleTheme} className="theme">
            Toggle Theme
        </button>
    );
}

export default Theme;
