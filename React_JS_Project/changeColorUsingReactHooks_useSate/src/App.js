import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [bgColors, setColor] = useState("#11e909b5");

  const HandleColor = () => {
    var randomColor = '#' + Math.random().toString(16).slice(2, 10);
    setColor(randomColor);
    //check the random color function is worked ?? so go to 
    //console and every click on button  ,   color code has log on console
    console.log(randomColor);
  }


  return (
    <>
      <div className="main__div">
        <h1 style={{ backgroundColor: `${bgColors}` }}>Hello Buddy!!</h1>
        <button style={{backgroundColor:`${bgColors}`}} onClick={HandleColor}>Click Here</button>
      </div>
    </>

  )

}


export default App;

/*
'0.B3333333333333333333'.slice(2,8);



*/ 