import React, { useState } from "react";
import "./App.css";
import ToDoLists from "./ToDoLists";

const App = () => {

  const [changeInputValue, setChangeInputValue] = useState('');
  const [btnClick,setBtnClick] = useState([]);

  const inputOnChange = (e) => {
    let getValue = e.target.value;
    setChangeInputValue(getValue)
  }

  const addListItem = () => {
    setBtnClick((oldItems) => {
      return [...oldItems,changeInputValue];
    });
    setChangeInputValue("");
  };


  const delItems = (id) => {
    console.log("deleted");
    setBtnClick((oldItems) => {
      return oldItems.filter((arrEle,index) => {
        return index !== id;
      })
    })
}

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>ToDo List</h1>
          <br />
          <div className="input_button">
            <input type="text" placeholder="Add Items" onChange={inputOnChange} value={changeInputValue} />
            <button onClick={addListItem}> + </button>
          </div>
          <ol>
            {/* <li>{btnClick}</li> */}

            {btnClick.map((crValue,index) => {
             return <ToDoLists
              text={crValue}
              id={index}
              key={index}
              onSelect={delItems}
              />
            })}
          </ol>
        </div>
      </div>

    </>
  )
}

export default App;