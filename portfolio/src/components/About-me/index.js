import React from "react";
import "./style.css";
    
function AboutMe () {

  const displayBody = () => {
    let body = document.getElementById("body");
    if(body.style.display == "none") {
      body.style.display = "block";
    } else if (body.style.display == "block") {
      body.style.display = "none"
    }
  }

  return (
    <div>
        <main id="about-me">
          <div className="header">
            <button onClick={displayBody}>A Bit About Me</button>
          </div>
          <div id="body">
            <h2>Hello, I’m Chelsey Morris.</h2>
            <p>My balance of creativity and 
                attention to detail allow me to build unique and exceptional 
                products.
                I'm a full stack Web Developer with a BFA from the University of the Arts. 
                I recently earned a certificate in Web Development from UCLA Bootcamp Extension. I’m excited to bring my individual skillset to the industry and see what the future has to offer.
            </p>
          </div>
        </main>
      
      </div>
    )
  }
  
  export default AboutMe;
