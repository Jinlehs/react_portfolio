import React from 'react'
import './about.css'
import ME from '../../assets/me-about1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <br></br>
      
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ years of experience</small>
            </article>
            
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>5+ clients served</small>
            </article>
            
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ completed projects</small>
            </article>
            
          </div>
          
          <p> Hello, my name is Jin and I am a University of Alberta Computer Science graduate who is passionate about web development and design. I have a variety of work experience stretching from software engineering and business analysis to operations management and administration. The culmination of such experiences have had a positive impact on my web development skill set as I am able to utilize my tacit knowledge to execute projects in a timely and efficient manner. </p>
          
          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
        
      </div>
    </section>
  )
}

export default About