import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios'
export default function SingUp() {
    const[firstName,setFirstName]=useState();
    const[lastName,setLastName]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();

     // Function to handle form submission
    const handleSubmit=()=>{
       // Make a POST request to the server with user data
Axios.post('http://localhost:3002/signUp',{
  firstName:firstName,
  lastName:lastName,
  email:email,
  password:password 
})
    }
  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        <label>first name</label>
        <br />
        <input type="text" onChange={(e)=>{setFirstName(e.target.value)}} />
      </div>
      <div>
        <label>last name</label>
        <br />
        <input type="text"  onChange={(e)=>{setLastName(e.target.value)}} />
      </div>
      <div>
        <label>email</label>
        <br />
        <input type="text" onChange={(e)=>{setEmail(e.target.value)}}/>
      </div>
      <div>
        <label>password</label>
        <br />
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
      </div>
      <button onClick={()=>{handleSubmit()}}>SUBMIT</button>
      <br />
      <Link to='/'>Already have an account?</Link>
    </div>
  );
}
