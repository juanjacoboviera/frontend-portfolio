import React from 'react'
import juandev from '../assets/front-end-dev2.jpg'
import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'
const About = () => {
  return (
    <div className='about-container'>
        <div className="bio-container">
                <div className="bio-data__container">
                <img className='profile-pic' src={juandev} width="155px" height='155px' alt="" />
           <div className="bio-text">
                <h3>Biography</h3>
                <p>I am deeply passionate about design, technology, and marketing. To me, these three fields are like puzzle pieces that fit together perfectly, creating something truly remarkable when combined.</p>
           </div>
           </div>
           <div className="contact-data">
            <h3>Lets connect</h3>
            <FontAwesomeIcon icon={faLinkedin} className='socialMedia-icons'/>
            <FontAwesomeIcon icon={faGithub} className='socialMedia-icons'/>
            <FontAwesomeIcon icon={faDiscord} className='socialMedia-icons'/>
           </div>
        </div>
        <div className="specialty-container">
        </div>
    </div>
  )
}

export default About