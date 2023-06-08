import React from "react";
import Image1 from "./images/JumpIn.jpg";
import MyCarousel from "../components/carousel";
import "./style.css";

function JumpIn () {
    const images = [
        { src: Image1, alt: 'Image 1' }
    ]

    return (
        <div className="container">
            <h1 className="row">JumpIn</h1>
            <p className="row">JumpIn is an event invitation site that allows users to create, invite and explore events. Need to add more of a description.</p>
            
            <MyCarousel images ={images}/>
            
            <div className="links">
                <a className="col project-links" href="https://github.com/AFF321/JumpIn">Check out the repo</a>
                <a className="col project-links">Link to site</a>
            </div>
        </div>
    )
}

export default JumpIn;