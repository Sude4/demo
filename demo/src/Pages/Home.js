import React from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import ImageBanner from '../Components/ImageBanner';
import Product from '../Components/Product';
import Reviews from '../Components/Reviews';
import Favorites from './Favorites';

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="hero-content">
        {/* Content for the hero section */}
      </div>
      <div>
        <div className="container mx-auto">
          <ImageBanner />
        </div>
        <Product></Product>
        <Reviews></Reviews>
        <Favorites></Favorites> {/* Eklediğimiz favori bileşeni */}
      </div>
      {/* Add other components or content */}
    </div>
  );
}

export default Home;
