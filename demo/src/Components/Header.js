import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-pink-200 ${isScrolled ? 'shadow-lg' : ''}`}>
      <nav className="bg-transparent max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-white font-bold text-xl">Logo</a>
            </div>
            {/* Navigation Links */}
            <div className="hidden md:block">
              <ul className="ml-10 flex items-center space-x-4">
                <li><a href="#" className="text-gray-800 hover:text-gray-900">Home</a></li>
                <li><a href="#" className="text-gray-800 hover:text-gray-900">Products</a></li>
                <li><a href="#" className="text-gray-800 hover:text-gray-900">About</a></li>
                <li><a href="#" className="text-gray-800 hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
          </div>
          {/* Admin Button */}
          <div className="hidden md:block">
            <Link
              to="/admin"
              className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Admin
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
