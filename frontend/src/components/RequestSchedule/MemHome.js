import React, { Component } from 'react';
import axios from 'axios';
//import {useSelector} from "react-redux";

export default class MemHome extends Component{
  constructor(props){
    super(props);

    this.state = {
      posts:[]
    };}

   // constUserLogin = useSelector

componentDidMount(){
  this.retrievePosts();
}


  retrievePosts(){
    axios.get("http://localhost:5000/Xposts").then(res => {
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });

        console.log(this.state.posts)
      }
    });
  } 

  onDelete = (id) => {
    axios.delete(`http://localhost:5000/Xpost/delete/${id}`).then((res) => {
      alert("Deleted Succeefully");
      this.retrievePosts();
    });
  };




  filterData(posts,searchKey){
    const result = posts.filter((post) =>
    post.mname.toLowerCase().includes(searchKey)||
    post.age.toLowerCase().includes(searchKey)||
    post.gender.toLowerCase().includes(searchKey)||
    post.email.toLowerCase().includes(searchKey)||
    post.requirement.toLowerCase().includes(searchKey)||
    post.rstatus.toLowerCase().includes(searchKey)
    )
    this.setState({posts:result})
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get("http://localhost:5000/Xposts").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey)
      }
    });
  };





  render(){
    return (
      //background image
      <div
       className="mainback"
      style={{
        backgroundImage:
          "url(" +
          "https://res.cloudinary.com/dxnsjtp5n/image/upload/v1631519443/scott-webb-Vn39uEkX00s-unsplash_zsr4kf.jpg" +
          ")",
      //  backgroundPosition: "center",
       backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }} >

      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4 style={{color:'white'}} >All Requests</h4>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}
            ></input>
          </div>
        </div>

        <table className="table table-hover" style={{ marginTop: '40px' }, {color:'white'}}>
        <thead>
          <tr>
            <th scope = "col">#</th>
            <th scope = "col">Name</th>
            <th scope = "col">Age</th>
            <th scope = "col">Gender</th>
            <th scope = "col">Email</th>
            <th scope = "col">Requirement</th>
            <th scope = "col">Status</th>
            <th scope = "col">Action</th>
          
          </tr>
        </thead>
            <tbody>
              {this.state.posts.map((posts,index ) => (

                  <tr key={index}>
                      <th scope ="row"> {index+1}  </th>
                      <td>
                          <a href={`/member/scheduleR/Xpost/${posts._id}`} style= {{textDecoration:'none'}, {color:'white'}}>
                             {posts.mname}
                             </a> 
                        </td>
                      <td>{posts.age}</td>
                      <td>{posts.gender}</td>
                      <td>{posts.email}</td>
                      <td>{posts.requirement}</td>
                      <td>{posts.rstatus}</td>

                      <td>
                       { /*<a className="btn btn-warning" href={`/member/scheduleR/edit/${posts._id}`}>
                          <i className="fas fa-edit"></i>&nbsp;Edit
                        </a>
                        */}
                         &nbsp; 
                        <a className="btn btn-danger" href="#" onClick ={()=> this.onDelete(posts._id)}>
                          <i className="far fa-trash-alt"></i>&nbsp;Delete
                        </a>
                      </td>

                  </tr>



              ) )}
            </tbody>

        </table>

        <button className="btn btn-success"> <a href="/member/scheduleR/add" style={{textDecoration:'none', color: 'white'}}>Create New Request</a></button>
        
      </div>
       </div>

    )
  }
}