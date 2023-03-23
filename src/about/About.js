import React from 'react'
import juandev from '../assets/front-end-dev2.jpg'
import Skill from '../skill/Skill'
import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSearch, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
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
        <div className="speciality-container">
            <div className="whatIdo-container">
                <h3>What I do</h3>
                <p>I work with HTML5, CSS, JavaScript and React.JS. These technologies enable me to craft dynamic user experiences through proper web development, ensuring that each project meets the highest standards.</p>
            </div>
            <div className="skills-container">
                <Skill icon={faEdit} title="Web Development" description="You will receive a customized plan for your fitness journey, and lots of support" />
                <Skill icon={faSearch} title="Ux Research" description="You will receive a customized plan for your fitness journey, and lots of support" />
                <FontAwesomeIcon icon={faArrowRightLong} className='socialMedia-icons'/>
            </div>
        </div>
    </div>
  )
}

export default About