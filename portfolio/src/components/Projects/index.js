import React from "react";
import Image from "./Images/theMove-screenshot.jpg";
import Image2 from "./Images/JumpIn.jpg";
import Image3 from "./Images/group-project.jpg";
import Image4 from "./Images/LC-Login.jpg";
import "./style.css"

function Projects () {
    return ( 
      <div className="projectBox"> 

        <h1 className="row" style={{marginBottom: "6rem"}}>WEB</h1>

        <div className="row project-card">
              <a className="repo-img" href="https://github.com/cmorris91/the-move" style={{fontSize: "15px", textDecoration: "none"}}>
                <p>Legendary Collections</p>
                <img src={Image4} className="project-img"  alt="The-Move-App"/>     
            </a>
        </div>

        <div className="row project-card">
              <a className="repo-img" href="https://github.com/cmorris91/the-move" style={{fontSize: "15px", textDecoration: "none"}}>
                <p>The Move</p>
                <img src={Image} className="project-img"  alt="The-Move-App"/>     
            </a>
        </div>

        <div className="row project-card">
                <a className="repo-img" href="https://github.com/AFF321/JumpIn" style={{fontSize: "15px", textDecoration: "none"}}>
                <p>JumpIn</p>
                <img src={Image2} class="project-img" alt="JumpIn"/>  
            </a>
        </div>

        <div className="row project-card">
              <a className="repo-img" href="https://github.com/cmorris91/group-project-1" style={{fontSize: "15px", textDecoration: "none"}}>
                <p>We Want Travel</p>
                <img src={Image3} className="project-img" alt="Travel Page"/>
            </a>
        </div>

      </div>
    )
}

export default Projects;