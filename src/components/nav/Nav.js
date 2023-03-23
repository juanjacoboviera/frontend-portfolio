import React from 'react'
import './nav.css' 

const Nav = () => {
  return (
   <nav className='navBar-container'>
        <div className='navBar'>
        <h2 className='logo'>Juan Jacobo Viera</h2>
        <ul className=''>
            <li>Bio</li>
            <li>Projects</li>
            <li>Reposetories</li>
            <li>Tech-Stack</li>
        </ul>
        </div>
   </nav>
  )
}

export default Nav