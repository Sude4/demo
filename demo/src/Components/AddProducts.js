// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     getProducts();
//   }, []);

//   const getProducts = async () => {
//     try {
//       const response = await axios.get('/products');
//       setProducts(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`/products?search=${searchQuery}`);
//       setProducts(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleFilter = async (filterValue) => {
//     try {
//       const response = await axios.get(`/products?filter=${filterValue}`);
//       setProducts(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <header>
//         <h1>Hoş Geldiniz!</h1>
//         <div>
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Ara..."
//           />
//           <button onClick={handleSearch}>Ara</button>
//         </div>
//         <div>
//           <button onClick={() => handleFilter('filterValue1')}>
//             Filtre 1
//           </button>
//           <button onClick={() => handleFilter('filterValue2')}>
//             Filtre 2
//           </button>
//           {/* Add more filter buttons as needed */}
//         </div>
//       </header>
//       <h2>Ürünler</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.product_id}>
//             <Link to={`/products/${product.product_id}`}>
//               {product.product_name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newProduct, setNewProduct] = useState({
    product_name: '',
    description: '',
    price: 0,
    stock_quantity: 0,
  });

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get('/products');
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/products?search=${searchQuery}`);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilter = async (filterValue) => {
    try {
      const response = await axios.get(`/products?filter=${filterValue}`);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddProduct = async () => {
    try {
      const response = await axios.post('/products', newProduct);
      console.log(response.data); // Handle the response as needed
      // Clear the form after successful submission
      setNewProduct({
        product_name: '',
        description: '',
        price: 0,
        stock_quantity: 0,
      });
      // Refresh the product list
      getProducts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <header>
        <h1>Hoş Geldiniz!</h1>
        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ara..."
          />
          <button onClick={handleSearch}>Ara</button>
        </div>
        <div>
          <button onClick={() => handleFilter('filterValue1')}>
            Filtre 1
          </button>
          <button onClick={() => handleFilter('filterValue2')}>
            Filtre 2
          </button>
          {/* Add more filter buttons as needed */}
        </div>
       
      </header>
      <h2>Ürünler</h2>
      <ul>
        {products.map((product) => (
          <li key={product.product_id}>
            <Link to={`/products/${product.product_id}`}>
              {product.product_name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Add Product Form */}
      <h2>Add Product</h2>
      <form>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            name="product_name"
            value={newProduct.product_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
                   <input
            type="text"
            name="description"
            value={newProduct.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Stock Quantity:</label>
          <input
            type="number"
            name="stock_quantity"
            value={newProduct.stock_quantity}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={handleAddProduct}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
