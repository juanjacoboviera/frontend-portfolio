import React, {useEffect, useState} from 'react'
import About from '../components/about/About'
import HeaderTitle from '../components/headerTitle/HeaderTitle'
import Nav from '../components/nav/Nav'
import Projects from '../components/projects/Projects'
import Repo from '../components/repo/Repo'
import SeeMoreBtn from '../components/seeMoreBtn/SeeMoreBtn'
import Footer from '../components/footer/Footer'
import { getProfileData, addCollectionAndDocuments } from '../utils/firebase/firebase.utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNavicon ,faArrowTurnUp } from '@fortawesome/free-solid-svg-icons'


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
 
   if (window.innerWidth <= 889 ) {
    const repoCardHeight = 357; 
    setMinHeight(repoCardHeight);

   }
   if (window.innerWidth > 889 ) {
    const repoCardHeight = 0; 
    setMinHeight(repoCardHeight);
   }
   
  }

  window.addEventListener('resize', handleResize);

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
          <SeeMoreBtn onClick={() => {seeMoreSwitch(setMoreProjectsBtn)}} title={moreProjectsBtn ? 'See Less' : 'See More'} iconName={faNavicon}/>
        </section>
      <section id='repositories' className='repos-section'>
        <h2>My Repositories</h2>
        <div className={`repos-container ${moreReposBtn ? 'showAll-repos' : ''}`}>
        {Repos?.map(repo => <Repo repo={repo} minHeight={minHeight}/> )}
        </div>
          <SeeMoreBtn onClick={() => {seeMoreSwitch(setMoreReposBtn)}} title={moreReposBtn ? 'See Less' : 'See More'} iconName={faNavicon}/>
      </section>
   </main>
   <Footer techstack={techStack}/>
    </>
  )
}

export default Home