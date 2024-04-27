import { useEffect, useState } from "react"
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Chat from "./Components/Chat/Chat";
import Features from "./Components/Features/Features";
import Title from "./Components/Title/Title";
import Info from "./Components/Info/Info";
import Info2 from "./Components/Info2/Info2"

const App = () => {
    let chatData=[
        {text1:"Dive into",text2:"What You Love"},
        {text1:"The Power of",text2:"Real-time Chat"},
        {text1:"Give in to",text2:"Your Passions"}
    ]
    const [chatCount,setChatCount]=useState(0);
    const [playStatus,setPlayStaus]=useState(false);
   
    useEffect(()=> {
      setInterval(() => {
        setChatCount((count)=>{return count===2?0:count+1})
      }, 5000);
    },[])

  return (
    <div>
      <Background playStatus={playStatus} chatCount={chatCount}/>
      <Navbar/>
      <Chat 
        setPlayStaus={setPlayStaus}
        chatData={chatData[chatCount]}
        chatCount={chatCount}
        setChatCount={setChatCount}
        playStatus={playStatus}
      />
      <div className="container">
        <Title subTitle='features' title='What We Offer'/>
        <Features/>
        <Title/>
        <Info/>
        <Info2/>
      </div>
      
    </div>
  )
}

export default App

