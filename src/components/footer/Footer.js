import React from 'react'
import SeeMoreBtn from '../seeMoreBtn/SeeMoreBtn'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNavicon ,faArrowTurnUp } from '@fortawesome/free-solid-svg-icons'
import { HashLink } from 'react-router-hash-link';
import BackToTopBtn from '../backToTopBtn/BackToTopBtn'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Footer = ({techstack}) => {
  return (
    <footer id='tech-stack'>
      <div className="footer-header">
        <h2 className='tech-stack-title'>My Tech-Stack</h2>
        <BackToTopBtn title='Contact me' iconName={faArrowTurnUp}/>
      </div>
        <div className="logos-container">
            <div className="tech-logos">
              {techstack && techstack.map(tech => <Tippy content={tech.title}><div className='animation'><img className='techStack-logos' src={tech.logo} alt="tech-logo" /></div></Tippy>)}
            </div>
        </div>
        
    </footer>
  )
}

export default Footer