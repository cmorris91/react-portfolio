import React from "react";
import Image1 from "./images/theMove-screenshot.jpg";
// import Image2 from "./images/LC-Feedback.jpg";
// import Image3 from "./images/LC-Forums.jpg";
// import Image4 from "./images/LC-Login.jpg";
// import Image5 from "./images/LC-Payment.jpg";
// import Image6 from "./images/LC-Plans.jpg";
// import Image7 from "./images/LC-Profile.jpg";
// import Image8 from "./images/LC-Success-Page.jpg";
import MyCarousel from "../components/carousel";

function TheMove () {
    const images = [
        { src: Image1, alt: 'Image 1' }
        // { src: Image2, alt: 'Image 2' },
        // { src: Image3, alt: 'Image 3' },
        // { src: Image4, alt: 'Image 4' },
        // { src: Image5, alt: 'Image 5' },
        // { src: Image6, alt: 'Image 6' },
        // { src: Image7, alt: 'Image 7' },
        // { src: Image8, alt: 'Image 8' }
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