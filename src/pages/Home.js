import React, {useEffect, useState} from 'react'
import About from '../components/about/About'
import HeaderTitle from '../components/headerTitle/HeaderTitle'
import Nav from '../components/nav/Nav'
import Projects from '../components/projects/Projects'
import Repo from '../components/repo/Repo'
import SeeMoreBtn from '../components/seeMoreBtn/SeeMoreBtn'
import Footer from '../components/footer/Footer'
import { getDocument, addCollectionAndDocuments } from '../utils/firebase/firebase.utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNavicon } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
const [profileData, setProfileData] = useState({});
const [moreProjectsBtn, setMoreProjectsBtn] = useState(false);
const [moreReposBtn, setMoreReposBtn] = useState(false);
const [minHeight, setMinHeight] = useState(0);
const [spanish, setSpanish] = useState(false);
const [manuallySetLanguage, setManuallySetLanguage] = useState(false);
const {webtitles, about, Repos, techStack, projects} = profileData

useEffect(() => {
  if (!manuallySetLanguage) {
    const browserLanguage = window.navigator.language;
    if (browserLanguage.startsWith('es')) {
      setSpanish(true);
      const spanishDocId = 'Y4NoKtU9PXDlzix7q9QC';
      const getDoc = async () => {
      const docData = await getDocument('languages', spanishDocId);
      setProfileData(docData);
    };
      getDoc()
    } else {
      setSpanish(false);
      const englishDocId = 'Zs8fygCun1oJHS3KZZLN';
      const getDoc = async () => {
      const docData = await getDocument('languages', englishDocId);
      setProfileData(docData);
      };
      getDoc()
    }
  }

  if (manuallySetLanguage == true && spanish == true ) {
    const spanishDocId = 'Y4NoKtU9PXDlzix7q9QC';
    const getDoc = async () => {
      const docData = await getDocument('languages', spanishDocId);
      setProfileData(docData);
    };
    getDoc();
  } if (manuallySetLanguage == true && spanish == false ) {
    const englishDocId = 'Zs8fygCun1oJHS3KZZLN';
    const getDoc = async () => {
      const docData = await getDocument('languages', englishDocId);
      setProfileData(docData);
    };
    getDoc();
  }
}, [spanish, manuallySetLanguage]);



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
    {/* The button below triggers the helper function that updates the firebase collection */}
    {/*<button onClick={addCollectionAndDocuments}>export</button>*/}
      <Nav navItems={webtitles?.nav} spanish={spanish} setSpanish={setSpanish} setManuallySetLanguage={setManuallySetLanguage}/>
      <HeaderTitle title={about?.title}/>
   </header>
   <main>
      <About about={about} webtitles={webtitles} spanish={spanish}/>
      <section id={spanish == true? 'proyectos' : 'projects'} className='projects-section'>
          <h2>{webtitles?.titles[3]}</h2>
          <div className={`projects-container ${moreProjectsBtn ? 'showAll-projects' : ''}`}>
          {projects?.map(project => <Projects key={project.title} project={project}/> )}
          </div>
          <SeeMoreBtn onClick={() => {seeMoreSwitch(setMoreProjectsBtn)}} title={moreProjectsBtn ? webtitles?.buttons[3] : webtitles?.buttons[2]} iconName={faNavicon}/>
        </section>
      <section id={spanish == true? 'repositorios' : 'repositories'}  className='repos-section'>
        <h2>{webtitles?.titles[4]}</h2>
        <div className={`repos-container ${moreReposBtn ? 'showAll-repos' : ''}`}>
        {Repos?.map(repo => <Repo key={repo.title} repo={repo} minHeight={minHeight}/> )}
        </div>
          <SeeMoreBtn onClick={() => {seeMoreSwitch(setMoreReposBtn)}} title={moreReposBtn ? webtitles?.buttons[3] : webtitles?.buttons[2]} iconName={faNavicon}/>
      </section>
   </main>
   <Footer techstack={techStack} webtitles={webtitles} spanish={spanish}/>
    </>
  )
}

export default Home