import React from 'react'

export default function workoutprogramcard(props) {

    return (
        <div className="card mb-4 shadow-sm">
            <img className="card-img-top" src={props.program.photoURL} alt="Card image cap"/>
                <div className="card-body">
                    <a href={'/member/expand-program/' + props.program._id}>
                        <h4 className="card-title">{props.program.name}</h4>
                        <p className="card-text">ON  : {props.program.day}</p>
                        <p className="card-text">AT  : {props.program.time}</p>
                        <p className="card-text">Monthly : Rs {props.program.fee}</p>
                    </a>
                    <button type="button" onClick={() => props.EnrollController(props.member_id,props.program._id)} className="btn btn-primary">Enroll</button>
                </div>
        </div>
    )
}
