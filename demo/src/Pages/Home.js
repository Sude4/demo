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
   
      <div>
        <div className="container mx-auto">
          <ImageBanner />
        </div>
        <Product />
        <Reviews />
    
      </div>
    </div>
  );
}

export default Home;
