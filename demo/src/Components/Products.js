// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('/products');
//       setProducts(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <div className="grid grid-cols-4 gap-4">
//         {products.map((product) => (
//           <div key={product.id} className="border p-4">
//             <img src={product.image} alt={product.name} className="w-full" />
//             <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
//             <p className="text-gray-500">{product.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;
