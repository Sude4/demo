import {React,useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import  Axios  from 'axios';
export default function SignIn() {
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const navigate = useNavigate(); // Access the navigate function

  // Send a POST request to sign in endpoint
 // Send a POST request to sign in endpoint
 const handleSingIn = () => {
  Axios.post('http://localhost:3002/signIn', {
    email: email,
    password: password 
  }).then(() => {
    // Redirect to Home page upon successful sign in
    navigate('/home');
  }).catch((error) => {
    console.error(error);
    // Handle sign-in error if needed
  });
}
  return (
    <div className='container'>
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
      
      <button onClick={()=>{handleSingIn()}}>LOGIN</button>
      <br />
      <Link to='/signup'>Dont have an acoount?</Link>
    </div>
  )
}
