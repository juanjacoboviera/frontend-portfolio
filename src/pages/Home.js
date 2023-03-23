import React from 'react'
import About from '../about/About'
import HeaderTitle from '../headerTitle/HeaderTitle'
import Nav from '../nav/Nav'

const Home = () => {
  return (
    <>
   <header>
   <Nav/>
    <HeaderTitle/>
   </header>
   <main>
    <About/>
   </main>
    </>
  )
}

export default Home