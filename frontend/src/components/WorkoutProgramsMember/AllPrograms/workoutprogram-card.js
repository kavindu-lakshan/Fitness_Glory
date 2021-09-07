import React from 'react'

export default function workoutprogramcard(props) {
    return (
        <div className="card mb-4">
        <img className="card-img-top" src={props.program.photoURL} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{props.program.name}</h5>
            <p className="card-text">{props.program.description}</p>
            <p className="card-text">ON  : {props.program.day}</p>
            <p className="card-text">AT  : {props.program.time}</p>
            <p className="card-text">FEE : {props.program.fee}</p>
            <a href="#" className="btn btn-primary">Enroll</a>
        </div>
        </div>
    )
}
