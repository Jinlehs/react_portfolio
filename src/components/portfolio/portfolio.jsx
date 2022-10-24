import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio6.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio7.png'
import IMG7 from '../../assets/IMG7.png'
import IMG8 from '../../assets/IMG8.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Web Portfolio</h2>
      
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG7} alt=""></img>
          </div>
          <h3>Angular Menu Planning App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Jinlehs/shoppingapp" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG8} alt=""></img>
          </div><br></br><br></br><br></br>
          <h3>.NET Character RPG Web Api</h3>
          <div className="portfolio__item-cta"><br></br>
            <a href="https://github.com/Jinlehs/dotnet-rpg" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""></img>
          </div>
          <h3>Crowd Fly Mobile App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/CMPUT301W21T06/CrowdFly" className='btn' target='_blank'>Github</a>
            <a href="https://drive.google.com/file/d/17gt1X--BHdRO7uv-g7rB6EXcYQyfy2CF/view" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt=""></img>
          </div>
          <h3>Angular Simple IT Ticketing System</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Jinlehs/itticketing" className='btn' target='_blank'>Github</a>
            <a href="https://drive.google.com/drive/folders/1nEP3g3hKHuwmQCsi34Yf-WEBAw5JRDB4?usp=sharing" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt=""></img>
          </div>
          <h3>WordPress astrals.io</h3>
          <div className="portfolio__item-cta">
            <a href="https://astralsnft.io/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt=""></img>
          </div>
          <h3>Digital Marketing Consultant</h3>
          <div className="portfolio__item-cta">
            <p>Gongcha Western Canada</p>
            <a href="https://www.instagram.com/gongchawesterncanada/" className='btn btn-primary' target='_blank'>Instagram</a>
          </div>
        </article>
  
      </div>
    </section>
    
    
  )
}

export default Portfolio