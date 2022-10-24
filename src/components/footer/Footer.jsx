import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer id='section'>
      <a href="#" className='footer__logo'>Jin Lee</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portofilio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
      </ul>
      
      <div className='footer__copyright'>
        <small>&copy; Jin Lee. All rights reserved</small>
      </div>
    </footer>
    

  )
}

export default Footer