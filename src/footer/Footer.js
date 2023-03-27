import React from 'react'
import './footer.css'
import reactLogo from '../assets/reactjs.svg'

const Footer = ({techstack}) => {
  return (
    <footer>
        <h2 className='tech-stack-title'>My Tech-Stack</h2>
        <div className="logos-container">
            <div className="tech-logos">
              {techstack && techstack.map(tech =>  <img src={tech.logo} alt="tech-logos" width='118.21px' height='118.21px' />)}
            </div>
        </div>
        
    </footer>
  )
}

export default Footer