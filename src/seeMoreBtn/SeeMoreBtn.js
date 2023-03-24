import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNavicon } from '@fortawesome/free-solid-svg-icons'
import './seeMoreBtn.css'

const SeeMoreBtn = () => {
  return (
    <button className='seeMore-btn'><FontAwesomeIcon icon={faNavicon}/> See More</button>
  )
}

export default SeeMoreBtn