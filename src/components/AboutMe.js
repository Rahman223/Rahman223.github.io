import React from "react"
import AboutMeCSS from "./AboutMe.module.css"

function AboutMeComponent (){
    return (
        <div className="container-fluid" style={{marginTop:"9vh"}}>
            <h1 className={`${AboutMeCSS.heading}`}><span></span> About Me</h1>
            <div className="row aboutMeBody">
                <div className="col-md-2">
                </div>
                <div className="col-md-4">
                    <p className={`${AboutMeCSS.textColor} ${AboutMeCSS.textBox}`}>
                        Hello! My name is Shafiullah Rahman. I have joined Mastercard as a Software Engineer after completing my undergraduate degree. I studied Computer Science and Mathematics at Brooklyn College, City University of New York (CUNY).
                        I have always had passion for Mathematics and problem solving from an early age, and I have been introduced to the world of Computer Science in freshman 
                        year of college. I had gotten busy in the realm of full-stack development during college years and internships; working on 
                        full-stack projects.  My productive hobby is taking on challenging problems and coming up with good solutions (primarily CS or Math related but not limited to). 
                        My chill hobbies are: sightseeing/hiking (natural landscape), exercising, blacksmithing, and video gaming. 
                    </p>
                </div>
                <div className={`col-md-4  ${AboutMeCSS.myImgDiv} `}>
                    {/* <div className={`${AboutMeCSS.myImgDiv}`}> */}
                        {/* <img className={`${AboutMeCSS.myImg} `} src="https://media-exp1.licdn.com/dms/image/C4D03AQFgQeC9MdRqCg/profile-displayphoto-shrink_800_800/0/1594058653965?e=1639612800&v=beta&t=Ssa2E7Ae95YlOPK-JIhR-T_04241sS1ppX-wxPM-_zo" alt="my face"></img> */}
                        
                        <img className={`${AboutMeCSS.myImg} `} src="https://firebasestorage.googleapis.com/v0/b/toolsoverflow-a1fb3.appspot.com/o/images%2FIMG_0867.JPG?alt=media&token=02c8c0a6-6e6d-40c3-8cbf-bed4ce61a537" alt="my face"></img>
                    {/* </div> */}
                </div>

                <div className="col-md-2">
                </div>

            </div>

        </div>
    )
}

export default AboutMeComponent