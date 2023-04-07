import React from 'react'
import Skill from '../skill/Skill'
import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faPaintBrush, faSwatchbook, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import cv from '../../assets/juanJacoboVieraCv.pdf'

const About = ({about, webtitles}) => {
  const icons = {webDesign: faGlobe, uiDesign: faPaintBrush, productDesign: faSwatchbook}

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
          initialSlide: 1
        }
      }
    ]
  };
  return (
    <div id='bio' className='about-container'>
        <div className="bio-container">
              <div className="img-background" id='bio'>
                  <img className='profile-pic' src={about && about.img} width="155px" height='155px' alt="" />
              </div>
            <div className="bio-data__container">
              <div className="bio-text">
                    <h3>{webtitles && webtitles.titles[0]}</h3>
                    <p>{about && about.bio}</p>
              </div>
           </div>
           <div className="contact-data">
              <h3>{webtitles && webtitles.titles[1]}</h3>
              <Link  target="blank" to={about && about.socialMedia.linkedin}><FontAwesomeIcon icon={faLinkedin} className='socialMedia-icons'/></Link>
              <Link target="blank" to={about && about.socialMedia.github}><FontAwesomeIcon icon={faGithub} className='socialMedia-icons'/></Link>
              <Link target="blank" to={about && about.socialMedia.discord}><FontAwesomeIcon icon={faDiscord} className='socialMedia-icons'/></Link>
           </div>
           <span id='connect-btn' className='btn-background'>
           <Link  target="blank" to={about && about.socialMedia.linkedin}><button className='generic-btn cv-btn darker-hover'><FontAwesomeIcon icon={faLinkedin}/>{webtitles && webtitles.buttons[0]}</button></Link>
           </span>
        </div>
        <div className="speciality-container">
            <div className="whatIdo-container">
                <h3>{webtitles && webtitles.titles[2]}</h3>
                <p>{about && about.whatIDo}</p>
                <span className='btn-background'>
                <a className='generic-btn cv-btn darker-hover' href={cv} download><FontAwesomeIcon icon={faDownload}/>{webtitles && webtitles.buttons[1]}</a>
                </span>
            </div>
            <div className="skills-container">
            <Slider {...settings}>
                {about && about.skills.map(skill => {return <Skill key={skill.title} icon={icons[skill.icon]} title={skill.title} description={skill.description} />} )}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default About