import React,  { Component }from "react";
import "./style.css";
import { Button, Divider, Transition } from 'semantic-ui-react'

export default class TransitionExampleTransition extends Component {
  state = { visible: true }

  toggleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }))

  render() {
    const { visible } = this.state

    return (
      <div>
      
        <main>
            <div id="about-me">
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
}




// function AboutMe () {
//     return (
//         <main>
//             <div id="about-me">
//             <h2>Hello, I’m Chelsey Morris.</h2>
//             <p>My balance of creativity and 
//                 attention to detail allow me to build unique and exceptional 
//                 products.
//                 I'm a full stack Web Developer with a BFA from the University of the Arts. 
//                 I recently earned a certificate in Web Development from UCLA Bootcamp Extension. I’m excited to bring my individual skillset to the industry and see what the future has to offer.
//             </p>
//             </div>
//         </main>
//     )
// }

// export default AboutMe;