import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import r1 from '../../assets/r1.jpeg'
import laptop from '../../assets/laptop.jpg'
import laptop11 from '../../assets/laptop11.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt=''/>
        
      </div>
      <div className="about-sections">
        <div className="about-left">
            {/* <img src={r1} alt='' height={200}/> */}
            <img src={laptop11} alt='' height={200} width={180}/>
             <img src={laptop} alt='' height={200} width={180}/>
              <img src={laptop11} alt='' height={200} width={180}/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a Master’s student in Computer Science with strong proficiency in Java, Spring, Spring Boot, MySQL, JavaScript, React, HTML and CSS.</p>
                <p>Passionate about software development, I excel at building responsive and efficient web applications. Eager to contribute my technical skills and problem-solving abilities in a software development role.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>Java</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>Spring & SpringBoot</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>MySQL</p><hr style={{width:"50%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>6</h1>
            <p>MONTH INTERNSHIP</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        
        
      </div>
    </div>
  )
}

export default About
