import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Programexpandview(props) {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="mx-5">
      <div className="rounded shadow bg-primary">
        <div className="row">
          <div data-aos="fade-left" className="my-3 col-md-6">
          <img className="card-img-top" src={props.values.photoURL} />
          </div>

          <div  data-aos="fade-right" className="my-3 col-md-6">
          <h1 className="text-white">{props.values.name}</h1>
          <d1 className="row">
            <dt className="text-light">{props.values.description}</dt>
            <dd className="text-light"></dd>
            <br />
            <dt className="col-sm-3 text-light">Conducted by</dt>
            <dd className="col-sm-9 text-light">{props.values.conducted_by}</dd>

            <dt className="col-sm-3 text-light">Monthly fee (Rs)</dt>
            <dd className="col-sm-9 text-light">{props.values.fee}</dd>

            <dt className="col-sm-3 text-light">Weekly on</dt>
            <dd className="col-sm-9 text-light">{props.values.day}</dd>

            <dt className="col-sm-3 text-light">Time</dt>
            <dd className="col-sm-9 text-light">{props.values.time}</dd>
          </d1>
          </div>
        </div>
        {/* <img className="card-img-top" src={props.values.photoURL} />
        <div className="container">
          <br/>
          <h1 className="text-white">{props.values.name}</h1>
          <d1 className="row">
            <dt className="text-light">{props.values.description}</dt>
            <dd className="text-light"></dd>
            <br />
            <dt className="col-sm-3 text-light">Conducted by</dt>
            <dd className="col-sm-9 text-light">{props.values.conducted_by}</dd>

            <dt className="col-sm-3 text-light">Monthly fee (Rs)</dt>
            <dd className="col-sm-9 text-light">{props.values.fee}</dd>

            <dt className="col-sm-3 text-light">Weekly on</dt>
            <dd className="col-sm-9 text-light">{props.values.day}</dd>

            <dt className="col-sm-3 text-light">Time</dt>
            <dd className="col-sm-9 text-light">{props.values.time}</dd>
          </d1>
        </div> */}
      </div>
    </div>
  );
}
