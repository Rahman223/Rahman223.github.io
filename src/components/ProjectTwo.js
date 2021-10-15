import React from "react"
import ProjectTwoCSS from "./ProjectTwo.module.css"

function ProjectTwoComponent(){
    return(
        <div>

            <div className={`${ProjectTwoCSS.card}`}> 
                <div className={`${ProjectTwoCSS.box}`}>
                <a href="https://github.com/Rahman223/ToolsOverflow" target="_blank" className={`${ProjectTwoCSS.links} btn`} style={{paddingTop: "0", paddingBottom: "0", paddingLeft:"0"}}><i className="fab fa-github" style={{fontSize :"xx-large"}}></i> </a>
                <a href="" target="_blank" className={`${ProjectTwoCSS.links} btn`} style={{marginRight: "auto", paddingTop: "0", paddingBottom: "0"}}><i className="fas fa-external-link-alt" style={{fontSize :"xx-large"}}></i></a>
                    
                    <img  className={`${ProjectTwoCSS.projectImg}`} src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png" alt="project 2"></img>
                    
                    
                </div>
                <div className={`${ProjectTwoCSS.box} ${ProjectTwoCSS.topStack}`}>
                    <p style={{ textAlign: "end", height: "auto", color:"rgb(69, 233, 178)", fontSize:"medium", margin: "0"}}>Full-stack Project (In-Progress)</p>
                    <h3 style={{textAlign: "end", height: "auto", color:"white", marginBottom: "15px"}}>ToolsOverflow</h3>
                        
                    
                    <p className={`${ProjectTwoCSS.textArea}`} style={{lineHeight:"25px"}} >
                    ToolsOverflow is a web application that allows users to borrow and share all kinds of tools. 
                    Users will have google maps direction to pick up locations. This app was made for the creative minds 
                    who are limited by resources.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default ProjectTwoComponent