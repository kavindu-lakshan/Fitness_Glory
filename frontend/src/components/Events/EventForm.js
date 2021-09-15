// import React from 'react';
// import {useForm} from 'react-hook-form'
// import Button from '@material-ui/core/Button';

// export const EventForm = ({ onSubmit}) =>{
    
//     const {register, handleSubmit, formState:{errors}} = useForm({defaultValues: {
//     }})

//     const submitHandler = handleSubmit((data) =>{
//         onSubmit(data)
//     })

//     return(
//         <div>
//         <div style={head}>
//         <h4 style={labelStyle}>Question Details</h4>
//         </div>

//         <form onSubmit={submitHandler}>
//             <br/>
//             <div>
//             <div class="row">
//                 <div class="col-6 col-sm-6">
//                     <label style={labelStyle} for="tagline" className="form-label">Enter Tagline</label>
//                     <input style={inputFieldStyle} type="text" className="form-control" {...register("tagline", { required: true })} id="tagline" name="tagline"/>
//                     {errors.tagline && (<small>enter details</small>)}
//                 </div>
//                 <div class="w-100"></div><br/>
//                 <div class="col-6 col-sm-3">
//                     <label style={labelStyle} for="title" className="form-label">Enter Event Title</label>
//                     <input style={inputFieldStyle} type="text" className="form-control" {...register("title", { required: true })} id="title" name="title" />
//                     {errors.title && (<small>enter details</small>)}
//                 </div>
//                 <div class="col-6 col-sm-3">
//                     <label style={labelStyle} for="description" className="form-label">Enter Event Description</label>
//                     <input style={inputFieldStyle} type="text" className="form-control"{...register("description", { required: true })} id="description" name="description" />
//                     {errors.description && (<small>enter details</small>)}
//                 </div>
//                 <div class="w-100"></div><br/>
//                 <div class="col-6 col-sm-6">
//                     <label style={labelStyle} for="qDescription" className="form-label">Enter Event Desciption</label>
//                     <input style={inputFieldStyle} type="text" className="form-control" {...register("date", { required: true })} id="date" name="date" />
//                     {errors.date && (<small>enter details</small>)}
//                 </div>
//             </div><br/>
//             </div>
//             <hr/>
//             <div style={head}>
//                 <h4 style={labelStyle}>Provide Answer</h4>
//             </div><br/>
//             <div className="row">
//                 <div class="col-6 col-sm-3">
//                     <label style={labelStyle} for="date" className="form-label">Enter Event Detail</label>
//                     <input style={inputFieldStyle} type="text" className="form-control" {...register("details", { required: true })} id="details" name="details"/>
//                     {errors.details && (<small>enter details</small>)}
//                 </div>
//                 <div class="col-6 col-sm-3">
//                     <label style={labelStyle} for="mUsername" className="form-label">Gender </label>
//                     <input style={inputFieldStyle} type="text" className="form-control"{...register("members", { required: true })} id="members" name="members"/>
//                     {errors.members && (<small>enter details</small>)}
//                 </div>
//                 <div class="w-100"></div><br/>
//                 <div class="col-6 col-sm-3">
//                     <label style={labelStyle} for="mUsername" className="form-label">Profile Picture</label>
//                     <input style={inputFieldStyle} type="text" className="form-control"{...register("crslimg", { required: true })} id="crslimg" name="crslimg"/>
//                     {errors.crslimg && (<small>enter details</small>)}
//                 </div>
//             </div>
//             <br/><br/>
//             <center><Button style={btn} size="large" type="submit" className="btn btn-primary">Post Answer</Button></center><br/><br/>
//         </form>
//         </div>
//     )
// }

// const inputFieldStyle={
//     border:'3px solid white',
//     background:'transparent',
//     color:'white',
//     fontFamily: 'Helvetica',
//     fontWeight:'bold',
// }

// const labelStyle={
//     color:'white',
//     fontFamily: 'Helvetica',
//     fontWeight:'bold',
//     fontSize:'15pt'
// }

// const head ={
//     padding: '10px',
//     textAlignVertical: "center",
//     textAlign: "center",
//     background: '#04938b',
// }

// const btn ={
//     backgroundColor: 'transparent', 
//     border: '2px solid #04938b',
//     color:'#04d0c4'
// }
