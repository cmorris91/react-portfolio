import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image1 from "./images/LC-Create-Acct.jpg";
import Image2 from "./images/LC-Feedback.jpg";
import Image3 from "./images/LC-Forums.jpg";
import Image4 from "./images/LC-Login.jpg";
import Image5 from "./images/LC-Payment.jpg";
import Image6 from "./images/LC-Plans.jpg";
import Image7 from "./images/LC-Profile.jpg";
import Image8 from "./images/LC-Success-Page.jpg";
import MyCarousel from "../components/carousel";

function Legendary () {

    const images = [
    { src: Image1, alt: 'Image 1' },
    { src: Image2, alt: 'Image 2' },
    { src: Image3, alt: 'Image 3' },
    { src: Image4, alt: 'Image 4' },
    { src: Image5, alt: 'Image 5' },
    { src: Image6, alt: 'Image 6' },
    { src: Image7, alt: 'Image 7' },
    { src: Image8, alt: 'Image 8' }
    ];
   
    return (
        <div className="container">
            <h1>Legendary Collections</h1>
            <p>Founded in 2021, Legendary Applications is a software company dedicated to developing a 
                robust software platform for the sports memorabilia collecting marketplace. 
                Our flagship product, Legendary Collections, will empower our members and allow 
                them to spend more time growing and displaying their collections and less time trying to organize them.
            </p>
            <p>Role: Head of Web Devlopment</p>
           
            <MyCarousel images ={images}/>
        </div>
    )
}

export default Legendary;