import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    var[Employee,setEmployee]=useState([])
    useEffect(()=>{
    axios.get('http://localhost:3004/view')
    .then((res)=>{
        setEmployee(res.data)
    })
},[])
const delValue =(id) => {
    console.log(id);
    axios.delete("http://localhost:3004/remove"+id)
    .then((res)=>{
        alert(res.data.message);
        window.location.reload();
    })
};
const updateValue =(val)=>{
    console.log('up clicked');
    Navigate('/a',{state:(val)});
};
  return (
    <div>
        <TableContainer>
            <Table>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Department</TableCell>
                    <TableCell>Salary</TableCell>
                </TableRow>
                <TableHead>
                    <TableBody>
                        {Employee.map((val)=>{
                            return(
                                <TableRow>
                                <TableCell>{val.Name}</TableCell>
                                <TableCell>{val.Age}</TableCell>
                                <TableCell>{val.Salary}</TableCell>
                                <TableCell>{val.Department}</TableCell>
                                <TableCell><Button onClick={()=>{delValue(val._id);}}>Delete</Button>
                                </TableCell>
                            </TableRow>
                            )})
                        }
                       
                    </TableBody>
                </TableHead>
            </Table>
        </TableContainer>
    </div>
  )}

export default View