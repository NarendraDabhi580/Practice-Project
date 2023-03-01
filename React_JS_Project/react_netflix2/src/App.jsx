import React from "react";
import Card from "./Card";
import { Sdata1 } from "./Sdata";


const ncard = (value) => {
    return (
        <Card
            key={value.id}
            imgsrc={value.imgsrc}
            title={value.title}
            sname={value.sname}
            link={value.link}
        />
    )
}


function App() {
    return (
        <>
            <div className="heading">
                <h1>Top 5 Netflix series</h1>
            </div>
            <div className="maind">
                <div className="main__div">
                    {Sdata1.map(ncard)}
                </div>

            </div>
        </>
    )
}


export default App;