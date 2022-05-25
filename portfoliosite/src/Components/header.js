import Logo from "../images/E-logos.jpeg"
import LinkedinLogo from "../images/new-linkedin-logo-white-black-png.png"
import GitHubLogo from '../images/github-logo.png'
import "../ComponentsStyle/header.css"

export default function Header(props) {
  const handleHomeClick = props.handleHomeClick
  const handleAboutClick = props.handleAboutClick
  const handleProjectClick = props.handleProjectClick
  const handleContactClick = props.handleContactClick
  return (
    <div class="mainHeaderContainer">
    <div class="logoDiv">
      <img class="mainLogo" src={Logo} alt='lg'/>
  </div>
  <div class='headerContainer'>
    <div class="headerList">
      <div class="headerSect">
        <h2 class="sidelinks" onClick={handleHomeClick}>Home</h2>
      </div>
      <div class="headerSect">
      <h2 class="sidelinks" onClick={handleAboutClick}>About</h2>
      </div>
      <div  class="headerSect">
      <h2 class="sidelinks" onClick={handleProjectClick}>Projects</h2>
      </div>
      <div class="headerSect">
      <h2 class="sidelinks" onClick={handleContactClick} >Contact</h2>
      </div>
    </div>
      </div>
      <div class="headerFiller">
      </div>
    <div class='socials'>
      <div class="socialLocalDiv">
        <a href="https://www.linkedin.com/in/evan-mei-47ba43b1/" target="_blank" rel="noopener noreferrer">
          <img id='LinkedinLogo' src={LinkedinLogo} alt="ll" />
          </a>
      </div>
      <div class="socialLocalDiv">
        <a href="https://github.com/MediogreCoder" target="_blank" rel="noopener noreferrer">
          <img id='GithubLogo' src={GitHubLogo} alt="gl"  />
        </a>
    </div>
      </div>
      <div class="headerFiller2">
      </div>
    </div>
  )
}