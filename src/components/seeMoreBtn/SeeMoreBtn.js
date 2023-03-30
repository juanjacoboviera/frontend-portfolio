import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNavicon ,faArrowTurnUp } from '@fortawesome/free-solid-svg-icons'
import './seeMoreBtn.css'


const SeeMoreBtn = ({onClick, title, iconName}) => {
  return (
    <button onClick={onClick} className='seeMore-btn'><FontAwesomeIcon icon={iconName}/>{title}</button>
  )
}

export default SeeMoreBtn