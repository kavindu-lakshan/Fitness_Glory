import React from 'react'

export default function EdirProgramForm(props) {
    return (
            <div className='col-md-8 mt-4 mx-auto'>
                <h1>Edit Program</h1>
                <hr/>
                <img src={props.values.previewURL} class="img-fluid" alt="Responsive image"/>
                    <form className='needs-validation' noValidate>
                        <div className='form-group' style={{marginBottom:'15px'}}>
                        <br/>
                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Change Image</label>
                            <input 
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
                            <label style={{marginBottom:'5px'}}>Time Duration</label>
                            <input type="time"
                            className="form-control"
                            name="time"
                            placeholder="Enter name"
                            value={props.values.time}
                            onChange={props.handleInputChange}/>
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Conducting Day</label>
                            <select className="dropdown-toggle" name="day" id="day" value={props.values.day} onChange={props.handleInputChange}>
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
                            &nbsp; {props.values.isLoading ? "Updating..." : "Update"}
                        </button>
                    </form>
            </div>
    )
}
