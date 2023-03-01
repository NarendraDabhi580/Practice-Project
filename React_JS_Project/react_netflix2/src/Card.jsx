import React from "react";

function Card(props) {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="poster" className="card__img" />
                    <div className="card__info">
                        <span className="card__categery">{props.title}</span>
                        <h3 className="card__tital">{props.sname}</h3>
                        <a href={props.link} target="_blank">
                            <button>🎥                 watch Now!✔</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;