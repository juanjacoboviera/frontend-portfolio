import React, {useEffect, useState} from 'react'
import About from '../about/About'
import HeaderTitle from '../headerTitle/HeaderTitle'
import Nav from '../nav/Nav'
import Projects from '../projects/Projects'
import Repo from '../repo/Repo'
import SeeMoreBtn from '../seeMoreBtn/SeeMoreBtn'
import Footer from '../footer/Footer'
import { getProfileData, addCollectionAndDocuments } from '../utils/firebase/firebase.utils'


const Home = () => {
const [profileData, setProfileData] = useState({})
useEffect(()=>{
  const getProfileMap = async () =>{
    const profileData = await getProfileData();
    setProfileData(profileData[0])
  
  }
   getProfileMap()
},[])

const {about, Repos, techStack, projects} = profileData
console.log(profileData)
  return (
    <>
   <header>
    {/* <button onClick={addCollectionAndDocuments}>export</button> */}
   <Nav/>
    <HeaderTitle/>
   </header>
   <main>
    <About about={about}/>
    <div className='projects-section'>
        <h2>Featured Projects</h2>
        {projects && projects.map(project => <Projects project={project}/> )}
        {/* <Projects/>
        <Projects/> */}
        <SeeMoreBtn/>
      </div>
    <section className='repos-section'>
      <h2>My Repositories</h2>
      <div className="repos-container">
        {Repos && Repos.map(repo =>  <Repo repo={repo}/> )}
        <SeeMoreBtn/>
      </div>
    </section>
   </main>
   <Footer techstack={techStack}/>
    </>
  )
}

export default Home