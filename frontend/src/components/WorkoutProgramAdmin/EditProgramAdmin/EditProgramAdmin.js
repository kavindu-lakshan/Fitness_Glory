import React, { Component } from 'react'
import axios from 'axios';
import { storage } from "../../../firebase"
import EditProgramForm from './EdirProgramForm';

export default class EditProgramAdmin extends Component {
    constructor(props){
        super(props);
        
        this.state={
            name:'',
            description:'',
            conducted_by:'',
            fee:'',
            day:'',
            time:'',
            photoURL:'',
            photo:'',
            previewURL:'',
            isLoading: false
        }
    }

    handlePhoto = (e) => {
        if(e.target.files[0]){
            this.setState({
            photo: e.target.files[0],
            previewURL: URL.createObjectURL(e.target.files[0])
          })
        }
    }

    handleUpload = () => {
        if (this.state.photo === ''){
            this.onSubmit();
        }
        else{
            this.setState({isLoading: true});
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
                            this.onSubmit();
                        })
                }
            )
        }
    }

    handleInputChange = (e) => {
        const {name, value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = () => {
        //e.preventDefault();
        const id = this.props.match.params.id;

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
        axios.put('http://localhost:5000/program/update/'+id, data).then((res) =>{

        if(res.data.success){
            alert(data.name+' updated successfully');
            window.location = '/admin/programs';

                this.setState({
                    name:'',
                    description:'',
                    conducted_by:'',
                    fee:'',
                    day:'',
                    time:'',
                    photoURL:'',
                    photo:'',
                    previewURL:'',
                    isLoading: false
                })
            }
            
        })
    }
    
    componentDidMount(){
        const url = 'http://localhost:5000/program/' + this.props.match.params.id;
 
         axios.get(url).then((res) => {
            if(res.data.success){
                
                    this.setState({
                        name: res.data.program.name,
                        description: res.data.program.description,
                        conducted_by: res.data.program.conducted_by,
                        fee: res.data.program.fee,
                        day: res.data.program.day,
                        time: res.data.program.time,
                        previewURL: res.data.program.photoURL,
                        photoURL: res.data.program.photoURL
                    })
                    console.log(this.state.previewURL)
                } else {
                    console.log("error retrieving from database")
                }
            })
     }

    render() {  
        return (
            <div style={{  
                backgroundImage: "url(" + "https://res.cloudinary.com/fitness-glory/image/upload/v1630854420/outlook-photography-and-studio-CvvF9lPJy6U-unsplash_cmxfi8.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}>
            <EditProgramForm
                values={this.state}
                handleInputChange={this.handleInputChange}
                onSubmit={this.onSubmit}
                handlePhoto={this.handlePhoto}
                handleUpload={this.handleUpload}
            />
            </div>
        )
    }
}
