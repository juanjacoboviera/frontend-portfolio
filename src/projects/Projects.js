import React from 'react'
import "./projects.css"
import thumbnail from '../assets/thumbnail.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const projects = () => {
  return (
        <div className="project-container">
        <div className="project-thumbnail-container">
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='projectLink-btn'/>
            <img src={thumbnail} max-width='443px' height='170px' alt="" />

        </div>
        <div className="project-details">
            <h4>Web Development</h4>
            <h2>Bolder Landing Page</h2>
            <p>Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.</p>
        </div>
        </div>
  )
}

export default projects