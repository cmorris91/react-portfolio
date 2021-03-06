import React from "react";
import Nav from "./components/Navbar";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AboutMe from "./components/About-me";
import Contact from "./components/Contact";
import "./style.css";


function App() {

    return (

        <div> 
            <Aside/>
            <Header/>
            <Nav/>
            <AboutMe/>
            <Projects/>
            <Skills/>
            <Contact/>
        </div>
    
    )
}

export default App;


