import React from "react";
import Image from "./Images/theMove-screenshot.jpg";
import Image2 from "./Images/JumpIn.jpg";
import Image3 from "./Images/group-project.jpg"
import "./style.css"

function Projects () {
    return ( 
        <div className="projectBox"> 

        <h1 className="row" style={{marginBottom: "10rem"}}>Recent Projects</h1>

        <div className="row">
          <div className="project-card" style={{width: "30rem"}}>
            <a className="appLink" href="https://radiant-harbor-61772.herokuapp.com/">The Move</a>
                <a className="repo-img"href="https://github.com/cmorris91/the-move" style={{fontSize: "15px", textDecoration: "none"}}>
                <img src={Image} className="card-img-top" alt="The-Move-App"/> 
                <div className="overlay">Click to see the repo</div>
            </a>
          </div>
          <h2 className="col description">simple application</h2>
        </div>

        <div id="card2" className="row">
          <h2 className="col description">simple application</h2>
          <div className="project-card" style={{width: "30rem"}}>
                <a className="repo-img" href="https://github.com/AFF321/JumpIn" style={{fontSize: "15px", textDecoration: "none"}}>
                <a className="appLink" href="https://vast-dawn-89998.herokuapp.com/">JumpIn</a>
                <img src={Image2} class="card-img-top" alt="JumpIn"/> 
                <div class="overlay">Click to see the repo</div>  
            </a>
          </div>
        </div>

        <div className="row">
          <div className="project-card" style={{width: "30rem"}}>
            <a className="appLink" href="https://cmorris91.github.io/group-project-1/">We Want Travel</a>
                <a className="repo-img" href="https://github.com/cmorris91/group-project-1" style={{fontSize: "15px", textDecoration: "none"}}>
                <img src={Image3} className="card-img-top" alt="Travel Page"/>
                    <div class="overlay">Click to see the repo</div>
            </a>
          </div>
          <h2 className="col description">simple application</h2>
        </div>

        </div>
    )
}

export default Projects;