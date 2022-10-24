import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/Ramenfog.png'
import AVTR2 from '../../assets/MediocreCoffee.png'
import AVTR3 from '../../assets/Pitch.png'
import AVTR4 from '../../assets/Info1.png'
import Pitch from '../../assets/Astrals_pitchdeck.pdf'

import {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => {
  return (
    <section id='testimontials'>
      <h5>My Recent Work</h5>
      <h2>Creative</h2>
      
      <Swiper className="container testimondials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ dynamicBullets: true }}>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR1} alt="Avatar 1"/>
          </div>
          <h5 className='client__name'>Ramen Fog</h5>
          <small className='client__review'>
          Created t-shirt design merch for a band in Vancouver, BC called Ramen Fog.
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR2} alt="Avatar 1"/>
          </div>
          <h5 className='client__name'>Mediocre Coffee</h5>
          <small className='client__review'>
            Created a concept logo/digital art for my dream coffee roasting brand.
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR3} alt="Avatar 1"/>
          </div>
          <h5 className='client__name'>Astrals X Mekka Lab Pitch Deck</h5>
          <small className='client__review'>
          <a href={Pitch} download className='btn'>Download Pitch Deck</a><br></br>
  
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR4} alt="Avatar 1"/>
          </div>
          <h5 className='client__name'>Aegis Infograhic</h5>
          <small className='client__review'>
            Created an Infographic for a blockchain extension using Canva.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials