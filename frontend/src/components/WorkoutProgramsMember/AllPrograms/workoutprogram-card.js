import React from 'react'

export default function workoutprogramcard(props) {

    return (
        <div className="card  shadow-sm">
            <img className="card-img-top" src={props.program.photoURL} alt="Card image cap"/>
                <div className="card-body">
                    <a href={'/member/expand-program/' + props.program._id}>
                        <h5 className="card-title">{props.program.name}</h5>
                        <p style = {{ margin :1 }} className="card-text">ON  : {props.program.day}</p>
                        <p style = {{ margin :1 }} className="card-text">AT  : {props.program.time}</p>
                        <p style = {{ margin :1 }} className="card-text">Monthly : Rs {props.program.fee}</p>
                    </a>
                    <button type="button" onClick={() => props.EnrollController(props.member_id,props.program._id)} className="btn btn-primary mt-2">Enroll</button>
                </div>
        </div>
    )
}
