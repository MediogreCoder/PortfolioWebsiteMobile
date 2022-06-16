import '../ComponentsStyle/home.css'
import flatImage from '../images/programmer_vector.png'

export default function Home(props) {
  const homeRef = props.homeRef
  return (
    <div ref={homeRef} class="homeArea">
      <div class="homeDiv">
        <div class="homeText">
        <div class="homepieces">
        <h1>Evan Mei</h1>
        <h2>Fullstack Developer</h2>
            <h4 id="welcomemsg">welcome to my portfolio!</h4>
            </div>
        </div>
        <div class="imgDiv">
<img class="programmerVector" src={flatImage}></img>
        </div>
      </div>
      </div>
    );
  }