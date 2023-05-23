// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.pageYOffset > 0) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <header className={`bg-pink-200 ${isScrolled ? 'shadow-lg' : ''}`}>
//       <nav className="bg-transparent max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             {/* Logo */}
//             <div className="flex-shrink-0">
//               <a href="#" className="text-white font-bold text-xl">Logo</a>
//             </div>
//             {/* Navigation Links */}
//             <div className="hidden md:block">
//               <ul className="ml-10 flex items-center space-x-4">
//                 <li><a href="#" className="text-gray-800 hover:text-gray-900">Home</a></li>
//                 <li><a href="#" className="text-gray-800 hover:text-gray-900">Products</a></li>
//                 <li><a href="#" className="text-gray-800 hover:text-gray-900">About</a></li>
//                 <li><a href="#" className="text-gray-800 hover:text-gray-900">Contact</a></li>
//               </ul>
//             </div>
//           </div>
//           {/* Admin Button */}
//           <div className="hidden md:block">
//             <Link
//               to="/admin"
//               className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Admin
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

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

  const handleCartClick = () => {
    // Sepet sayfasına yönlendirme işlemini gerçekleştir
    // ...
  };

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
          {/* Mobile Menu Button */}
          <div className="hidden md:block">
            <a href="#" className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Login</a>
            <a href="#" className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Sign Up</a>
          </div>
          {/* Cart Icon */}
          <div className="relative">
            <Link to="/cart" onClick={handleCartClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800 hover:text-gray-900 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19c0 1.657 1.343 3 3 3s3-1.343 3-3"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2 5h20l-2 14H4l-2-14zm2 0h16M9 9a3 3 0 100-6 3 3 0 000 6z"
                />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
