import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function AllProgramsView(props) {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

    return (
        <div  data-aos="fade-top" className="container">
          <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
              <h1 className="text-light">Workout Programs</h1>
            </div>
            <div className="col-lg-3 mt-2 mb-2">
              <input className="form-control"
                type="search"
                placeholder="Search"
                name="searchQuery"
                onChange={props.handleSearchArea}
                />
            </div>
          </div>
        <table className ="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Day</th>
              <th scope="col">Time</th>
              <th scope="col">Conducted by</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.values.map((program, index) => (
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                  <a href={'/admin/expand-program/' + program._id} style ={{textDecoration: 'none'}}>
                  {program.name}
                  </a>
                  </td>
                <td>{program.day}</td>
                <td>{program.time}</td>
                <td>{program.conducted_by}</td>
                <td>
                  <a className="btn btn-primary" style ={{width: '100%', marginBottom: '2px'}} href={'/admin/edit-program/' + program._id}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  <a className="btn btn-primary"  style ={{width: '100%', marginBottom: '2px'}} href='' onClick={() =>props.onDelete(program._id, program.name) }>
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn-success mb-2"> <a href="/admin/add-program" style ={{textDecoration: 'none', color: 'white'}}>New Program</a></button>
        <button className="btn btn-info mb-2 mx-3"> <a href="/admin/programsReport" style ={{textDecoration: 'none', color: 'white'}}>Programs Stats</a></button>
      </div>
    )
}
