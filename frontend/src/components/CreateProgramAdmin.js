import React, { Component } from 'react'
import axios from 'axios';
import { storage } from "../firebase"

export default class CreateProgramAdmin extends Component {

    constructor(props){
        super(props);
        
        this.state={
            name:'',
            description:'',
            conducted_by:'',
            fee:'',
            day:'',
            time:'',
            photo: '',
            photoURL:'xx',
        }
    }

    handleInputChange = (e) => {
        const {name, value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    
    handlePhoto = (e) => {
        if(e.target.files[0]){
            this.setState({
            photo: e.target.files[0]
          })
        }
    }

    handleUpload = () => {
        let image = this.state.photo;

        const uploadTask = storage.ref('images/'+image.name).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error)
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        this.setState({photoURL: url})
                    })
            }
        )
    }

    sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }

    onSubmit = async (e) => {
   
        e.preventDefault();

        this.handleUpload();
        await this.sleep(9000)

        const {name,description,conducted_by,fee,day,time,photoURL} = this.state;

        const data ={
            name:name,
            description:description,
            conducted_by:conducted_by,
            day:day,
            fee:fee,
            time:time,
            photoURL:photoURL
        }
        console.log(data.photoURL)
        axios.post("http://localhost:5000/program/save",data).then((res) =>{
            if(res.data.success){
                alert(data.name+' created successfully');
                window.location = '/admin-programs';
               // console.log('ddd'+data.photoURL)

                this.setState({
                    name:'',
                    description:'',
                    conducted_by:'',
                    fee:'',
                    day:'',
                    time:'',
                    photo:'',
                    photoURL:''
                })
            }
        })
    }

    render() {  
        return (
            <div className='col-md-8 mt-4 mx-auto'>
                <h1 className='h3 mb-3 font-weight-normal'>Create new program</h1>
                    <form className='needs-validation' noValidate encType='multipart/form-data'>
                        <input 
                            type="file" 
                            accept=".png, .jpg, .jpeg"
                            name="photo"
                            onChange={this.handlePhoto}
                        />
                        <button onClick={this.handleUpload}>Upload Image</button>
                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Name</label>
                            <input type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter name"
                            value={this.state.name}
                            onChange={this.handleInputChange}/>
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Description</label>
                            <input type="text"
                            className="form-control"
                            name="description"
                            placeholder="Enter description"
                            value={this.state.description}
                            onChange={this.handleInputChange}/>
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Conducted by</label>
                            <input type="text"
                            className="form-control"
                            name="conducted_by"
                            placeholder="Enter who's conducting"
                            value={this.state.conducted_by}
                            onChange={this.handleInputChange}/>
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Monthly Fee</label>
                            <input type="text"
                            className="form-control"
                            name="fee"
                            placeholder="Enter fee"
                            value={this.state.fee}
                            onChange={this.handleInputChange}/>
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Conducting Day</label>
                            <input type="text"
                            className="form-control"
                            name="day"
                            placeholder="Enter conducting day"
                            value={this.state.day}
                            onChange={this.handleInputChange}/>
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Time Duration</label>
                            <input type="text"
                            className="form-control"
                            name="time"
                            placeholder="Enter name"
                            value={this.state.time}
                            onChange={this.handleInputChange}/>
                        </div>

                        <button className='btn btn-success' type='submit' style={{marginTop:'15px'}} onClick={this.onSubmit}>
                            <i className='far fa-check-square'></i>
                            &nbsp; save
                        </button>
                    </form>
            </div>
        )
    }
}
