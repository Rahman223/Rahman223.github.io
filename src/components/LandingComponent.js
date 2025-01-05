import React from "react";
import LandingComponentCSS from "./LandingComponent.module.css"

function LandingComponent (){
    return(

        // <div className={`${LandingComponentCSS.landing_background} container-fluid  `}>
        //     <div className={`${LandingComponentCSS.overlay} container-fluid `}>
        //     <p>dafjkfjaskfjdkasfjdkslfjklfjaskdfjdkasfjidsafdksfkajfk
        //         dafjkfjaskfjdkasfjdkslfjklfjaskdfjdkasfjidsafdksfkajfk 
        //         fjdkasfjdkslfjklfjaskdfjdkasfjidsafdksfkajfk
        //         dafjkfjaskfjdkasfjdkslfjklfjaskdfjdkasfjidsafdksfkajfk fjdkasfjdkslfjklfjaskdfjdkasfjidsafdksfkajfk
        //         dafjkfjaskfjdkasfjdkslfjklfjaskdfjdkasfjidsafdksfkajfk 
        //     </p>
        //     </div>
        // </div>

        <div className={`container-fluid ${LandingComponentCSS.introCard}`}>
            <span className={`${LandingComponentCSS.themeColor}`} style={{fontSize : "medium"}}>Hi, my name is </span>
            <h1 style={{color: "white", fontWeight: "bold", fontSize: "65px", paddingTop: "10px"}}>Shafiullah Rahman</h1>
            <h2 className={`${LandingComponentCSS.textColor}`} style={{fontSize: "55px"}}>I love to learn things</h2>
            <p className={`${LandingComponentCSS.textColor} ${LandingComponentCSS.textBox} pt-3`}>
                I am a software engineer at Mastercard.
                I am an experienced full-stack developer and I enjoy solving challenging problems.
            </p>
        </div>
)
}

export default LandingComponent;