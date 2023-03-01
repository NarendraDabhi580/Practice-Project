import React, { useState } from 'react';
import './App.css';



const App = () => {

  // const state = useState();

  const [count, setCount] = useState(0);



  const IncNum = () => {

     setCount(count + 1);
  };

    const resetCount = () => {
      setCount(0);
    }


  return (
    <>
    <div className='main__div'>
      <h1 className='heading'>{count}</h1>
      <div className='button__div'>
      <button className='button__click' onClick={IncNum}>Click Me</button>
      <button className='button__reset' onClick={resetCount}>ReseT</button>
      </div>
      </div>
    </>
  );
};



export default App;
