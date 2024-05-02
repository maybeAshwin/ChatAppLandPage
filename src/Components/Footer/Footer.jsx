import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer'>

        <button className='signup-btn'>Sign Up</button>
        <ul>
            <li>Login</li>
            <li>Features</li>
            <li>Privacy</li>
           
        </ul>
        <ul>
            <li>Help Center</li>
            <li>About Us</li>
            <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

