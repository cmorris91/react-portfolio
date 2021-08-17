import React from "react";
import "./style.css"

function Skills () {
    return (
        <div id="skills">
            <body className="skills-body">
                <h1>Skills</h1>
                <div className="row">
                    <div className=" col skillHeading">
                        <h2>Front End</h2>
                    </div>
                    <div className="col skillHeading">
                        <h2>Back End</h2>
                    </div>
                </div>
                <div className="row skills-columns">
                    <div className="col frontEnd">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Javascript (ES6)</p>
                            <p>React</p>
                            <p >Jquery</p>
                            <p>Bootstrap</p>
                            <p>Moment</p>
                    </div>

                    <div className="col backEnd">
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