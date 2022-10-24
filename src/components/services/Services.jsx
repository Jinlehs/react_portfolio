import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
     <section id = 'services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>
        
        <div className='container services__container'>
          <article className="services">
            <div className="service__head">
              <h3>UI/UX Design</h3>
            </div>
            
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Custom UI/UX Design</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Figma Interaction Design</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>User Testing</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Mobile and Responsive Design</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Customer Experience Consulting</p>
              </li>
            </ul>
          </article>
          {/*END OF UX*/}
          <article className="services">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>
            
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>React Web Application Development</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Angular Web Application Development</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Development, Integration and Platform Engineering</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>24x7 Support and Maintenance</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Website Design and Re-design</p>
              </li>
            </ul>
          </article>
          {/*END OF WEBDEV*/}
          <article className="services">
            <div className="service__head">
              <h3>Content</h3>
            </div>
            
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Graphic Design</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Brand Identity Design</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Technical Writing Services</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>White Paper Writing Services</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Market Analysis and SEO</p>
              </li>
            </ul>
          </article>
          {/*END OF Content creation*/}
        </div>
     </section>
  )
}

export default Services