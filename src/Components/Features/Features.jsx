import './Features.css'
import img1 from '../../assets/encription.png'
import img2 from '../../assets/fast.png'
import img3 from '../../assets/multimedia.png'
import img4 from '../../assets/sec.png'


 function Features() {
  return (
    
    <div className='features'>

        <div className="feature">
            <img src={img1} alt="" />
            <div className="caption">
                <h2>Encription</h2>
                <p>AES (Advanced Encryption Standard) is a widely used symmetric encryption algorithm that ensures secure data transmission and storage</p>
            </div>
            </div>
        <div className="feature">
            <img src={img2} alt="" />
            <div className="caption">
                <h2>Speed</h2>
                <p>Enjoy real-time messaging that keeps you connected with friends, family, and colleagues at the speed of thought</p>
            </div>           
        </div>
        <div className="feature">
            <img src={img3} alt="" />
            <div className="caption">
                <h2>Multi-Media</h2>
                <p>Share your world with ease. From photos and videos to GIFs and voice messages, SparkChat lets you express yourself in multiple</p>
             </div>
            </div>
        <div className="feature">
            <img src={img4} alt="" />
            <div className="caption">
                <h2>Security</h2>
                <p>Your conversations are precious and we treat them as such.CraftChat employs top-notch security protocols to keep your data safe and your</p>
            </div>
        </div>
       
    </div>
    
  )
}

export default Features
