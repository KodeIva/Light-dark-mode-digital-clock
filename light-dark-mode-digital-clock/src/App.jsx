import React, { useState, useEffect } from 'react'

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

  useEffect(() => {
    const intervalUK = setInterval(() => {
     setTime(new Date().toLocaleTimeString())
     setBgTime(new Date(bg).toLocaleTimeString())
    },1000)
    return () => clearInterval(intervalUK)
  },[time,bgTime])



  return (
    <div className='light'>
      <h3>Today is:</h3>
      <span> {date}</span>
      <h3>UK time</h3>
      <p>{time}</p>
      <h3>BG time</h3>
      <p>{bgTime}</p>
    </div>
  )
}

export default App
