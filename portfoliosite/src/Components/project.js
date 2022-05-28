import '../ComponentsStyle/project.css'
import Slideshow from './slideShow.js'


export default function Project(props) {

  const projectRef = props.projectRef

  return (
    <div ref={projectRef} class="projectArea">
      <div class="projectDiv">
        <div class='projTitle'>
          <h1>Projects</h1>
          </div>
        <div class='projectBox'>
          <Slideshow
          images={[
            'https://i.imgur.com/dHo7TcI.png',
            'https://i.imgur.com/N0NEGhS.png',
            'https://i.imgur.com/yumppmR.png',
              'https://i.imgur.com/2TgrIMd.png'
            
          ]}
          links={[
            'https://sunnyscore.netlify.app/',
            'https://statuesque-faloodeh-0c0893.netlify.app/',
            'https://incomparable-choux-0f430c.netlify.app/',
            'https://hatin.netlify.app/'
          ]}
          ghlinks={[
            'https://github.com/MediogreCoder/SunnyBar',
            'https://github.com/MediogreCoder/API-Pokemon-Battler.git',
            'https://github.com/MediogreCoder/SeveranceAPI',
            'https://github.com/MediogreCoder/hater'
          ]}
            projectsummary={[
                'Sunny Score is an application where you can check on the how many hours of sunlight your city gets a year',
                'Pokemon Battler is a web game where you can choose between 3 generations (or random pokemon) of starters to simulate a pokemon battle',
                'This is a Severance Episode Guide website where you can get a basic overview of each episode then go to the IMDB page to find out more',
                'Hater is a toxic Twitter clone where you can hate on people, rehate(retweet), see who hatin on you and be a overall negative person'
          ]
          }
          />
        </div>
      </div>
      
      </div>
    );
  }
