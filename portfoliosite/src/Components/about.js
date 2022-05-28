import '../ComponentsStyle/about.css'


export default function About(props) {
  const aboutRef = props.aboutRef
  
  return (
    <div ref={aboutRef} class="aboutArea">
      <div class="aboutDiv">
        <h1>My Story</h1>
        <p>Former Salesforce Admin and Tableau Analyst turned Full Stack Software Developer who's all about helping professionals
          make better decisions. With a background in data analytics and dashboard design.
          </p>
          <p>
          I'm ready for a new challenge where I can
          impact both the backend and frontend from the data to the finished product.
      </p>
      </div>
      <div class="skillsDiv">
        <h1>My Tools</h1>
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
        <img class='skillLogo'  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt='sl'/>
        </div>
      </div>
    </div>
    );
  }