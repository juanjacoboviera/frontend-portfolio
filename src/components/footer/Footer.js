import React from 'react'
import SeeMoreBtn from '../seeMoreBtn/SeeMoreBtn'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNavicon ,faArrowTurnUp } from '@fortawesome/free-solid-svg-icons'
import { HashLink } from 'react-router-hash-link';
import BackToTopBtn from '../backToTopBtn/BackToTopBtn'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Footer = ({techstack, webtitles, spanish}) => {
  return (
    <footer id={spanish == true? 'tecnologías' : 'tech-stack'} >
      <div className="footer-header">
        <h2 className='tech-stack-title'>{webtitles?.titles[5]}</h2>
        <BackToTopBtn title={webtitles?.buttons[4]} iconName={faArrowTurnUp}/>
      </div>
        <div className="logos-container">
            <div className="tech-logos">
              {techstack && techstack.map(tech => <Tippy key={tech.title} content={tech.title}><div className='animation'><img className='techStack-logos' src={tech.logo} alt="tech-logo" /></div></Tippy>)}
            </div>
        </div>
        
    </footer>
  )
}

export default Footer