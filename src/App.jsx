import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Services from './components/services/Services'
import Blog from './components/blog/Blog'
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <Routes> {/* The Switch decides which component to show based on the current URL.*/}
          <Route path='/blog' element={Blog}></Route>
        </Routes>
        <About/>
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials/>
        <Contact />
        <Footer />
    </>
  )
}

export default App