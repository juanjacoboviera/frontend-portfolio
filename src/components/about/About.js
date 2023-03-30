import React from 'react'
import juandev from '../../assets/front-end-dev2.jpg'
import Skill from '../skill/Skill'
import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSearch, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const About = ({about}) => {
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
            <div className="bio-data__container">
              <div className="img-background">
                  <img className='profile-pic' src={about && about.img} width="155px" height='155px' alt="" />
              </div>
              <div className="bio-text">
                    <h3>Biography</h3>
                    <p>{about && about.bio}</p>
              </div>
           </div>
           <div className="contact-data">
              <h3>Lets connect</h3>
              <Link  target="blank" to={about && about.socialMedia.linkedin}><FontAwesomeIcon icon={faLinkedin} className='socialMedia-icons'/></Link>
              <Link target="blank" to={about && about.socialMedia.github}><FontAwesomeIcon icon={faGithub} className='socialMedia-icons'/></Link>
              <Link target="blank" to={about && about.socialMedia.discord}><FontAwesomeIcon icon={faDiscord} className='socialMedia-icons'/></Link>
           </div>
        </div>
        <div className="speciality-container">
            <div className="whatIdo-container">
                <h3>What I do</h3>
                <p>{about && about.whatIDo}</p>
            </div>
            <div className="skills-container">
            <Slider {...settings}>
                {about && about.skills.map(skill => <Skill icon={faEdit} title={skill.title} description={skill.description} /> )}
                {/* <Skill icon={faEdit} title="Web Development" description="You will receive a customized plan for your fitness journey, and lots of support" />
                <Skill icon={faSearch} title="Ux Research" description="You will receive a customized plan for your fitness journey, and lots of support" /> */}
                </Slider>
                {/* <FontAwesomeIcon icon={faArrowRightLong} className='socialMedia-icons'/> */}
            </div>
        </div>
    </div>
  )
}

export default About