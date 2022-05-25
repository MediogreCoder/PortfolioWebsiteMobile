import '../ComponentsStyle/home.css'

export default function Home(props) {
  const homeRef = props.homeRef
  return (
    <div ref={homeRef} class="homeArea">
      <div class="homeDiv">
        <h1>Evan Mei</h1>
        <h2>Fullstack Developer</h2>
        <h4 id="welcomemsg">welcome to my portfolio!</h4>
      </div>
      </div>
    );
  }