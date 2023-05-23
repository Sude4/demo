// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Product() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('http://localhost:3002/products');
//       setProducts(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <div className="grid grid-cols-4 gap-4">
//         {products.map((product) => (
//           <div key={product.idproducts} className="border p-4">
//             <h3 className="mt-2 text-lg font-bold">{product.product_name}</h3>
//             <p className="text-gray-500">{product.description}</p>
//             <p className="text-gray-500">Price: ${product.price}</p>
//             <p className="text-gray-500">Stock Quantity: {product.stock_quantity}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Product;

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

  const addToCart = (product) => {
    // Sepete ürün ekleme işlemleri burada gerçekleştirilebilir
    console.log('Sepete Eklendi:', product);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.idproducts} className="border p-4">
            <h3 className="mt-2 text-lg font-bold">{product.product_name}</h3>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-gray-500">Price: ${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-pink-500 text-white px-4 py-2 mt-4 rounded hover:bg-pink-600"
            >
              Sepete Ekle
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
