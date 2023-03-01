import React from 'react';
import './index.css';
import SlotM from './SlotM';





const App = () => {
  return (
    <>
      <h1 className='heading_style' style={{ color: "#ffffff" }} >🎰 Welcome to <span style={{ fontWeight: "bold", backgroundColor: "gray" }}>Slot Machine Game</span>🎰</h1>

      <div className='emoji_first'>
        <div className='emoji_middel'>
          <div className="emoji_second">
            <SlotM/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;