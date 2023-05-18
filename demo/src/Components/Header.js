import React from 'react';

function Header() {
  return (
    <header className="bg-blue-900">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="/" className="text-3xl font-bold text-white">My Website</a>
        <div className="space-x-4">
          <a href="/" className="text-white hover:text-blue-200 transition-colors duration-300">Home</a>
          <a href="/about" className="text-white hover:text-blue-200 transition-colors duration-300">About</a>
          <a href="/contact" className="text-white hover:text-blue-200 transition-colors duration-300">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
