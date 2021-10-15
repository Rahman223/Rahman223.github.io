import React from "react"
import ContactCSS from "./Contact.module.css"

function ContactComponent(){
    return(
        <div className="container-fluid">
            <h1 style={{color: "white", textAlign: "center", marginBottom:"25px", fontSize: "xxx-large"}}>Get to Know Me</h1>
            <p className={`${ContactCSS.textBox}`}>I am graduating soon and I am open to opportunities. feel free to reach out on Linked In, my inbox is always open
               whether you have a question or just want to talk.
            </p>

            <div style={{display: "flex", justifyContent:"center", marginTop: "3vh"}}>
                <a href="https://github.com/Rahman223" target="_blank" className={`${ContactCSS.links} btn`}><i className="fab fa-github" style={{fontSize :"xx-large"}}></i> </a>
                <a href="https://www.linkedin.com/in/shafiullahrahman/" target="_blank" className={`${ContactCSS.links} btn`}><i className="fab fa-linkedin" style={{fontSize :"xx-large"}}></i></a>
            </div>
        </div>
    )
}

export default ContactComponent