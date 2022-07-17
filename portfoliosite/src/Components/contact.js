import '../ComponentsStyle/contact.css'
import Resume from '../files/Evan_Mei_Resume.pdf'

export default function Contact(props) {
  const contactRef = props.contactRef
  const handleHomeClick = props.handleHomeClick

  return (
    <div ref={contactRef} class="contactArea">
    <div class="contactDiv">
        <h1 id="contactTitle">Lets Connect!</h1>
        <h2>Email: <a href="mailto:em8258580@gmail.com" target="_blank" rel="noopener noreferrer"> em8258580@gmail.com</a></h2>
        <h2>Resume: <a href={Resume} target="_blank" rel="noopener noreferrer"> Click here!</a></h2>
        <h1 onClick={handleHomeClick} id='backhome'>Back to Home</h1>
      </div>
      
  </div>
    );
  }