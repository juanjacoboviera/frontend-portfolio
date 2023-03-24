import React from 'react'
import "./projects.css"
import Img from '../assets/project.jpg'
const projects = () => {
  return (
        <div className="project-container">
            <img src={Img} alt="" />
        <div className="project-details">
            <h4>Web Development</h4>
            <h2>Bolder Landing Page</h2>
            <p>Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.</p>
        </div>
        </div>
  )
}

export default projects