import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex justify-between items-center h-20 px-6 bg-gradient-to-r from-green-800 via-green-500 to-green-300 text-white'>
      {/* Logo */}
      <h1 className='text-xl font-bold text-yellow-300'>ShopTesMercurials </h1>

      {/* Menu Button */}
      <div className='relative'>
        <button
          onClick={toggleMenu}
          className='bg-yellow-300 text-green-500 px-4 py-2 rounded-md hover:bg-yellow-400 focus:outline-none transition-colors duration-300'
        >
          <Menu />
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <ul className='absolute mt-2 right-0 w-40 bg-green-400 text-white rounded-md shadow-lg'>
            <li className='p-2 hover:bg-yellow-400 cursor-pointer'>Nike</li>
            <li className='p-2 hover:bg-yellow-400 cursor-pointer'>Puma</li>
            <li className='p-2 hover:bg-yellow-400 cursor-pointer'>Adidas</li>
            <li className='p-2 hover:bg-yellow-400 cursor-pointer'>New Balance</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
