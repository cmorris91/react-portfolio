import React from "react";
import "./style.css"

function Title () {
    const style1 = {fontSize: "65px"};
    const style2 = {letterSpacing: "4px"}
    return (
        <aside>
            <p style={{...style1,... style2}}>Chelsey Morris</p>
            <p style={{fontSize: "25px"}} >Web Developer & Creative Enthusiast</p>
        </aside>
    )
}

export default Title;