import React from 'react'
import './nav.css' 
import { HashLink } from 'react-router-hash-link';


const Nav = ({navItems, spanish, setSpanish, setManuallySetLanguage}) => {

  return (
   <nav className='navBar-container'>
        <div className='navBar'>
        <h2 id='juanJacoboViera' className='logo'>Juan Jacobo Viera</h2>
        <ul className=''>
          {navItems?.map(item => <HashLink key={item} smooth to={`#${item.toLowerCase()}`}><li>{item}</li></HashLink> )}
        </ul>
        <button onClick={() =>{
            setManuallySetLanguage(true)
            setSpanish((prev) => !prev)
          }} className='generic-btn language-btn white-hover'>{spanish == true ? 'English' : 'Español'}</button>
        </div>
   </nav>
  )
}

export default Nav