import React from 'react'

const id = "m01"
export default function workoutprogramcard(props) {
    return (
        <div className="card mb-4 shadow-sm">
            <a href={'/member/expand-program/' + props.program._id}><img className="card-img-top" src={props.program.photoURL} alt="Card image cap"/>
                <div className="card-body">

                    <h4 className="card-title">{props.program.name}</h4>
                    <p className="card-text">ON  : {props.program.day}</p>
                    <p className="card-text">AT  : {props.program.time}</p>
                    <p className="card-text">Monthly : Rs {props.program.fee}</p>
                    <button type="button" onClick={() => props.EnrollController(id,props.program._id)} className="btn btn-primary">Enroll</button>
                </div>
            </a>
        </div>
    )
}
