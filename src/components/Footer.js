import React from 'react'
import logo from '../assets/logo-wiz-bg.png'
import './Footer.css'
import {BsFacebook, BsTiktok} from 'react-icons/bs'
import {AiFillInstagram, AiFillYoutube} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='col first-col'>
          <img src={logo} alt='logo'/>
          <h1>Sell on WizCart</h1>
          <p>Sell globally, start with wizzy</p>
          <div className='social-icons'>
            <BsFacebook className='icon-footer' />
            <AiFillInstagram className='icon-footer'/>
            <AiFillYoutube className='icon-footer'/>
            <BsTiktok className='icon-footer'/>
          </div>
        </div>

        <div className='col second-col'>
          <h1>WizCart Advertising</h1>
          <p>Find, attract, and engage customers</p>
          <h1 className='h1'>Alexa</h1>
          <p>Actionabel Analytics for the web</p>
        </div>

        <div className='col third-col'>
          <h1>WizCart Web Services</h1>
          <p>Scalable Cloud</p>
          <p>Computing Services</p>
          <h1 className='h1'>Book Depository</h1>
          <p>Books With Free Delivery Worldwide</p>
        </div>

        <div className='col fourth-col'>
          <h1>Good Reeds</h1>
          <p>Book Reviews & Recommendations</p>
          <p>Computing Services</p>
          <h1 className='h1'>Shop Bop</h1>
          <p>Designer Fashion brands</p>
        </div>

      </div>
      <p className='mid-p'>&copy; 2023 WizCart All rights reserved</p>
    </footer>
  )
}

export default Footer