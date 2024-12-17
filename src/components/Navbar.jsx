import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 px-6 bg-gradient-to-r from-green-800 via-green-500 to-green-300 text-white">
      <h1 className="text-xl font-bold text-yellow-300">
        <Link to="/">ShopTesMercurials</Link>
      </h1>

      
      <div className="flex space-x-4">
        <Link to="/"className="bg-yellow-400 text-green-800 px-4 py-2 rounded-md hover:bg-yellow-500 transition duration-300"
        >
          Accueil
        </Link>
        <Link to="/register"className="bg-yellow-400 text-green-800 px-4 py-2 rounded-md hover:bg-yellow-500 transition duration-300"
        >
          S'inscrire
        </Link>
        <Link to="/login"className="bg-yellow-400 text-green-800 px-4 py-2 rounded-md hover:bg-yellow-500 transition duration-300"
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
  );
};

export default Navbar;
