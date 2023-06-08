import React from "react";
import Image from "./Images/theMove.jpg";
import Image2 from "./Images/JumpIn.jpg";
import Image3 from "./Images/group-project.jpg";
import Image4 from "./Images/LC-Login.jpg";
import { Link } from "react-router-dom";
import "./style.css"

function Projects () {

  const linkStlye = {
    color: "#f3d250",
    fontsize: "35px",
    textDecoration: "none",
    
  }

    return ( 
      <div className="projectBox"> 

        <h1 className="row">WEB</h1>

        <Link to="/legendary" className="row project-card" style={linkStlye}>
          <p>Legendary Collections</p>
          <img src={Image4} className="project-img"  alt="The-Move-App"/> 
        </Link>

        <Link to="/the-move"className="row project-card" style={linkStlye}>
          <p>The Move</p>
          <img src={Image} className="project-img"  alt="The-Move-App"/>       
        </Link>

        <Link to="/jumpin"className="row project-card" style={linkStlye}>
          <p>JumpIn</p>
          <img src={Image2} class="project-img" alt="JumpIn"/>  
        </Link>


      </div>
    )
}

export default Projects;