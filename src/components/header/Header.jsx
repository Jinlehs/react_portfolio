import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me5.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
      <header>
          <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Jin Lee</h1>
            <h5 className="text-light">Junior Fullstack Developer</h5>
            <CTA />
            <HeaderSocials />
            <div className="box"></div>
            <div className="box me">
              <img src={ME} alt="" />
            </div>
            
            <a href="#contact" className='scroll__down'>Scroll Down</a>
          </div>
      </header>    
  )
}

export default Header