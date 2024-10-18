import React from "react";

import Header from "./static/header";
import Footer from "./static/footer";

import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/cantact";
import Experience from "./components/experience";
import Projects from "./components/projects";

import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
