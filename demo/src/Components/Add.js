import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";



  const Add = () => {
    const [product,setProduct] = useState({
      product_name: '',
              description: '',
              price: 0,
              stock_quantity: 0,
    })
const navigate = useNavigate()

      const handleChange = (e) =>{
    setProduct((prev)=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleClick = async e =>{
    e.preventDefault()
    try{
await axios.post('http://localhost:3002/products', product)
navigate("/home")
    }catch(err){
      console.log(err)

    }
  }
  console.log(product)
  

  return (
    <div className='form'>
      <h1>Add new Book</h1>
      <input type='text' placeholder='product_name'onChange={handleChange} name='product_name'></input>
      <input type='text' placeholder='description' onChange={handleChange} name='description'></input>
      <input type='number' placeholder='price'     onChange={handleChange} name='price'></input>
      <input type='number' placeholder='stock'     onChange={handleChange} name='stock'></input>
    <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add;