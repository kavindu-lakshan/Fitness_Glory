import React, { Component } from 'react'
import axios from 'axios';
import { storage } from "../../../firebase"
import CreateProgramForm from './CreateProgramForm';

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
            photoURL:'',
            isLoading: false,
            previewURL: ''
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
            photo: e.target.files[0],
            previewURL: URL.createObjectURL(e.target.files[0])
          })
          console.log(this.state.previewURL)
        }
    }

    defaultImage = async () => {
        this.setState({photoURL: "https://firebasestorage.googleapis.com/v0/b/fitness-glory.appspot.com/o/images%2Fno-img.png?alt=media&token=61f23b0b-e2ff-4ab7-b227-9d8b00791585"});
    }

    handleUpload = () => {

        this.setState({isLoading: true});

        const {name,description,conducted_by,fee,day,time,photo} = this.state;

        if (name === '' || description === '' || conducted_by === '' || fee === '' || day === '' || time === '') {
            alert('You are required to fill all the inputs!');
            this.setState({isLoading: false});

        } else if(photo === ''){
            this.setState({isLoading: false});
            this.defaultImage();
            this.handleSubmit();

        } else {
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
                            this.setState({photoURL: url});
                            this.handleSubmit();
                        })
                }
            )
        }
    }

    handleSubmit = () => {

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
            axios.post("http://localhost:5000/program/save",data).then((res) =>{
                if(res.data.success){
                    this.setState({isLoading: false});
                    alert(data.name+' created successfully');
                    window.location = '/admin-programs';
                }
            })
    }

    render() {  
        return (
            <CreateProgramForm
                values={this.state}
                handlePhoto={this.handlePhoto}
                handleInputChange={this.handleInputChange}
                handleUpload={this.handleUpload}
            />
        )
    }
}