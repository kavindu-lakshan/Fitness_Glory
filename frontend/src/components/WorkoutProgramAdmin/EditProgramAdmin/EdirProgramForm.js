import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function EdirProgramForm(props) {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
            <div  data-aos="fade-top" className='col-md-8 mx-auto'>
                <h1 className="text-light">Edit Program</h1>
                <hr/>
                <div className="px-3 py-3 bg-dark">
                <img src={props.values.previewURL} class="img-fluid" alt="Responsive image"/>
                    <form className='needs-validation' noValidate>
                        <div className='form-group' style={{marginBottom:'20px'}}>
                        <br/>
                        <div className='form-group' style={{marginBottom:'20px'}}>
                            <label style={{marginBottom:'5px'}}>Change Image</label>
                            <input className="btn"
                                type="file" 
                                accept=".png, .jpg, .jpeg"
                                name="photo"
                                onChange={props.handlePhoto}
                            />
                        </div>

                            <label style={{marginBottom:'5px'}}>Name</label>
                            <input type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter name"
                            value={props.values.name}
                            onChange={props.handleInputChange}/>
                        </div>

                        <div className='form-group' style={{marginBottom:'20px'}}>
                            <label style={{marginBottom:'5px'}}>Description</label>
                            <input type="text"
                            className="form-control"
                            name="description"
                            placeholder="Enter description"
                            value={props.values.description}
                            onChange={props.handleInputChange}/>
                        </div>

                        <div className='form-group' style={{marginBottom:'20px'}}>
                            <label style={{marginBottom:'5px'}}>Conducted by</label>
                            <input type="text"
                            className="form-control"
                            name="conducted_by"
                            placeholder="Enter who's conducting"
                            value={props.values.conducted_by}
                            onChange={props.handleInputChange}/>
                        </div>

                        <div className='form-group' style={{marginBottom:'20px'}}>
                            <label style={{marginBottom:'5px'}}>Monthly Fee (Rs)</label>
                            <input type="number"
                            className="form-control"
                            name="fee"
                            placeholder="Enter fee"
                            value={props.values.fee}
                            onChange={props.handleInputChange}/>
                        </div>

                        <div className='form-group' style={{marginBottom:'20px'}}>
                            <label style={{marginBottom:'5px'}}>Time Duration</label>
                            <input type="time"
                            className="form-control"
                            name="time"
                            placeholder="Enter name"
                            value={props.values.time}
                            onChange={props.handleInputChange}/>
                        </div>

                        <div className='form-group' style={{marginBottom:'20px'}}>
                            <label style={{marginBottom:'5px'}}>Conducting Day</label>
                            <select className="dropdown-toggle mx-2 btn btn-info" name="day" id="day" value={props.values.day} onChange={props.handleInputChange}>
                                <option value="Mondays">Mondays</option>
                                <option value="Tuesdays">Tuesdays</option>
                                <option value="Wednesdays">Wednesdays</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Fridays">Fridays</option>
                                <option value="Saturdays">Saturdays</option>
                                <option value="Sundays">Sundays</option>
                            </select>
                        </div>

                        <button className='btn btn-success' type='button' style={{marginTop:'20px'}} disabled={props.values.isLoading} onClick={props.handleUpload}>
                            <i className='far fa-check-square'></i>
                            &nbsp; {props.values.isLoading ? "Updating..." : "Update"}
                        </button>
                    </form>
                    </div>
            </div>
    )
}
