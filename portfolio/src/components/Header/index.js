import React from "react";
import Image from "./Images/chelsey.jpg"
import "./style.css"

function Header () {
    return (
        <header>
            <div className="row img-container">
                <img src={Image} alt="chelsey" className="rounded-circle"/>
            </div>
        </header>
    )
}

export default Header;
