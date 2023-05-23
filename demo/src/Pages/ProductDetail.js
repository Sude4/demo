import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:3002/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handleAddToCart = () => {
    console.log(`Ürün: ${product.product_name}, Miktar: ${quantity}`);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const imagePath = `/images/${product.image}`;

  return (
    <div className="container mx-auto py-8">
      <div className="flex">
        <div className="w-1/2">
          <img src={imagePath} alt={product.product_name} className="w-full h-auto" />
        </div>
        <div className="w-1/2 pl-8">
          <h3 className="mt-2 text-lg font-bold">{product.product_name}</h3>
          <p className="text-gray-500">{product.description}</p>
          <p className="text-gray-500">Price: ${product.price}</p>
          <div className="mt-4 flex items-center">
            <label htmlFor="quantity" className="mr-2">Quantity:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="border p-2 w-16"
            />
          </div>
          <button onClick={handleAddToCart} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
