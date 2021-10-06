import React from 'react'

export default function Myprograms(props) {

    return (
        <div className="card mb-2 shadow-sm bg-dark">
                <div className="card-body">
                <p className="card-title blockquote text-light">{props.enroll[0]}</p>
                <p className="card-text text-light">Joined on- {props.enroll[1].split(",")[0]}</p>
                </div>
        </div>
    )
}