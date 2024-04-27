import './Background.css'
import video1 from '../../assets/chat-v.mp4'
import image1 from '../../assets/bg.jpg'


const Background = ({playStatus,chatCount}) => {


    if(playStatus){
        return(
            <video className="Background fade-in" autoPlay loop muted>
                <source  src={video1} type='video/mp4' />
            </video>
        )
    }else
    {
        return <img src={image1} className='Background fade-in' alt=""/>
    }
}
export default Background
