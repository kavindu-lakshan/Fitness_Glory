import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CreateProgramForm(props) {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

    return (
        <div data-aos="fade-top">
            <div className='col-md-8 mx-auto mb-2'>
                <h1 className="text-light">Create new program</h1>
                <hr/>
                <div className="px-3 py-3 bg-dark">
                    <form className='needs-validation' noValidate encType='multipart/form-data'>
                        <div className='form-group' style={{marginBottom:'20px'}}>
                            <label>Cover photo</label><br/>
                            <img src={props.values.previewURL} class="img-fluid"/>
                            <input 
                                type="file" 
                                accept=".png, .jpg, .jpeg"
                                name="photo"
                                onChange={props.handlePhoto}
                            />
                        </div>

                        <div className='form-group' style={{marginBottom:'20px'}}>
                            <label style={{marginBottom:'5px'}}>Name</label>
                            <input type="text"
                            className="form-control "
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
                            <label style={{marginBottom:'5px'}}>Starting Time</label>
                            <input type="time"
                            className="form-control"
                            name="time"
                            placeholder=""
                            value={props.values.time}
                            onChange={props.handleInputChange}/>
                        </div>

                        <div className='form-group' style={{marginBottom:'20px'}}>
                            <label style={{marginBottom:'5px'}}>Conducting Day</label>
                            <select className="dropdown-toggle mx-2 btn btn-info" name="day" id="day" onChange={props.handleInputChange}>
                                <option>Choose..</option>
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
                            &nbsp; {props.values.isLoading ? "Uploading..." : "Save"}
                        </button>

                        <button className='btn btn-warning mx-2' type='button' style={{marginTop:'20px'}} onClick={props.demo}>
                            Demo
                        </button>
                    </form>
                    </div>
            </div>
            </div>
    )
}
export default CreateProgramForm;