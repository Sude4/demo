import React from 'react';

function Hero() {
  return (
    <section className="bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl mb-4">Welcome to My Home Page</h2>
        <p className="text-xl text-gray-700 mb-6">
          Explore and discover exciting content, beautiful designs, and useful information.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;
