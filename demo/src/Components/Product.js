

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Product() {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);

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

  const addToCart = (product) => {
    // Sepete ürün ekleme işlemleri burada gerçekleşir
    console.log('Sepete Eklendi:', product);
  };
  const addToFavorites = (product) => {
    setFavorites([...favorites, product]);
  };

  return (
    <div className="container mx-auto py-8">
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4">
          <h3 className="mt-2 text-lg font-bold">{product.product_name}</h3>
          <p className="text-gray-500">{product.description}</p>
          <p className="text-gray-500">Price: ${product.price}</p>
          <button
            onClick={() => {
              addToCart(product);
              addToFavorites(product);
            }}
            className="bg-blue-50 text-white px-4 py-2 mt-4 rounded hover:bg-blue-100"
          >
            Sepete Ekle & Favorilere Ekle
          </button>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Product;
