import React from 'react'
import SeeMoreBtn from '../seeMoreBtn/SeeMoreBtn'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNavicon ,faArrowTurnUp } from '@fortawesome/free-solid-svg-icons'
import { HashLink } from 'react-router-hash-link';
import BackToTopBtn from '../backToTopBtn/BackToTopBtn'

const Footer = ({techstack}) => {
  return (
    <footer id='tech-stack'>
      <div className="footer-header">
        <h2 className='tech-stack-title'>My Tech-Stack</h2>
        <BackToTopBtn title='Back to top' iconName={faArrowTurnUp}/>
      </div>
        <div className="logos-container">
            <div className="tech-logos">
              {techstack && techstack.map(tech =>  <img src={tech.logo} alt="tech-logos" />)}
            </div>
        </div>
        
    </footer>
  )
}

export default Footer