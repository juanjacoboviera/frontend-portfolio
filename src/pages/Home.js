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
const [profileData, setProfileData] = useState({});
const [moreProjectsBtn, setMoreProjectsBtn] = useState(false);
const [moreReposBtn, setMoreReposBtn] = useState(false);
const {about, Repos, techStack, projects} = profileData
const [minHeight, setMinHeight] = useState(0);


useEffect(()=>{
  const getProfileMap = async () =>{
    const profileData = await getProfileData();
    setProfileData(profileData[0])
  
  }
   getProfileMap()
},[])


useEffect(() => {
  function handleResize() {
    // Set max height based on window size
   if (window.innerWidth <= 889 ) {
    const repoCardHeight = 357; 
    setMinHeight(repoCardHeight);
    // console.log(maxHeight)
   }
   if (window.innerWidth > 889 ) {
    const repoCardHeight = 0; 
    setMinHeight(repoCardHeight);
   }
   
  }
  // console.log(maxHeight)
   
  // Add event listener for window resize
  window.addEventListener('resize', handleResize);


  // Remove event listener on component unmount
  return () => window.removeEventListener('resize', handleResize);
}, [minHeight]);

const seeMoreSwitch = (switchType) => {
  switchType((prev) => !prev)
}

  return (
    <>
   <header>
    {/* <button onClick={addCollectionAndDocuments}>export</button> */}
   <Nav/>
    <HeaderTitle/>
   </header>
   <main>
    <About about={about}/>
    <section id='projects' className='projects-section'>
        <h2>Featured Projects</h2>
        <div className={`projects-container ${moreProjectsBtn ? 'showAll-projects' : ''}`}>
        {projects?.map(project => <Projects project={project}/> )}
        </div>
        <SeeMoreBtn onClick={() => {seeMoreSwitch(setMoreProjectsBtn)}} title={moreProjectsBtn ? 'See Less' : 'See More'}/>
      </section>
    <section id='repositories' className='repos-section'>
      <h2>My Repositories</h2>
      <div className={`repos-container ${moreReposBtn ? 'showAll-repos' : ''}`}>
      {Repos?.map(repo => <Repo repo={repo} minHeight={minHeight}/> )}
      </div>
        <SeeMoreBtn onClick={() => {seeMoreSwitch(setMoreReposBtn)}} title={moreReposBtn ? 'See Less' : 'See More'}/>
    </section>
   </main>
   <Footer techstack={techStack}/>
    </>
  )
}

export default Home