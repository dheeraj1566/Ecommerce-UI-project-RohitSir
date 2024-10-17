import React, { useState, useEffect } from 'react';
import Header from './Header';  
import Footer from './Footer'; 

function Home() {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetch('https://ecommerce-api-8ga2.onrender.com/api/Product')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json(); 
      })
      .then((data) => {
        setProducts(data); 
        setLoading(false);  
      })
      .catch((err) => {
        setError(err.message); 
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-xl font-bold">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-xl text-red-600 font-bold">Error: {error}</div>;
  }

  return (
    <div>
      
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product._id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={product.url} 
                alt={product.name} 
                className="w-full h-48 object-cover mb-4 rounded-t-lg" 
              />
              <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
              <p className="text-lg text-gray-600 mb-2">Price: ${product.price}</p>
              <p className="text-gray-700">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer /> 
    </div>
  );
}

export default Home;
