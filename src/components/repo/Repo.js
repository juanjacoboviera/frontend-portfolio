import React from 'react'
import './repo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Repo = ({repo, minHeight}) => {
  return (
    <Link className='animation' target='blank' to={repo.link}><div className="repo-card" style={{ 'minHeight': minHeight > 0 ? `${minHeight}px` : undefined }}>
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
    </Link>
  )
}

export default Repo