import logo from './logo.svg';
import './App.css';
import  { useState } from 'react';
import Axios from 'axios'
function App() {
  const [number,setNumber]=useState()
  const [ans,setAns]=useState()
  function sendNumber(){
Axios.post('http://localhost:3002/getUsers',{

}).then((resp)=>{console.log(resp.data[0].firstName)}).catch((err)=>{console.log(err)})
  }
  return (
    <div className='App'>
      <input onChange={(e)=>{setNumber(e.target.value)}} />
    <button onClick={sendNumber}>Send</button>
    <h1>{ans}</h1>
    </div>
  );
}

export default App;
