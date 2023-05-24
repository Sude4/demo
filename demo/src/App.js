import logo from './logo.svg';
import './App.css';
import  { useState } from 'react';
import Axios from 'axios'
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Product from './Components/Product';
import Home from './Pages/Home';
import Add from './Components/add';
import Update from './Components/update';
import "./styles.css"
import Reviews from './Components/Reviews';
import Admin from './Pages/Admin';
import ProductDetail from './Pages/ProductDetail';
import Cart from './Pages/Cart';
function App() {

  return (
    <Router>
 <div className='App'>
<Routes>
  <Route exact path='/' element={<SignIn/>}/>
  <Route  path='/signup' element={<SignUp/>}/>
  <Route  path='/home' element={<Home/>}/>
  <Route  path='/update' element={<Update/>}/>
  <Route path='/add' element={<Add/>}></Route>
  <Route path='/reviews' element={<Reviews/>}></Route>
  <Route path='/admin' element={<Admin></Admin>}></Route>
  <Route exact path="/products" component={Product} />
    <Route path="/products/:id" component={ProductDetail} />
    <Route exact path="/products" element={<Product />} />
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/cart" element={<Cart />} />
</Routes>
    </div>
    </Router>
   
  );
}

export default App;
