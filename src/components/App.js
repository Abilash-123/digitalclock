import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  let currDate = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();
  const[currTime, setcTime] = useState(time);
  const UpdateTime = ()=>{
    let time = new Date().toLocaleTimeString();
    setcTime(time);
  }
  setInterval(UpdateTime,1000)

  return (
    <div id="main">
      <div className="date-time">
        <h1>{currTime}</h1>
        <h2>{currDate}</h2>
      </div>
    </div>
  )
}


export default App;
