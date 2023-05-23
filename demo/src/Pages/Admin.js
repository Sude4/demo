import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    product_name: '',
    description: '',
    price: '',
    stock_quantity: ''
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3002/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Ürünler getirilirken hata oluştu:', error);
    }
  };

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3002/products', newProduct);
      fetchProducts();
      setNewProduct({
        product_name: '',
        description: '',
        price: '',
        stock_quantity: ''
      });
    } catch (error) {
      console.error('Ürün eklenirken hata oluştu:', error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3002/products/${productId}`);
      fetchProducts();
    } catch (error) {
      console.error('Ürün silinirken hata oluştu:', error);
    }
  };

  const renderProducts = () => {
    return (
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <div key={product.id} className="w-1/4 p-4">
            <div className="bg-gray-100 rounded p-4">
              <h2 className="text-xl font-semibold mb-2">{product.product_name}</h2>
              <p className="text-gray-800 mb-2">{product.description}</p>
              <p className="text-gray-800 mb-2">Price: {product.price}</p>
              <p className="text-gray-800 mb-2">Stock Quantity: {product.stock_quantity}</p>
              <button
                className="bg-indigo-300 hover:bg-indigo-400 text-white py-2 px-4 rounded"
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="border border-gray-300 rounded p-4 bg-gradient-to-br from-pink-200 to-blue-300 mb-4">
    <h2 className="text-xl mb-2">Add New Product</h2>
    <form onSubmit={handleSubmit}>
      {/* Product Name */}
      <div className="flex flex-col mb-4">
        <label htmlFor="productName" className="mb-2">
          Product Name:
        </label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={newProduct.productName}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded"
        />
      </div>
  
      {/* Description */}
      <div className="flex flex-col mb-4">
        <label htmlFor="description" className="mb-2">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={newProduct.description}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded"
        />
      </div>
  
      {/* Price */}
      <div className="flex flex-col mb-4">
        <label htmlFor="price" className="mb-2">
          Price:
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded"
        />
      </div>
  
      {/* Stock Quantity */}
      <div className="flex flex-col mb-4">
        <label htmlFor="stockQuantity" className="mb-2">
          Stock Quantity:
        </label>
        <input
          type="number"
          id="stockQuantity"
          name="stockQuantity"
          value={newProduct.stockQuantity}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded"
        />
      </div>
  
      <button type="submit" className="bg-indigo-300 hover:bg-indigo-400 text-white px-4 py-2 rounded">
        Add Product
      </button>
    </form>
      
<h2>Product List</h2>
  {renderProducts()}
  </div>

);
};

export default Admin;