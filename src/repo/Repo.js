import React from 'react'
import './repo.css'
import reactLogo from '../assets/reactjs.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'

const Repo = ({repo}) => {
  return (
    <div className="repo-card">
        <div className="repo-description">
            <h3>{repo.title}</h3>
            <p>{repo.description}</p>
        </div>
        <div className="repo-info">
            <div className="repo-techStack">
                {repo && repo.techStack.map(tech => <img src={tech.icon} alt="" width='60px' height='60px' />) }
            </div>
            <div className="repo-rating">
                <FontAwesomeIcon icon={faStar} style={{color: '#FFF615', fontSize: '1.3em', paddingRight: '10px'}}/>
                <p>{repo.rating}</p>
            </div>   
        </div>
    </div>
  )
}

export default Repo