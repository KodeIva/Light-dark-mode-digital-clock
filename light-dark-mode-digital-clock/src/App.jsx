import React, { useState, useEffect } from 'react'
import {BiSun,BiSolidMoon} from 'react-icons/bi'

function App() {

  const UKTime = new Date().getTime()
  const localOffset = new Date().getTimezoneOffset()*60000
  console.log(localOffset);
  const utc = UKTime + localOffset
  const bgOffset = +3
  const bg = utc + (3600000 * bgOffset)

  const [time,setTime] = useState(new Date().toLocaleTimeString())
  const [bgTime, setBgTime] = useState(new Date(bg).toLocaleTimeString())
  const [date,setDate] = useState(new Date().toLocaleDateString())
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const intervalUK = setInterval(() => {
     setTime(new Date().toLocaleTimeString())
     setBgTime(new Date(bg).toLocaleTimeString())
    },1000)
    return () => clearInterval(intervalUK)
  },[time,bgTime])


  function mode() {
    setIsDark(!isDark)
  }


  return (
    <div className='light' id={isDark ? 'light': 'dark'}>
      <button 
        onClick={mode} 
        className='btn'>
          {!isDark ? 
             (<div className='icon'><span>Light</span><BiSun/></div>) 
             : 
             (<div className='icon'><span>Dark</span><BiSolidMoon/></div>)}
      </button>
      <div className="date">
        <h3>Today's Date </h3>
        <span> {date}</span>
      </div>
      <div className='uk-time'>
        <h3>UK time</h3>
        <p>{time}</p>
      </div>
      <div className="bg-time">
       <h3>BG time</h3>
       <p>{bgTime}</p>
      </div>     
    </div>
  )
}

export default App
