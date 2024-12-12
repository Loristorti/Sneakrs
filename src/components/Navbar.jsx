import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex justify-between items-center h-20 px-6 bg-pink-800 text-white'>
      {/* Logo */}
      <h1 className='text-xl font-bold text-blue-500'>Shop tes Crampons</h1>

      {/* Menu Button */}
      <div className='relative'>
        <button
          onClick={toggleMenu}
          className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none'
        >
              <Menu />
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <ul className='absolute mt-2 right-0 w-40 bg-gray-700 text-white rounded-md shadow-lg'>
            <li className='p-2 hover:bg-gray-600 cursor-pointer'>Nike</li>
            <li className='p-2 hover:bg-gray-600 cursor-pointer'>Puma</li>
            <li className='p-2 hover:bg-gray-600 cursor-pointer'>Adidas</li>
            <li className='p-2 hover:bg-gray-600 cursor-pointer'>New Balance</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
