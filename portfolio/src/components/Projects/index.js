import React from "react";
import Image from "./Images/theMove-screenshot.jpg";
import Image2 from "./Images/JumpIn.jpg";
import Image3 from "./Images/group-project.jpg";
import Image4 from "./Images/LC-Login.jpg";
import { Link } from "react-router-dom";
import "./style.css"

function Projects () {
    return ( 
      <div className="projectBox"> 

        <h1 className="row" style={{marginBottom: "6rem"}}>WEB</h1>

        <Link to="/legendary" className="row project-card">
          <p>Legendary Collections</p>
          <img src={Image4} className="project-img"  alt="The-Move-App"/> 
        </Link>

        <Link to="/the-move"className="row project-card">
          <p>The Move</p>
          <img src={Image} className="project-img"  alt="The-Move-App"/>       
        </Link>

        <Link to="/jumpin"className="row project-card">
          <p>JumpIn</p>
          <img src={Image2} class="project-img" alt="JumpIn"/>  
        </Link>

        <Link className="row project-card">
          <p>We Want Travel</p>
          <img src={Image3} className="project-img" alt="Travel Page"/>
        </Link>

      </div>
    )
}

export default Projects;