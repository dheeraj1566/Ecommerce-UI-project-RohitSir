import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">E-commerce Site</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-400">Register</Link></li>
            <li><Link to="/login" className="hover:text-gray-400">Login</Link></li>
            <li><Link to="/home" className="hover:text-gray-400">Home</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
