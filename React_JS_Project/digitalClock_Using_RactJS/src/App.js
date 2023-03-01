import './App.css';
import React, { useState } from 'react';


const App = () => {

  var getTime = new Date().toLocaleTimeString();


  const [times, setTime] = useState(getTime);

  const getCurrTime = () => {
    getTime = new Date().toLocaleTimeString();
    setTime(getTime);
    // console.log(times);
  };

  setInterval(getCurrTime, 1000)

  return (
    <>
      <div className='Main__Div'>
        <h1>{times}</h1>
      </div>
    </>
  );





};

export default App;
