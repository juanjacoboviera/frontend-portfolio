import React from 'react'
import './skill.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faGlobe, faPaintBrush, faSwatchbook} from '@fortawesome/free-solid-svg-icons'

const Skill = ({icon, title, description}) => {
  return (
    <div className='skill-card'>
        <div className="iconBackground">
            <FontAwesomeIcon icon={icon} className='skill-icon'/>
        </div>
    <h4 className='padding-top'>{title}</h4>
    <p>{description}</p>
    </div>
  )
}

export default Skill