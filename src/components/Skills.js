import React from "react"
import SkillsCSS from "./Skills.module.css"



function SkillsComponent(){
    return (
        <div className="container-fluid row" style={{marginTop:"9vh"}}>
            <h1 className={`${SkillsCSS.headding}`}>Skills</h1>
            <div className="col-md-4">
                <h2 className="mb-4">Spoken Languages</h2>

                <h4>Bengali</h4>
                <div className="progress mb-3">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: "95%", color: "black", fontWeight:"bold"}}>95%</div>
                </div>

                <h4>English</h4>
                <div className="progress mb-3">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: "95%", color: "black", fontWeight:"bold"}}>95%</div>
                </div>

                <h4>Hindi</h4>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" style={{width: "35%", color: "black", fontWeight:"bold"}}>35%</div>
                </div>
            </div>

            <div className={`col-md-4 ${SkillsCSS.verticalLine}`}>
                <h2 className="mb-4">Programming Languages</h2>

                <h4>Java</h4>
                <div className="progress mb-3">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: "95%", color: "black", fontWeight:"bold"}}>95%</div>
                </div>

                <h4>C++</h4>
                <div className="progress mb-3">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: "90%", color: "black", fontWeight:"bold"}}>90%</div>
                </div>

                <h4>JavaScript</h4>
                <div className="progress mb-3">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: "90%", color: "black", fontWeight:"bold"}}>90%</div>
                </div>

                <h4>R</h4>
                <div className="progress mb-3">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: "50%", color: "black", fontWeight:"bold"}}>50%</div>
                </div>

                <h4>Python</h4>
                <div className="progress mb-3">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "40%", color: "black", fontWeight:"bold"}}>40%</div>
                </div>

                <h4>Scheme</h4>
                <div className="progress mb-3">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "40%", color: "black", fontWeight:"bold"}}>40%</div>
                </div>

            </div>
            <div className={`col-md-4 ${SkillsCSS.verticalLine}`}>

                <h2 className="mb-4">Technologies</h2>

                <h4>React.js</h4>
                <div className="progress mb-3">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: "90%", color: "black", fontWeight:"bold"}}>90%</div>
                </div>

                <h4>Node.js</h4>
                <div className="progress mb-3">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: "90%", color: "black", fontWeight:"bold"}}>90%</div>
                </div>

                <h4>Express.js</h4>
                <div className="progress mb-3">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: "90%", color: "black", fontWeight:"bold"}}>90%</div>
                </div>

                <h4>Sequelize.js</h4>
                <div className="progress mb-3">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: "90%", color: "black", fontWeight:"bold"}}>90%</div>
                </div>

                <h4>Google Maps API</h4>
                <div className="progress mb-3">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: "90%", color: "black", fontWeight:"bold"}}>90%</div>
                </div>

                <h4>Passport.js</h4>
                <div className="progress mb-3">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%", color: "black", fontWeight:"bold"}}>80%</div>
                </div>

                <h4>Jest.js</h4>
                <div className="progress mb-3">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%", color: "black", fontWeight:"bold"}}>80%</div>
                </div>

                <h4>Firebase Storage</h4>
                <div className="progress mb-3">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%", color: "black", fontWeight:"bold"}}>80%</div>
                </div>

                <h4>Git/GitHub</h4>
                <div className="progress mb-3">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%", color: "black", fontWeight:"bold"}}>80%</div>
                </div>

                </div>

            
        </div>
    )
}

export default SkillsComponent