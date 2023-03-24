import React from 'react'
import About from '../about/About'
import HeaderTitle from '../headerTitle/HeaderTitle'
import Nav from '../nav/Nav'
import Projects from '../projects/Projects'
import Repo from '../repo/Repo'
import SeeMoreBtn from '../seeMoreBtn/SeeMoreBtn'
import Footer from '../footer/Footer'

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
    <section className='repos-section'>
      <h2>My Repositories</h2>
      <div className="repos-container">
        <Repo/>
        <Repo/>
        <Repo/>
        <Repo/>
        <SeeMoreBtn/>
      </div>
    </section>
   </main>
   <Footer/>
    </>
  )
}

export default Home