import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNavicon } from '@fortawesome/free-solid-svg-icons'
import './seeMoreBtn.css'

const SeeMoreBtn = ({onClick, title}) => {
  return (
    <button onClick={onClick} className='seeMore-btn'><FontAwesomeIcon icon={faNavicon}/>{title}</button>
  )
}

export default SeeMoreBtn