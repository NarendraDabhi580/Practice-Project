import React from "react";
import "./App.css";

const ToDoLists = (props) => {


    return (
        <>
            <div className="toDoList_style">
                <i className="fa-sharp fa-solid fa-xmark"
                    onClick={() => {
                        props.onSelect(props.id);
                    }}></i>
                <li>{props.text}</li>
            </div>
        </>
    )
}

export default ToDoLists;