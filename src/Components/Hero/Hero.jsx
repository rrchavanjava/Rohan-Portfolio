import React from 'react'
import './Hero.css'
import r1 from '../../assets/r1.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import resume from '../../assets/Rohan.docx'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={r1} alt='' height={300 }/>
      <h1><span>I'am Rohan,</span>JAVA FULLSTACK DEVELOPER From Pune.</h1>
      <p>I have greate knowlege about HTML, CSS, JAVASCRIPT, REACT, JAVA, Spring, Spring MVC, Spring Boot and MySQL.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With me</AnchorLink></div>
        {/* <div className="hero-resume"  onClick={() => window.open("../../assets/Rohan.docx", "_blank")}
  style={{ cursor: "pointer" }}>My Resume</div> */}
        <div className="hero-resume" onClick={() => window.open("/Rohan.docx", "_blank")}
        style={{ cursor: "pointer" }}>My Resume</div>

      </div>
    </div>
  )
}

export default Hero
