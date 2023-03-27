import React from 'react'
import "./projects.css"
import thumbnail from '../assets/thumbnail.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const projects = ({project}) => {
  return (
        <div className="project-container">
        <div className="project-thumbnail-container">
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='projectLink-btn'/>
            <img src={project && project.img} max-width='443px' height='170px' alt="project thumbnail" />

        </div>
        <div className="project-details">
            <h4>{project && project.type}</h4>
            <h2>{project && project.title}</h2>
            <p>{project && project.description}</p>
        </div>
        </div>
  )
}

export default projects