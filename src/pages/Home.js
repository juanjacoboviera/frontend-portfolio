import React from 'react'
import About from '../about/About'
import HeaderTitle from '../headerTitle/HeaderTitle'
import Nav from '../nav/Nav'
import Projects from '../projects/Projects'
import SeeMoreBtn from '../seeMoreBtn/SeeMoreBtn'

const Home = () => {
  return (
    <>
   <header>
   <Nav/>
    <HeaderTitle/>
   </header>
   <main>
    <About/>
    <div className='projects-section'>
        <h2>Featured Projects</h2>
        <Projects/>
        <Projects/>
        <SeeMoreBtn/>
      </div>

   </main>
    </>
  )
}

export default Home