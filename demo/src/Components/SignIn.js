import {React,useState} from 'react'
import { Link } from 'react-router-dom';
import  Axios  from 'axios';
export default function SignIn() {
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();

  // Send a POST request to sign in endpoint
    const handleSingIn=()=>{
      Axios.post('http://localhost:3002/signIn',{

  email:email,
  password:password 
})
    }
  return (
    <div>
      <h1>Sign In</h1>  
       {/* Email input */}
      <div>
        <label>Enter your email:</label>
        <br />
        <input type="text" onChange={(e)=>{setEmail(e.target.value)}}/>
      </div>
        {/* Password input */}
      <div>
        <label>Enter your password:</label>
        <br />
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
      </div>
       {/* Sign In button */}
      <button onClick={()=>{handleSingIn()}}>LOGIN</button>
      <br />
       {/* Link to sign up page */}
      <Link to='/signup'>Dont have an acoount?</Link>
    </div>
  )
}
