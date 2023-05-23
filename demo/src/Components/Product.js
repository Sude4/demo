import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3002/products');
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.idproducts} className="border p-4">
            <h3 className="mt-2 text-lg font-bold">{product.product_name}</h3>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-gray-500">Price: ${product.price}</p>
            <p className="text-gray-500">Stock Quantity: {product.stock_quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
