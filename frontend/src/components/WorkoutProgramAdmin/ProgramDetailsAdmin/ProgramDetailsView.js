import React from 'react'
import './ProgramDetailsViewStyles.css'

export default function ProgramDetailsView(props) {
    return (
        <div style={{marginTop:'20px'}} className="container">
        <h1>{props.values.name}</h1>
        <hr/>
        <div className="container">
            <img src={props.values.photoURL} class="img-thumbnail mx-auto d-block" alt="Responsive image"/>
        </div>

        <d1 className="row">
        <dt className="col-sm-3">Description</dt>
        <dd className="col-sm-9">{props.values.description}</dd>

        <dt className="col-sm-3">Conducted by</dt>
        <dd className="col-sm-9">{props.values.conducted_by}</dd>

        <dt className="col-sm-3">Monthly fee (Rs)</dt>
        <dd className="col-sm-9">{props.values.fee}</dd>

        <dt className="col-sm-3">Weekly on</dt>
        <dd className="col-sm-9">{props.values.day}</dd>

        <dt className="col-sm-3">Time Duration</dt>
        <dd className="col-sm-9">{props.values.time}</dd>
        
        </d1>
    </div>
    )
}
