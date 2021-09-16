export const getEmp = (id) => fetch(`http://localhost:5000/Employee_Delete/admin/delete/${id}`).then(res=>res.clone().json());

export const sendReason = (reason) => fetch(`http://localhost:5000/Employee_Delete/admin/delete/`,{
    method:"POST",
    headers:{
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body:JSON.stringify(reason)
})

export const deleteCleaner = (cleaner, id) => fetch(`http://localhost:5000/Cleaners/admin/delete/${id}`, {
    method:"DELETE", 
    headers:{
        "Accept" : "application/json",
        "Content-Type": "application/json"
    },
    body:JSON.stringify(cleaner)
});

export const deleteSalary = (salary, id) => fetch(`http://localhost:5000/Employee_Salary/admin/salary/delete/${id}`, {
    method:"DELETE", 
    headers:{
        "Accept" : "application/json",
        "Content-Type": "application/json"
    },
    body:JSON.stringify(salary)
});

export const getLeaves = () => fetch(`http://localhost:5000/Leaves/`).then(res=>res.clone().json());

export const getCleaners = () => fetch(`http://localhost:5000/Cleaners/admin/cl/`).then(res=>res.clone().json());

export const getSalary = () => fetch(`http://localhost:5000/Employee_Salary/admin/salary/`).then(res=>res.clone().json());
