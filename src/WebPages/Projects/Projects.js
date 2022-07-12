// import Projec1 from '../assets/img1.jpg'

// import { ProjectList } from '../helpers/ProjectList'
// import ProjectModule from '../components/ProjectModule'

import React from 'react'
import './Projects'
// import Project1 from '../Assets/Images/Project1.png'
// import Project2 from '../Assets/Images/Project2.png'
import '../../Styles/Projects.css'
function Projects() {
  return (
    <div className="Projects">
      <h1>Alexander's Projects</h1>
      <div className="ProjectModule">
        {/* {ProjectList.map((project, idx) => { */}
        {/* return ( */}
        {/* <ProjectList id={idx} title={project.title} image={project.image} />) */}
        {/* })} */}
        {/* <ProjectModule name="Weather App" image={Project1} />
        <ProjectModule name="Company App" image={Project2} /> */}
      </div>
    </div>
  )
}

export default Projects
