import React from "react"
import ExperienceCSS from "./Experience.module.css"



class ExperienceComponent extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            selected : "ctp",
            ctpVariableStyle: {color : "rgb(69, 233, 178)" , backgroundColor: "rgb(180, 179, 179, 0.1)"},
            tutorVariableStyle: {}
        }

        this.handleCtpClick = this.handleCtpClick.bind(this)
        this.handleTutorClick = this.handleTutorClick.bind(this)
    }

    handleTutorClick(e){
        e.preventDefault()

        this.setState({
            selected : "tutor",
            ctpVariableStyle : {},
            tutorVariableStyle: {color : "rgb(69, 233, 178)" , backgroundColor: "rgb(180, 179, 179, 0.1)"}
        })
    }

    handleCtpClick(e){
        e.preventDefault()

        this.setState({
            selected : "ctp",
            tutorVariableStyle : {},
            ctpVariableStyle : {color : "rgb(69, 233, 178)", backgroundColor: "rgb(180, 179, 179, 0.1)"}
        })
    }
    

    render(){
        const ctp = <div className={`${ExperienceCSS.contentCard}`}>
                        <h3 className={`${ExperienceCSS.subHeading}`} style={{fontWeight: "bold"}}>CUNY Tech Prep</h3>
                        <span style={{fontSize: "medium"}}>Software Developer Fellow</span>

                        <ul className={`mt-4 ${ExperienceCSS.ul}`}>
                            <li className={`${ExperienceCSS.li}`}>
                                Selected for a technical training program, as one of 183 students out of 400+ applicants
                            </li>
                            <li className={`${ExperienceCSS.li}`}>
                            Learned in-demand technologies like React, Node + Express, and PostgreSQL as well as industry best
                            practices for design, implementation, and deployment such as MVC, version control with Git/GitHub, 
                            agile & Scrum with Trello and Slack, test driven development, and CI/CD
                            </li>
                        </ul>
                     </div>;

        const tutor = <div className={`${ExperienceCSS.contentCard}`}>
                          <h3 className={`${ExperienceCSS.subHeading}`} style={{fontWeight: "bold"}}>CUNY Tutor Corps</h3>
                          <span style={{fontSize: "medium"}}>Math and Computer Science Tutor</span>

                          <ul className={`mt-4 ${ExperienceCSS.ul}`}>
                            <li className={`${ExperienceCSS.li}`}>
                            Tutor 30+ students for multiple 1-hour sessions at James Madison High School 3 times a week in subjects including Algebra,Trigonometry, Introduction to Java, and Introduction to Python.
                            </li>
                            <li className={`${ExperienceCSS.li}`}>
                            Introduced the fundamentals of Mathematics and Computer Science such as critical thinking and theory to encourage students to actively participate in their independent learning. Which led to an improvement in overall class performance from majority failing grade to an average of 70-80 grade point. Students showed significant interest in pursuing careers in Computer Science.
                            </li>
                            <li className={`${ExperienceCSS.li}`}>
                            Helped 2⁄3 of the student population in each class to make improvements in class participation and exams; and students were more excited about these activities overcoming fears of Computer Science and Math.                          
                            </li>
                          </ul>

                      </div>;

        let show

        if(this.state.selected ==="ctp"){
            show = ctp;
        }else{
            show = tutor
        }
        return (
            <div className={`container-fluid`} style={{marginTop:"9vh"}}>
                <h1 className={`${ExperienceCSS.heading}`}>Relevant Experience</h1>
                <div className={`${ExperienceCSS.buttonDiv}`}>
                    <button onClick={this.handleCtpClick} className={`${ExperienceCSS.buttons} btn`} style={this.state.ctpVariableStyle}>CUNY Tech Prep</button>
                    <button onClick={this.handleTutorClick} className={`${ExperienceCSS.buttons} btn`} style={this.state.tutorVariableStyle}>CUNY Tutor Corps</button>
                </div>

                <div>
                    {show}
                </div>
    
            </div>
        )

    }
   
}

export default ExperienceComponent