import React, { useState, useEffect } from 'react';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/products?populate=image')
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  return (
    <div className="p-8 bg-gradient-to-b from-emerald-50 to-green-700 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-yellow-400">
        Nos Crampons 
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-emerald-500 hover:-translate-y-2 transform transition-all duration-300"
          >
            {product.image?.url && (
              <div className="overflow-hidden group">
                <img
                  src={`http://localhost:1337${product.image.url}`}
                  alt={product.nom}
                  className="w-full h-13 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-5">{product.nom}</h2>
              <p className="text-gray-700 text-s mb-5 line-clamp-2">{product.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-black  font-bold text-lg">€{product.Prix}</p>
                <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {product.Marques}
                </span>
              </div>
              <button className="mt-6 w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition-colors duration-300">
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
