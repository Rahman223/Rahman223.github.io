import React from "react"
import ExperienceCSS from "./Experience.module.css"



class ExperienceComponent extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            selected : "SDE2",
            ctpVariableStyle: {},
            tutorVariableStyle: {},
            SDE1VariableStyle: {},
            SDE2VariableStyle: {color : "rgb(69, 233, 178)" , backgroundColor: "rgb(180, 179, 179, 0.1)"}
        }

        this.handleCtpClick = this.handleCtpClick.bind(this)
        this.handleTutorClick = this.handleTutorClick.bind(this)
        this.handleSDE1Click = this.handleSDE1Click.bind(this)
        this.handleSDE2Click = this.handleSDE2Click.bind(this)
    }

    handleSDE2Click(e){
        e.preventDefault()

        this.setState({
            selected : "SDE2",
            ctpVariableStyle : {},
            tutorVariableStyle: {},
            SDE1VariableStyle: {},
            SDE2VariableStyle: {color : "rgb(69, 233, 178)" , backgroundColor: "rgb(180, 179, 179, 0.1)"}
        })
    }

    handleSDE1Click(e){
        e.preventDefault()

        this.setState({
            selected : "SDE1",
            ctpVariableStyle : {},
            tutorVariableStyle: {},
            SDE1VariableStyle: {color : "rgb(69, 233, 178)" , backgroundColor: "rgb(180, 179, 179, 0.1)"},
            SDE2VariableStyle: {}
        })
    }

    handleTutorClick(e){
        e.preventDefault()

        this.setState({
            selected : "tutor",
            ctpVariableStyle : {},
            tutorVariableStyle: {color : "rgb(69, 233, 178)" , backgroundColor: "rgb(180, 179, 179, 0.1)"},
            SDE1VariableStyle: {},
            SDE2VariableStyle: {}
        })
    }

    handleCtpClick(e){
        e.preventDefault()

        this.setState({
            selected : "ctp",
            tutorVariableStyle : {},
            ctpVariableStyle : {color : "rgb(69, 233, 178)", backgroundColor: "rgb(180, 179, 179, 0.1)"},
            SDE1VariableStyle: {},
            SDE2VariableStyle: {}
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

        const SDE1 = <div className={`${ExperienceCSS.contentCard}`}>
                        <h3 className={`${ExperienceCSS.subHeading}`} style={{fontWeight: "bold"}}>Mastercard</h3>
                        <span style={{fontSize: "medium"}}>Software Engineer I</span>

                        <ul className={`mt-4 ${ExperienceCSS.ul}`}>
                            <li className={`${ExperienceCSS.li}`}>
                            Built automate pipelines to spin-up development environments. Automated the process to keep dev-cloud databases up-to-date with real prod-like environments. Allowed developers to run more robust tests in the dev-cloud environment during development phase and before release, reducing potential production incidents.
                            </li>
                            <li className={`${ExperienceCSS.li}`}>
                            Improved the team's development efficiency through automation, reducing 30%-40% effort that was previously done manually.
                            </li>
                            <li className={`${ExperienceCSS.li}`}>
                            Worked alongside the architect engineers to establish new unit testing standards for the team and the platform.                          
                            </li>
                            <li className={`${ExperienceCSS.li}`}>
                            Implemented unit test automation for PL/SQL based projects, leveraged ephemeral databases that resembles prod-like envs and are self-evolving to keep up-to-date.                           
                            </li>
                        </ul>

                        </div>;

        const SDE2 = <div className={`${ExperienceCSS.contentCard}`}>
                        <h3 className={`${ExperienceCSS.subHeading}`} style={{fontWeight: "bold"}}>Mastercard</h3>
                        <span style={{fontSize: "medium"}}>Software Engineer II</span>

                        <ul className={`mt-4 ${ExperienceCSS.ul}`}>
                            <li className={`${ExperienceCSS.li}`}>
                            Designed and implemented real-time event-based aggregation of transaction data. Allowing transaction events to be processed and aggregates for the transaction to be calculated asynchronously.
                            </li>
                            <li className={`${ExperienceCSS.li}`}>
                            Implemented multi-threaded processing for the transaction event processing service. Refined the original architecture and implemented guardrails to make it fault-tolerant and avoid potential issues in the future. For example, periodic load balancing and partitioning work amongst slow and fast threads is one such improvement.
                            </li>
                            <li className={`${ExperienceCSS.li}`}>
                            Designed and implemented Data-Driven-Event-Processing strategy. Which exposes REST-API that allows users to configure settings to add new event types to be processed. This allowed different teams from the platform to use the service by adding only configurations and without code changes to the service.                          
                            </li>
                            <li className={`${ExperienceCSS.li}`}>
                            Discovered inefficient reprocessing logic for handling out-of-order events in the existing system. Designed a new solution that yields improvements of at least 110% faster processing. That number was obtained by calculating the average case runtime of the old vs new algorithm and finding the difference.
                            </li>
                            <li className={`${ExperienceCSS.li}`}>
                            Designed and implemented a system to recreate aggregate data for all currently existing transactions. This will allow a mechanism to quickly fix potential issues with aggregate data, before customers are impacted.
                            </li>
                        </ul>

                        </div>;

        let show

        if(this.state.selected ==="ctp"){
            show = ctp;
        }
        if(this.state.selected ==="tutor"){
            show = tutor;
        }
        if(this.state.selected ==="SDE1"){
            show = SDE1;
        }
        if(this.state.selected ==="SDE2"){
            show = SDE2;
        }
        return (
            <div className={`container-fluid`} style={{marginTop:"9vh"}}>
                <h1 className={`${ExperienceCSS.heading}`}>Relevant Experience</h1>
                <div className={`${ExperienceCSS.buttonDiv}`}>
                    <button onClick={this.handleSDE2Click} className={`${ExperienceCSS.buttons} btn`} style={this.state.SDE2VariableStyle}>Mastercard - Software Engineer II</button>
                    <button onClick={this.handleSDE1Click} className={`${ExperienceCSS.buttons} btn`} style={this.state.SDE1VariableStyle}>Mastercard - Software Engineer I</button>
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