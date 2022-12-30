import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroImg from '../components/HeroImg/HeroImg'
import Footer from '../components/Footer/Footer'

const Landing = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <div className="content">
      <h1>Landing Page Placeholder</h1>
      <p>Future home of project cards</p>
      </div>
      <Footer />
    </div>
  )
}

export default Landing