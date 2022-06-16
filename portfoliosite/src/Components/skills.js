import '../ComponentsStyle/skills.css'
import Monitor from '../images/skillsmonitor (1).png'
import Netlify from '../images/logomark.png'

export default function Contact(props) {
  const skillsRef = props.skillsRef


  return (
    <div ref={skillsRef} class="skillsArea">
         <div class="skillsTitle">
        <h2>My Developement Languages and Tools</h2>
      </div>
      <div class="monitorAndSkills">
      <div class="entireSkills">
          <img class="skillsMonitor" src={Monitor}></img>
      </div>
       <div class="skillsDiv">
        <div class='skillsBox'>
        <img class='skillLogo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='sl'/>
        <img class='skillLogo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='sl' />
        <img class='skillLogo'  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt='sl'/>
        <img class='skillLogo'  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt='sl'/>
        <img class='skillLogo'  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt='sl'/>
        <img class='skillLogo'  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt='sl'/>
        <img class='skillLogo'  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt='sl'/>
        <img class='skillLogo'  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt='sl'/>
        <img class='skillLogo'  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt='sl'/>
        <img class='skillLogo'  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" alt='sl'/>
        <img class='skillLogo'  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt='sl'/>
        <img class='skillLogo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='sl'/>
        <img class='skillLogo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt='sl' />
        <img class='skillLogo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt='sl'/>
        <img class='skillLogo' src={Netlify} alt='sl' />
        </div>
        </div>
      </div>
   
  </div>
    );
  }