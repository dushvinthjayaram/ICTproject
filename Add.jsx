import { Button, TextField } from '@mui/material'
import axios from 'axios';
import e from 'cors';
import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom';

const Add = (props) => {
    var[inputs,setInputs]=useState({Name:"",Age:"",Dept:"",Salary:""});
    var navigate=useNavigate()
    var location =useLocation()
    console.log(location.state); 
    const inputHandler =(e) =>{
        setInputs({...inputs,[e.target.Name]:e.target.value});
        console.log(inputs);}
    };
    const addHandler=()=>{
        if(location.state !==null) {
            axios.put("https://localhost:3004/edit/"+location.state.val._id,inputs)
        .then((res)=>{
            alert(res.data.message)
            Navigate('/')
        })}

        else {
        axios.post("https://localhost:3004/add",inputs)
        .then((res)=>{
            console.log(res);
            alert(res.data.message);
            Navigate('/')
        })
    }
    useEffect(()=>{
        if(location.state!==null){
            setInputs({
                ...inputs,
                Name:location.state.val.Name,
                Age:location.state.val.Age,
                Dept:location.state.val.Dept,
                Salary:location.state.val.Salary,
            });
        }
    },[]);
  return (
   <div>
    <TextField
    variant='outlined'
    label='Name'
    onChange={inputHandler}/>
    name="Name"
    <br></br>
    <TextField
    variant='outlined'
    label='Age'/>
    <TextField
    variant='outlined'
    label='Department'/>
    <br></br>
    <TextField
    variant='outlined'
    label='Salary'
    onChange={inputHandler}
    name="salary"
    value={inputs.Salary}
    />
    <br></br>
    <Button variant='contained' color='secondary'>submit</Button>
    <br></br>
   </div>
  )
}

export default Add