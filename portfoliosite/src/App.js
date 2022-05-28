import './App.css';
import React, { useRef } from 'react';
import Header from './Components/header';
import Home from './Components/home';
import About from './Components/about';

function App() {
  const homeRef = useRef()
  const aboutRef = useRef()
  const projectRef = useRef()
  const contactRef = useRef()
  const languagesRef = useRef()

  function handleHomeClick() {
    homeRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  
  function handleAboutClick() {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  function handleProjectClick() {
    projectRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  function handleContactClick() {
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  function handleLanguagesClick() {
    languagesRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="App">
      <div class='mainContainer'>
      <div>
          <Header
            handleHomeClick={handleHomeClick}
            handleAboutClick={handleAboutClick}
            handleProjectClick={handleProjectClick}
            handleContactClick={handleContactClick}
            handleLanguagesClick={handleLanguagesClick}
          />
        </div>
        <div class='mainContent'>
        <Home
            homeRef={homeRef}
          />
            <About
            aboutRef={aboutRef}
          />
        </div>
        </div>
    </div>
  );
}

export default App;
