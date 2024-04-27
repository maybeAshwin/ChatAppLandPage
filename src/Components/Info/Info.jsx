import React from 'react'
import './Info.css'
import noAds from '../../assets/No-Ads.png'
import free from '../../assets/Nonprofit503.png'


const Info = () => {
  return (
    <div className='info'>
          
          <div className="about-left">
          <h1 className='xtra'>Extra Features</h1>
            <img src={noAds} alt="" className='no-Ads' />
          </div>
          <div className='about-right'>
          <h2>No ads. No trackers. No kidding.</h2>
          <p>There are no ads, no affiliate marketers, and no creepy tracking <br /> So focus on sharing the moments that matter with the people who matter to you.</p>
         </div>  
        </div>


  )
}

export default Info

