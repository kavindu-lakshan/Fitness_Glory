import React, { useState } from 'react';
import {useForm} from 'react-hook-form'
import ImageBoxAnimation from './ImageBoxAnimated2';
import styled from 'styled-components';
import GradientButton from 'react-linear-gradient-button';
import Tooltip from '@material-ui/core/Tooltip';

const Wrapper = styled.div``;

const TooltipText = styled.div`
  fontSize: 16px;
  color: #fff;
  width: 200px;
  text-align: center;
  line-height: 50px;
  border-radius: 3px;
  cursor: pointer;
`;

export const DeleteConfirmation = ({employee, onSubmit}) =>{
    
    const {register, handleSubmit} = useForm({defaultValues: {
        NICNumber: employee ? employee.NICNumber: "",
        Reason: employee ? employee.Reason:"",
        
    }})

    const submitHandler = handleSubmit((data) =>{
        onSubmit(data)
    })
   
    return(
        <div>
            <br></br>
                <div>
                <Wrapper>
                    <ImageBoxAnimation />
                </Wrapper>
                </div>
                <div style = {FormStyles}>
                <form onSubmit={submitHandler}>
                <h3 style = {headingStyles}>DISMISSAL OF EMPLOYEES</h3>
                <br></br>
            <div>
                <div >
                    <label style = {labelStyles1} for="NICNumber" className="form-label">NIC NUMBER :</label>
                    <input style = {inputStyles1} type="text" 
                    disabled = 'true'
                    className="form-control"{...register("NICNumber", { required: true })} id="NICNumber" name="NICNumber"/>
                </div>
                <div ></div>
                <br/>
                <br></br>
                <div ></div>
                <div>
                    <label  style = {labelStyles2} for="Reason" className="form-label">REASON :</label>
                    <TooltipText style = {TipStyles} title="Add the reason for dismissal here">
                    <textarea
                    style = {inputStyles2} type="text"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    {...register("Reason", { required: true })} id="Reason" name="Reason"
                    required
                    />
                    </TooltipText> 
                </div>
            </div>
            <br/>
            <br></br>
            <GradientButton type="submit" className="CheckButton" style = {linkStyles}>
                CONFIRM DELETE
            </GradientButton>
            <br></br>
        </form>
        </div>
        <br></br>
        </div>
    )
}

const TipStyles = {
    color: 'red'
}

const headingStyles = {
    color: 'white',
    fontSize: '30px',
    textAlign: 'center',
    padding: '30px'
}

const FormStyles = {
    backgroundColor: 'black',
    width: '1229px',
    marginLeft: '-50px'
}

const labelStyles1 = {
    color: 'white',
    marginLeft: '300px'
}

const inputStyles1 = {
    width: '450px',
    marginLeft: '450px',
    marginTop: '-40px'
}

const labelStyles2 = {
    color: 'white',
    marginLeft: '300px'
}

const inputStyles2 = {
    width: '450px',
    marginLeft: '450px',
    marginTop: '-40px'
}

const linkStyles = {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    marginLeft: '540px'
}