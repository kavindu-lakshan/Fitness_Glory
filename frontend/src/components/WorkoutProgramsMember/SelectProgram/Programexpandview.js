import React from "react";

export default function Programexpandview(props) {
  return (
    <div style={{ marginTop: "20px" }} className="container">
      <div className="card rounded shadow border">
        <img className="card-img-top" src={props.values.photoURL} />
        <div className="container">
          <h1>{props.values.name}</h1>
          <d1 className="row">
            <dt className="">{props.values.description}</dt>
            <dd className=""></dd>
            <br />
            <dt className="col-sm-3">Conducted by</dt>
            <dd className="col-sm-9">{props.values.conducted_by}</dd>

            <dt className="col-sm-3">Monthly fee (Rs)</dt>
            <dd className="col-sm-9">{props.values.fee}</dd>

            <dt className="col-sm-3">Weekly on</dt>
            <dd className="col-sm-9">{props.values.day}</dd>

            <dt className="col-sm-3">Time</dt>
            <dd className="col-sm-9">{props.values.time}</dd>
          </d1>
        </div>
      </div>
    </div>
  );
}
