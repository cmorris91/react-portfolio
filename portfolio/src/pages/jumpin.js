import React from "react";
import Image1 from "./images/JumpIn.jpg";

function JumpIn () {
    return (
        <div className="container">
            <h1 className="row">JumpIn</h1>
            <p className="row">JumpIn is an event invitation site that allows users to create, invite and explore events. Need to add more of a description.</p>

            <div className="images">
            <img src={Image1} className="col"></img>
            <img src={Image1} className="col"></img>
            <img src={Image1} className="col"></img>
            </div>
            <div className="links">
                <a className="col">Link to repo</a>
                <a className="col">Link to site</a>
            </div>
        </div>
    )
}

export default JumpIn;