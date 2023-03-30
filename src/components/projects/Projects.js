import React from 'react'
import "./projects.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const projects = ({project}) => {
  return (
        <Link target='blank' to={project && project.link}><div className="project">
        <div className="project-thumbnail-container">
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='projectLink-btn'/>
            <img src={project && project.img} max-width='443px' height='170px' alt="project thumbnail" />

        </div>
        <div className="project-details">
            <h4>{project && project.type}</h4>
            <h2>{project && project.title}</h2>
            <p>{project && project.description}</p>
        </div>
        </div></Link>
  )
}

export default projects