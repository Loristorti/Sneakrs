import React, { useState, useEffect } from 'react';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [inputValue, setInputValue] = useState('');

  
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(savedWishlist);
  }, []);

  
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  
  const addItem = () => {
    if (inputValue.trim() !== '') {
      setWishlist([...wishlist, inputValue]);
      setInputValue('');
    }
  };

  
  const removeItem = (index) => {
    const newWishlist = wishlist.filter((_, i) => i !== index);
    setWishlist(newWishlist);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-800 via-green-500 to-green-300">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-4">Ma Wishlist</h2>

        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Ajouter un article..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={addItem}
            className="bg-yellow-400 text-green-800 px-4 py-2 rounded-r-md hover:bg-yellow-500 transition duration-300"
          >
            Ajouter
          </button>
        </div>

        {wishlist.length > 0 ? (
          <ul className="space-y-2">
            {wishlist.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-2 bg-gray-100 rounded-md shadow-sm"
              >
                <span>{item}</span>
                <button
                  onClick={() => removeItem(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition duration-300"
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">Votre wishlist est vide.</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
