import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative z-10">
      <div className="flex justify-between items-center h-20 px-6 bg-gradient-to-r from-green-800 via-green-500 to-green-300 text-white">
        
        <h1 className="text-xl font-bold text-yellow-300">
          <Link to="/">ShopTesMercurials</Link>
        </h1>

        
        <button
          className="sm:hidden text-yellow-300 text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>

        
        <div className="hidden sm:flex space-x-4">
          <Link
            to="/"
            className="bg-yellow-400 text-green-800 px-4 py-2 rounded-md hover:bg-yellow-500 transition duration-300"
          >
            Accueil
          </Link>
          <Link
            to="/register"
            className="bg-yellow-400 text-green-800 px-4 py-2 rounded-md hover:bg-yellow-500 transition duration-300"
          >
            S'inscrire
          </Link>
          <Link
            to="/login"
            className="bg-yellow-400 text-green-800 px-4 py-2 rounded-md hover:bg-yellow-500 transition duration-300"
          >
            Se connecter
          </Link>
          <Link
            to="/wishlist"
            className="bg-yellow-400 text-green-800 px-4 py-2 rounded-md hover:bg-yellow-500 transition duration-300"
          >
            Wishlist
          </Link>
        </div>
      </div>

      
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-gradient-to-r from-green-800 via-green-500 to-green-300 text-white flex flex-col items-center space-y-4 py-4">
          <Link
            to="/"
            className="bg-yellow-400 text-green-800 px-4 py-2 rounded-md hover:bg-yellow-500 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link
            to="/register"
            className="bg-yellow-400 text-green-800 px-4 py-2 rounded-md hover:bg-yellow-500 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            S'inscrire
          </Link>
          <Link
            to="/login"
            className="bg-yellow-400 text-green-800 px-4 py-2 rounded-md hover:bg-yellow-500 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Se connecter
          </Link>
          <Link
            to="/wishlist"
            className="bg-yellow-400 text-green-800 px-4 py-2 rounded-md hover:bg-yellow-500 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Wishlist
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

