import React from "react";
// import Nav from "./components/Navbar";
// import Header from "./components/Header";
// import Title from "./components/Title";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import AboutMe from "./components/About-me";
// import Contact from "./components/Contact";
import Home from "./pages/home";
import JumpIn from "./pages/jumpin";
import Legendary from "./pages/legendary";
import TheMove from "./pages/the-move";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

function App() {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/jumpin" element={<JumpIn/>}/>
                    <Route path="/legendary" element={<Legendary/>}/>
                    <Route path="/the-move" element={<TheMove/>}/>
                </Routes>
           
        </Router> 
    )
}

export default App;


