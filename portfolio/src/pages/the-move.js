import React from "react";
import Image1 from "./images/theMove-screenshot.jpg";
import Image2 from "./images/LC-Login.jpg";
import Image3 from "./images/theMove3.jpg";
import Image4 from "./images/theMove4.jpg";

import MyCarousel from "../components/carousel";

function TheMove () {
    const images = [
        { src: Image1, alt: 'Image 1' },
        { src: Image2, alt: 'Image 2' },
        { src: Image3, alt: 'Image 3' },
        { src: Image4, alt: 'Image 4' },
        ];
       
        return (
            <div className="container">
                <h1>THE MOVE</h1>
                <p>EDIT TEXT
                </p>
                <p>Role: EDIT</p>
               
                <MyCarousel images ={images}/>
            </div>
        )
}

export default TheMove;