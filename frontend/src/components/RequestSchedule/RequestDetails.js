import React, {Component} from 'react';
import axios from 'axios';

export default class RequestDetails extends Component {
    constructor(props){
        super(props);

        this.state = {
            post:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:5000/Xpost/${id}`).then((res)=> {
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
                console.log(this.state.post);
            }
        });
    }




    render(){
        const {mname, age, gender, email, requirement, rstatus} = this.state.post;
        return(
            //background image
      <div
      className="mainback"
     style={{
       backgroundImage:
         "url(" +
         "https://res.cloudinary.com/dxnsjtp5n/image/upload/v1631512939/jonathan-borba-lrQPTQs7nQQ-unsplash_w3rfhw.jpg" +
         ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
       backgroundRepeat: "no-repeat",
     }} >
                <div  style={{marginTop: '20px'}}>
                    <h4>{mname}</h4>
                    <hr/>
                     
                     <dl className="row">
                         <dt className="col-sm-3">Age</dt>
                         <dd className="col-sm-9">{age}</dd>

                         <dt className="col-sm-3">Gender</dt>
                         <dd className="col-sm-9">{gender}</dd>

                         <dt className="col-sm-3">Email</dt>
                         <dd className="col-sm-9">{email}</dd>

                         <dt className="col-sm-3">Requirement</dt>
                         <dd className="col-sm-9">{requirement}</dd>

                         <dt className="col-sm-3">Status</dt>
                         <dd className="col-sm-9">{rstatus}</dd>
                     </dl>
                </div>
                </div>
        )
        
    }
        
}