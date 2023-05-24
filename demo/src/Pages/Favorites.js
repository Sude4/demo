import React from 'react';

function Favorites({ favorites }) {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Favorites</h2>
      {favorites && favorites.length === 0 ? (
        <p>No favorite products yet.</p>
      ) : (
        <ul>
          {favorites.map((product) => (
            <li key={product.id}>{product.product_name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;
