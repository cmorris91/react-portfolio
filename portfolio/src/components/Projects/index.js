import React from "react";
import Image from "./Images/theMove-screenshot.jpg"
import "./style.css"

function Projects () {
    return ( 
        <div> 
          <div className="project-card" style={{width: "30rem"}}>
            <a href="https://radiant-harbor-61772.herokuapp.com/">The Move</a>
            <a className="repo-img"href="https://github.com/cmorris91/the-move" style={{fontSize: "15px", textDecoration: "none"}}>
            <img src={Image} className="card-img-top" alt="The-Move-App"/> 
              <div className="overlay">Click to see the repo</div>
          </a>
          </div>
        </div>
    )
}

export default Projects;