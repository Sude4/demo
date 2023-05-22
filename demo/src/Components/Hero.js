import React from 'react';
import resim1 from '../images/resim1.png';
function Hero() {
  return (
    <section className="min-h-screen bg-pink-50 flex items-center justify-center">
    <div className="max-w-7xl mx-auto p-8 flex items-center">
      <div className="w-1/2 pr-8">
        <h2 className="text-4xl text-pink-900 mb-4">Welcome to My Home Page</h2>
        <p className="text-xl rainbow-text mb-6">Explore and discover exciting content, beautiful designs, and useful information.</p>
        <button className="flower-button">Love Yourself</button>
      </div>
      <div className="h-full py-2 pr-4 ml-8">
        <img src={resim1} alt="Resim Açıklaması" className="w-full h-auto object-cover rounded-lg" />
      </div>
    </div>
  </section>
  );
}

export default Hero;
