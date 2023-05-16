import logo from './logo.svg';
import './App.css';
import  { useState } from 'react';
import Axios from 'axios'
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddProducts from './Components/AddProducts';
import Home from './Components/Home';
function App() {

  return (
    <Router>
 <div className='App'>
<Routes>
  <Route exact path='/' element={<SignIn/>}/>
  <Route  path='/signup' element={<SignUp/>}/>
  <Route  path='/addproducts' element={<AddProducts/>}/>
  <Route  path='/home' element={<Home/>}/>
</Routes>
    </div>
    </Router>
   
  );
}

export default App;
