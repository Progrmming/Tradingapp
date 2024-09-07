import React from 'react'
import image from "../../../public/logo.jpg"
import './Homescr.css'
import Button from '@mui/material/Button'

function Page() {
  return (
    <div>
         <header>
        <div class="logo">
            <h1> V Power International</h1>
        </div>
        <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
          
            <a href="#">Team</a>
            <a href="#">Pricing</a>
         
            <a href="#">Contact</a>
        </nav>
       
     
    </header>
    <section class="hero">
        <div class="hero-text">
            <h1>Welcome to V Power International.</h1>
            <p>It's a simple business method that can earn you a fantastic high income. This business model is created entirely by Indians and is headquartered in Delhi. Currently operating as the fastest growing business in many important cities of India. This human chain business is well received by the people as it is able to generate very high revenue in a short period of time. So we wish you to join this business immediately and earn very high income.</p>
            <div class="hero-buttons">
                <a href="#" class="btn">Get Started</a>
           
            </div>
        </div>
        <div class="hero-img">
            <img src="https://i.ibb.co/h8mzVF4/hero-img.png" alt="" />
        </div>
    </section>
    </div>
  )
}

export default Page