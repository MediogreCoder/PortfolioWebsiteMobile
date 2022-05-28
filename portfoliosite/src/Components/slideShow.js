import React, { useState, useEffect } from 'react';
import GitHubLogo from '../images/Octocat.png'
import NetlifyLogo from '../images/logomark.png'
import '../ComponentsStyle/slideshow.css'

export default function Slideshow({images=[], links=[], ghlinks=[], projectsummary=[]}){
  const [thumbnails, setThumnails] = useState([]);

  const [previousSlideStyle, setPreviousSlideStyle] = useState({});
  const [nextSlideStyle, setNextSlideStyle] = useState({});

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideStyle, setCurrentSlideStyle] = useState({});

  const [currentGHLink, setGHCurrentLink] = useState(0);
  const [currentLink, setCurrentLink] = useState(0);

  const [currentSummary, setCurrentSummary] = useState(0)

  //--------useffect to update slideshows----------

  useEffect(()=>{
    setThumnails(images);
    setCurrentSlideStyle({
        backgroundImage: "url('"+images[currentSlide]
    });
    setCurrentLink(links[currentSlide])
    setGHCurrentLink(ghlinks[currentSlide])
    setCurrentSummary(projectsummary[currentSlide])

    if(currentSlide>0){
        setPreviousSlideStyle({
            backgroundImage: "url('"+images[currentSlide-1]+"')"
        });
      
    }else{
        setPreviousSlideStyle({
            backgroundImage: "url('"+images[images.length-1]+"')"
        });
    }

    if(currentSlide === images.length-1){
        setNextSlideStyle({
            backgroundImage: "url('"+images[0]+"')"
        });
    }else{
        setNextSlideStyle({
            backgroundImage: "url('"+images[currentSlide+1]+"')"
        });
    } 

 
  }, [images, currentSlide]);

//--------Button Functions-------------

function previous() {
    if(currentSlide>0){
      setCurrentSlide(currentSlide - 1);
      setCurrentLink(links[currentSlide - 1])
      setGHCurrentLink(ghlinks[currentSlide - 1])
      setCurrentSummary(projectsummary[currentSlide -1])

    }else{
        setCurrentSlide(thumbnails.length-1);
    }
}

function next(){
    if(currentSlide === thumbnails.length-1){
      setCurrentSlide(0);
      setCurrentLink(links[currentSlide + 1])
      setGHCurrentLink(ghlinks[currentSlide + 1])
      setCurrentSummary(projectsummary[currentSlide + 1])
    }else{
        setCurrentSlide(currentSlide+1);
    }
}

//--------------------------------------

return (
  <section className="slideshow">
        <div class='summaryBox'>
    </div>
      <div className="slide-holder">
          <section className="slide previous-slide">
              <div onClick={previous} style={previousSlideStyle} className="slide-thumbnail"></div>
          </section>
      <section className="slide current-slide">
        
        <div style={currentSlideStyle} className="slide-thumbnail">
          <div class="thumbnailInfo">
          <div id="appDescrip">{currentSummary}</div>
          </div>
          
        </div>
            <div class='projectSocialDiv'>
              <div>
              <a href={currentLink} target="_blank" rel="noopener noreferrer">
                  <img class='projSocial' src={NetlifyLogo} alt='location'/>
              </a>
          </div>
          <div>
              <a href={currentGHLink} target="_blank" rel="noopener noreferrer">
                  <img class='projSocial' src={GitHubLogo} alt='location'/>
              </a>
              </div>
        </div>
          </section>
          <section className="slide next-slide">
              <div onClick={next} style={nextSlideStyle} className="slide-thumbnail"></div>
          </section>
    </div>
      <div className="slideshow-controller">
          <span onClick={previous}>Previous</span>
          <span onClick={next}>Next</span>
    </div>
  </section>
)
}