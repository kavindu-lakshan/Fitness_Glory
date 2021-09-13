import React from 'react'

function CreateProgramForm(props) {
    return (
        <div className="container mt-1 bg-black mb-1">
            <div className='col-md-6 mx-auto'>
                <h1 className="text-white">Create new program</h1>
                <hr/>
                    <form className='needs-validation' noValidate encType='multipart/form-data'>
                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Cover photo</label><br/>
                            <img src={props.values.previewURL} class="img-fluid"/>
                            <input 
                                type="file" 
                                accept=".png, .jpg, .jpeg"
                                name="photo"
                                onChange={props.handlePhoto}
                            />
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Name</label>
                            <input type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter name"
                            value={props.values.name}
                            onChange={props.handleInputChange}/>
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Description</label>
                            <input type="text"
                            className="form-control"
                            name="description"
                            placeholder="Enter description"
                            value={props.values.description}
                            onChange={props.handleInputChange}/>
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Conducted by</label>
                            <input type="text"
                            className="form-control"
                            name="conducted_by"
                            placeholder="Enter who's conducting"
                            value={props.values.conducted_by}
                            onChange={props.handleInputChange}/>
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Monthly Fee (Rs)</label>
                            <input type="number"
                            className="form-control"
                            name="fee"
                            placeholder="Enter fee"
                            value={props.values.fee}
                            onChange={props.handleInputChange}/>
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Starting Time</label>
                            <input type="time"
                            className="form-control"
                            name="time"
                            placeholder=""
                            value={props.values.time}
                            onChange={props.handleInputChange}/>
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Conducting Day</label>
                            <select className="dropdown-toggle" name="day" id="day" onChange={props.handleInputChange}>
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

                        <button className='btn btn-success' type='button' style={{marginTop:'15px'}} disabled={props.values.isLoading} onClick={props.handleUpload}>
                            <i className='far fa-check-square'></i>
                            &nbsp; {props.values.isLoading ? "Uploading..." : "Save"}
                        </button>
                    </form>
            </div>
            </div>
    )
}
export default CreateProgramForm;