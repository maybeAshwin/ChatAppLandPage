import './Chat.css'
import arrow_btn from '../../assets/arrow_btn.png'
import play_btn from '../../assets/play_icon.png'
import pause_btn from '../../assets/pause_icon.png'
import scroll_btn from '../../assets/scroll.gif'

const Chat = ({chatData,setChatCount,chatCount,setPlayStaus,playStatus}) => {
  return (
    <div className='chat'>
        <div className="chat-text">
          <p>{chatData.text1}</p>
          <p>{chatData.text2}</p>
        </div>

        <div className='explore'>
          <p>Explore The Features</p>
          <img  src={arrow_btn} className='features1' />
        </div>

        <div className="chat-dot-play">
         

          <div className="chat-play">
            <img onClick={()=>setPlayStaus(!playStatus)} src={playStatus?pause_btn:play_btn} alt="" />
            <p>See the Video</p>
          </div>
        </div>
    </div>
  )
}

export default Chat
