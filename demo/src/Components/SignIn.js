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
    // <div className='container'>
    //   <h1>Sign In</h1>  
    //    {/* Email input */}
    //   <div>
    //     <label>Enter your email:</label>
    //     <br />
    //     <input type="text" onChange={(e)=>{setEmail(e.target.value)}}/>
    //   </div>
    //     {/* Password input */}
    //   <div>
    //     <label>Enter your password:</label>
    //     <br />
    //     <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
    //   </div>
      
    //   <button onClick={()=>{handleSingIn()}}>LOGIN</button>
    //   <br />
    //   <Link to='/signup'>Dont have an acoount?</Link>
    // </div>
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
  <div className="md:w-1/3 max-w-sm">
    <img
      src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
      alt="Sample image"
    />
  </div>
  <div className="md:w-1/3 max-w-sm">
   
    <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
      <p className="mx-4 mb-0 text-center font-semibold text-slate-500">HI!</p>
    </div>
    <div className="container">
      <h1>Sign In</h1>
      {/* Email input */}
      <div>
        <label>Enter your email:</label>
        <br />
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
      </div>
      {/* Password input */}
      <div>
        <label>Enter your password:</label>
        <br />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>

      <button onClick={() => handleSingIn()}>LOGIN</button>
      
      <br />
      <Link to="/signup">Don't have an account?</Link>
    </div>
  </div>
</section>

  )
}
