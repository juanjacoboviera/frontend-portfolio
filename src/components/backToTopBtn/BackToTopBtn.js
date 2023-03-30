import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNavicon ,faArrowTurnUp } from '@fortawesome/free-solid-svg-icons'
import './backToTopBtn.css'
import { HashLink } from 'react-router-hash-link';


const BackToTopBtn = ({onClick, title, iconName}) => {
  return (
  <HashLink smooth to='#juanJacoboViera'><button onClick={onClick} className='generic-btn'><FontAwesomeIcon icon={iconName}/>{title}</button></HashLink>
  )
}

export default BackToTopBtn