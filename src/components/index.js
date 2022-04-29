import React, { useState,useEffect } from "react";

import "./index.css";



function Index() {
  let interval = ""
  const [timeTracker,updateTime] =useState({
          milliseconds: 0,
          seconds: 0,
          minutes:0
        })
  const startTimer = () => {
    

    updateTime(prevTime=>{
      return {
      milliseconds: prevTime.milliseconds + 1,
      seconds: prevTime.seconds,
      minutes: prevTime.minutes,
    }
  })
}

const checkTimeUpdate = ()=>{
  if(timeTracker.seconds>59){
    updateTime(prevTime=>{
      return {
      milliseconds: 0,
      seconds: 0,
      minutes: prevTime.minutes+1,
    }
  })
  }
  else if(timeTracker.milliseconds>99){
    updateTime(prevTime=>{
      return {
      milliseconds: 0,
      seconds: prevTime.seconds+1,
      minutes: prevTime.minutes,
    }
  })
  }
}
const handleStart=()=>{

  clearTimeout(interval)

  interval = setTimeout(startTimer,10)
}
const handlePause = ()=>{

  clearTimeout(interval);
}
const handleReset=()=>{

  clearTimeout(interval)
  updateTime({
    milliseconds: 0,
    seconds: 0,
    minutes:0,
  }
  )
}

useEffect(() => {
  checkTimeUpdate()
})
return (
        <div>
          <h1>STOP TIME</h1>
  
          <h2>
            <span>{`${timeTracker.minutes<10?'0':""}${timeTracker.minutes} :`}</span>
            <span>{` ${timeTracker.seconds<10?'0':""}${timeTracker.seconds} :`}</span>
            <span>{` ${timeTracker.milliseconds<10?'0':""}${timeTracker.milliseconds}`}</span>
          </h2>
          <button onClick={handleStart}> Start </button>
          <button onClick={handlePause}> Pause </button>
          <button onClick={handleReset}> Reset </button>
        </div>
      );
    }
  
export default Index


// class Index extends Component {
//   constructor(props) {
//     super(props);
//     this.interval = "";

//     this.state = {
//       milliseconds: 0,
//       seconds: 0,
//       minutes:0
//     };
//   }

//   startTimer = () => {
//     let milliseconds = this.state.milliseconds; 
//     let sec = this.state.seconds;
//     let min = this.state.minutes;

//     this.setState({
//       milliseconds: milliseconds + 1,
//       seconds: sec,
//       minutes: min,
//     });
//     if (sec > 59) {
//       this.setState({
//         milliseconds: 0,
//         seconds: 0,
//         minutes: min + 1,
//       });
//     } else if (milliseconds > 99) {
//       this.setState({
//         milliseconds: 0,
//         seconds: sec + 1,
//         minutes: min,
//       });
//     }
//   };

//   handleStart = () => {
//     clearInterval(this.interval);
//     this.interval=setInterval(this.startTimer, 10);
//   };

//   handleReset = () => {

//     clearInterval(this.interval);
//     this.setState({
//       milliseconds: 0,
//       seconds: 0,
//       minutes: 0,
//     });

    
//   };

//   handlePause = () => {
//     clearTimeout(this.interval);
//   };
//   render() {
//     return (
//       <div>
//         <h1>STOP TIME</h1>

//         <h2>
//           <span>{`${this.state.minutes<10?'0':""}${this.state.minutes} :`}</span>
//           <span>{` ${this.state.seconds<10?'0':""}${this.state.seconds} :`}</span>
//           <span>{` ${this.state.milliseconds<10?'0':""}${this.state.milliseconds}`}</span>
//         </h2>
//         <button onClick={this.handleStart}> Start </button>
//         <button onClick={this.handlePause}> Pause </button>
//         <button onClick={this.handleReset}> Reset </button>
//       </div>
//     );
//   }
// }

// export default Index;
