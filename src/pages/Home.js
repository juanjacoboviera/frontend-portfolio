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

useEffect(()=>{
  const getProfileMap = async () =>{
    const profileData = await getProfileData();
    setProfileData(profileData[0])
  
  }
   getProfileMap()
},[])

const spliceArray = (array, index, numberElements) =>{
  const originalArray =  array ? [...array] : [];
  originalArray.splice(index, numberElements);
  return originalArray;
}

const showThreeProjects = spliceArray(projects,3,3);
const showFourRepos = spliceArray(Repos,4,2);


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
      {Repos?.map(repo => <Repo repo={repo}/> )}
      </div>
        <SeeMoreBtn onClick={() => {seeMoreSwitch(setMoreReposBtn)}} title={moreReposBtn ? 'See Less' : 'See More'}/>
    </section>
   </main>
   <Footer techstack={techStack}/>
    </>
  )
}

export default Home