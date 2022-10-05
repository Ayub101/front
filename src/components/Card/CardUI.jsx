import React from "react";
import './card-style.css';

const Card = props =>{
    return (
        <div className="card text-center">
            <div classname="overflow">
                <img src={props.imgsrc} alt="image1" width="200rem" />
            </div>
            <div classname="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    {props.text}
                </p>
                <a href="#" className="btn btn-outline-success">Play Me</a>
            </div>
            <p>                </p>
        </div>
      );
}

export default Card; 