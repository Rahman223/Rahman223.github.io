import './App.css';
import React from "react";
import LazyShow from './components/LazyShow';
import ExampleComp from './components/ExampleComponent';
import LandingComponent from './components/LandingComponent';
import AboutMeComponent from './components/AboutMe';
import SkillsComponent from './components/Skills';
import ExperienceComponent from './components/Experience';
import ProjectOneComponent from './components/ProjectOne';
import ProjectTwoComponent from './components/ProjectTwo';
import ContactComponent from './components/Contact';

function App() {
  return (
<div className="row">


<nav className="navbar navbar-expand-md min-vw-100 navBar navMain position-fixed pe-0">
  <div className="container-fluid pe-0 w-100vw">
    <a className="navbar-brand navBar" href=""><i className="fas fa-draw-polygon" style={{fontSize:"xx-large"}}></i></a>
    <div className="collapse navbar-collapse navItmDiv" id="navbarScroll">
      <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll " >
          
          <li className="nav-item pe-4">
          <a className="nav-link active navBar" aria-current="page" href="#about"> About</a>
          </li>
         
        
 
        <li className="nav-item pe-4">
          <a className="nav-link navBar" href="#skills">Skills</a>
        </li>

        
  
        <li className="nav-item pe-4">
          <a className="nav-link navBar" href="#experience">Experience</a>
        </li>
  
        
        <li className="nav-item pe-4">
          <a className="nav-link navBar" href="#projects">Projects</a>
        </li>
        <li className="nav-item pe-4">
          <a className="nav-link navBar" href="#contact">Contact</a>
        </li>

      </ul>
    </div>
  </div>
</nav>


      <div className="col-md-12">
        <LazyShow  children={<LandingComponent/>}>
        </LazyShow>
      </div>

      <div className="dummyDiv">
      </div>
      

    {/* <div className={`${LandingComponentCSS.landing_background} container-fluid min-vw-100 min-vh-100`}>
      <div className={`${LandingComponentCSS.overlay} container-fluid  min-vw-100 min-vh-100`}>
    <LazyShow  children={<LandingComponent />}>
    </LazyShow>
      </div>

    </div> */}
    

  <div id="about" className="col-md-12">
    <LazyShow>
      {<AboutMeComponent/>}
    </LazyShow>
  </div>

  <div className="dummyDiv">
      </div>

  <div id="skills" className="col-md-12">
    <LazyShow>
      {<SkillsComponent/>}
    </LazyShow>
  </div>
    
  
  <div className="dummyDiv">
  </div>
    

    <div id="experience" className="col-md-12">
    <LazyShow> 
      {<ExperienceComponent/>}
    </LazyShow>
    </div>

    <div className="dummyDiv">
    </div>
    
    <div id="projects" className="col-md-12">
    <LazyShow>
      {<ProjectOneComponent/>}
    </LazyShow>
    
    <div className="dummyDiv">
    </div>

    <LazyShow>
      {<ProjectTwoComponent/>}
    </LazyShow>
    </div>

    <div className="dummyDiv">
    </div>

    <div className="col-md-12" id="contact">
    <LazyShow>
      {<ContactComponent/>}
    </LazyShow>
    </div>

    <div className="dummyDiv">
    </div>
 
    <span style={{textAlign: "center", color: "rgb(180, 179, 179)", }}>Designed and Built by Shafiullah Rahman</span>
    <span style={{textAlign: "center", color: "rgb(180, 179, 179)", marginBottom: "3vh", fontSize:"small"}}>Created using React.js, HTML, CSS and Framer-Motion(React library)</span>

    </div>
  );
}

export default App;
