import React from "react";
import Nav from "./components/Navbar";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./style.css";


function App() {

    return (

        <div> 
            <Aside/>
            <Header/>
            <Nav/>
            <Projects/>
            <Skills/>
        </div>
    
    )
}

export default App;


