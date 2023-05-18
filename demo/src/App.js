import logo from './logo.svg';
import './App.css';
import  { useState } from 'react';
import Axios from 'axios'
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Products from './Components/Products';
import Home from './Pages/Home';
import Add from './Components/add';
import Update from './Components/update';
import "./styles.css"
function App() {

  return (
    <Router>
 <div className='App'>
<Routes>
  <Route exact path='/' element={<SignIn/>}/>
  <Route  path='/signup' element={<SignUp/>}/>
  <Route  path='/products' element={<Products/>}/>
  <Route  path='/home' element={<Home/>}/>
  <Route  path='/update' element={<Update/>}/>
  <Route path='/add' element={<Add/>}></Route>

</Routes>
    </div>
    </Router>
   
  );
}

export default App;
