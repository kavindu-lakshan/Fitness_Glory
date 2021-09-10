import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { DeleteConfirmation } from './DeleteConfirmation';
import { getEmp, sendReason } from './api';
import { deleteCleaner } from './api';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

export const DeleteConf = () =>{
    const match = useRouteMatch();
    const[employee, setEmployee] = useState();
    const history = useHistory();

    const StyledButton = withStyles({
        root: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          textAlign: 'center'
        },
        label: {
          textTransform: 'capitalize',
        },
    })(Button);

    useEffect(() =>{
        const displayEmployee = async() =>{
            const employees = await getEmp(match.params.id)
            setEmployee(employees)
        }   
        displayEmployee()
    },[]);

    const onSubmit = async(data) =>{
        await sendReason(data)
        await deleteCleaner(data, match.params.id)
        history.push(`/admin/DeleteCleanerInterface`);
        alert("The cleaner information has been removed successfully")
    }

    return employee ?(
        <div className="container">
            <div className="mt-3">
                <DeleteConfirmation employee={employee} onSubmit={onSubmit}/>
            {}
            </div>
        </div>
    ):(<div></div>)
}

const btnStyles = {
    marginTop: '0px',
    marginLeft: '370px',
    textDecoration: 'none',
    textColor: 'black',
    fontSize: '16px',
    width: '250px',
    animation: 'glowing 1300ms infinite',
    background: 'linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)'
}

const linkStyles = {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold'
}