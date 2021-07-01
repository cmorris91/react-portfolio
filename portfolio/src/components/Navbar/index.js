import React from "react";
import "./style.css";
import Resume from "./Resume/resume.pdf";


function Nav () {
    return (
        <nav>
            <div className="navs row justify-content-center">
                <a className="nav-link col-12 col-lg-3" href="#contact-me">Get In Touch</a>
                <a className="nav-link col-12 col-lg-3" href="#projects">My Work</a>
                <a className="nav-link col-12 col-lg-3" href="#skills">Skills</a>
                <a className="nav-link col-12 col-lg-3" href={Resume} download>Resume</a>
            </div>
        </nav>
    )
}

export default Nav;