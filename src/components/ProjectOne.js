import React from "react"
import ProjectOneCSS from "./ProjectOne.module.css"

function ProjectOneComponent(){
    return (

        <div className={`container-fluid`} style={{marginTop:"9vh"}}>
            <h1 style={{textAlign: "center", color: "white", marginBottom: "8vh" }}>Projects</h1>
            

            <div className={`${ProjectOneCSS.card}`}> 
                <div className={`${ProjectOneCSS.box}`}>
                    <img  className={`${ProjectOneCSS.projectImg}`} src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png" alt="project 1"></img>
                    
                    <a href="https://github.com/ElianFelix/travelers-log" target="_blank" className={`${ProjectOneCSS.links} btn`} style={{marginLeft: "auto", paddingTop: "0", paddingBottom: "0"}}><i className="fab fa-github" style={{fontSize :"xx-large"}}></i> </a>
                    <a href="https://travelers-log.herokuapp.com/" target="_blank" className={`${ProjectOneCSS.links} btn`} style={{paddingTop: "0", paddingBottom: "0", paddingRight:"0"}}><i className="fas fa-external-link-alt" style={{fontSize :"xx-large"}}></i></a>

                </div>
                <div className={`${ProjectOneCSS.box} ${ProjectOneCSS.topStack}`}>
                    <p style={{ textAlign: "end", height: "auto", color:"rgb(69, 233, 178)", fontSize:"medium", margin: "0"}}>Full-stack Project</p>
                    <h3 style={{textAlign: "end", height: "auto", color:"white", marginBottom: "15px"}}>Traveler's Log </h3>
                        
                    
                    <p className={`${ProjectOneCSS.textArea}`} style={{lineHeight:"25px"}} >
                    Traveler's Log is a blog posting/location recommenting application that allows users to 
                    post about random and cool places. Post locations are taken from an interactive map which will auto complete 
                    address based on marker Longitude and Latitude so that any place can be posted.
                    </p>
                </div>

            </div>
           

        </div>
    )
}

export default ProjectOneComponent