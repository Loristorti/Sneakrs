import React, { useState, useEffect } from 'react';

function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); 
  const [filteredProducts, setFilteredProducts] = useState([]); 

  // Récupérer les produits depuis l'API
  useEffect(() => {
    fetch('http://localhost:1337/api/products?populate=image')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
        setFilteredProducts(data.data); 
      });
  }, []);

  
  useEffect(() => {
    const results = products.filter((product) =>
      product.nom.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm, products]);

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-b from-emerald-50 to-green-700 min-h-screen">
      
      <div className="flex justify-center items-center mb-6 sm:mb-10">
        <input
          type="text"
          placeholder="Recherchez un produit..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700 shadow-md"
        />
      </div>

      
      <h1 className="text-2xl sm:text-4xl font-extrabold text-center mb-6 sm:mb-10 text-yellow-400">
        Nos Crampons
      </h1>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-emerald-500 hover:-translate-y-2 transform transition-all duration-300"
          >
            {product.image?.url && (
              <div className="overflow-hidden group">
                <img
                  src={`http://localhost:1337${product.image.url}`}
                  alt={product.nom}
                  className="w-full sm:h-100 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-6 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-5">
                {product.nom}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-5 line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-black font-bold text-sm sm:text-lg">€{product.Prix}</p>
                <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {product.Marques}
                </span>
              </div>
              <button className="mt-4 sm:mt-6 w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition-colors duration-300">
                Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
