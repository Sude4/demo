import React, { useState } from 'react';

function Favorites() {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const addToFavorites = (product) => {
    setFavoriteProducts([...favoriteProducts, product]);
  };

  const removeFromFavorites = (productId) => {
    const updatedFavorites = favoriteProducts.filter((product) => product.id !== productId);
    setFavoriteProducts(updatedFavorites);
  };

  return (
    <div>
      <h2>Favori Ürünler</h2>
      {favoriteProducts.length === 0 ? (
        <p>Henüz favori ürününüz yok.</p>
      ) : (
        <ul>
          {favoriteProducts.map((product) => (
            <li key={product.id}>
              {product.name}
              <button onClick={() => removeFromFavorites(product.id)}>Favorilerden Çıkar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;
