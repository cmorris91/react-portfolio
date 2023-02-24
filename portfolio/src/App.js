import React from "react";
import Nav from "./components/Navbar";
import Header from "./components/Header";
import Title from "./components/Title";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AboutMe from "./components/About-me";
import Contact from "./components/Contact";
import JumpIn from "./pages/jumpin";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import "./style.css";


function App() {

    return (
    
        <Router>
            <div> 
                <Title/>
                <Header/>
                <Nav/>
                <AboutMe/>
                <Projects/>
                <Skills/>
                <Contact/>
            </div>
            <div>
                <Routes>
                    <Route path="/jumpin" element={JumpIn}/>
                </Routes>
            </div>
        </Router>

    
    )
}

export default App;


