import React from 'react'
import "../Home/Home.css"
import Navbar from '../Navbar/Navbar'
import HomeContent from '../HomeContent/HomeContent'

const Home = () => {
  return (
    <div>
        <div className="home-container">
            <Navbar />
            <div className="home-content">
            <HomeContent />
            </div>
           
        </div>
    </div>
  )
}

export default Home