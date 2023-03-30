import React from 'react'
import './nav.css' 
import { HashLink } from 'react-router-hash-link';
import Projects from '../projects/Projects.js';


const Nav = () => {
  return (
   <nav className='navBar-container'>
        <div className='navBar'>
        <h2 id='juanJacoboViera' className='logo'>Juan Jacobo Viera</h2>
        <ul className=''>
            <HashLink smooth to='#bio'><li>Bio</li></HashLink>
            <HashLink smooth to='#projects'><li>Projects</li></HashLink>
            <HashLink smooth to='#repositories'><li>Repositories</li></HashLink>
            <HashLink smooth to='#tech-stack'><li>Tech-Stack</li></HashLink>
        </ul>
        </div>
   </nav>
  )
}

export default Nav