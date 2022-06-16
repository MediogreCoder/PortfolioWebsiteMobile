import '../ComponentsStyle/about.css'


export default function About(props) {
  const aboutRef = props.aboutRef
  
  return (
    <div ref={aboutRef} class="aboutArea">
      <div class="aboutDiv">
        <h1>About Me</h1>
        <p>Former Salesforce Admin and Tableau Analyst turned Full Stack Software Developer who's all about helping professionals
          make better decisions. With a background in data analytics and dashboard design.
          </p>
          <p>
          I'm ready for a new challenge where I can
          impact both the backend and frontend from the data to the finished product.
      </p>
      </div>
     
    </div>
    );
  }