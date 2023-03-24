import React from 'react'
import './repo.css'
import reactLogo from '../assets/reactjs.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'

const Repo = () => {
  return (
    <div className="repo-card">
        <div className="repo-description">
            <h3>Nextjs Starter</h3>
            <p>A dead simple for nextjs project.</p>
        </div>
        <div className="repo-info">
            <div className="repo-techStack">
                <img src={reactLogo} alt="" width='60px' height='60px' />
                <img src={reactLogo} alt="" width='60px' height='60px' />
            </div>
            <div className="repo-rating">
                <FontAwesomeIcon icon={faStar} style={{color: '#FFF615', fontSize: '1.3em', paddingRight: '10px'}}/>
                <p>1 Star</p>
            </div>   
        </div>
    </div>
  )
}

export default Repo