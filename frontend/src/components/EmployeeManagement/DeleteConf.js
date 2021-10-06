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

