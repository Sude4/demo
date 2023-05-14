import logo from './logo.svg';
import './App.css';
import  { useState } from 'react';

function App() {
  const [number,setNumber]=useState()
  const [ans,setAns]=useState()
  function sendNumber(){
fetch('http://localhost:3002/isEven',{
  method:'POST',
  body:JSON.stringify({val:parseInt(number)}),
  headers:{
    'Content-type':'application.json'
  }
}).then((resp)=>{return resp.json()}) .then((data)=>{setAns(data.answer)})
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
