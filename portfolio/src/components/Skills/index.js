import React from "react";
import "./style.css"

function Skills () {
    return (
        <div id="skills">
            <body className="skills-body" >
                <h1>Skills</h1>
                <div className="row">
                    <div className="col frontEnd">
                        <h3>Front End</h3>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Javascript (ES6)</p>
                            <p>React</p>
                            <p >Jquery</p>
                            <p>Bootstrap</p>
                            <p>Moment</p>
                    </div>
                    <div className="col backEnd">
                        <h3>Back End</h3>
                            <p>Node.js</p>
                            <p>Express</p>
                            <p>MySQL</p>
                            <p>Sequelize</p>
                            <p>Handlebars</p>
                            <p>Express Session</p>
                            <p>Mongo</p>
                            <p>Mongoose</p>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default Skills;