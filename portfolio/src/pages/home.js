import React from "react";
import Nav from "../components/Navbar";
import Header from "../components/Header";
import Title from "../components/Title";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import AboutMe from "../components/About-me";
import Contact from "../components/Contact";
import "./style.css";

function Home () {
    return (
        <div>
            <Title/>
            <Header/>
            <Nav/>
            <AboutMe/>
            <Projects/>
            <Skills/>
            <Contact/>
        </div>
    )
}

export default Home;
                
                