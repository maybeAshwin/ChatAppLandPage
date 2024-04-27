import React from 'react'
import './Info2.css'
import free from '../../assets/Nonprofit503.png'


const Info2 = () => {
  return (
    <div className='info2'>
        <div className="info2-left">
            <h2>Free for Everyone</h2>
            <p>It is an independent nonprofit. We're not tied to any major tech companies, and we can never be acquired by one either. Development is supported by grants and donations from people like you.</p>
        </div>
        <div className="info2-right">
            <img src={free} alt="" className='free'/>   
        </div> 
        
    </div>
  )
}

export default Info2
