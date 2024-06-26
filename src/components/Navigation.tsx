import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BuildingStorefrontIcon, HomeIcon, } from '@heroicons/react/24/outline';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md">
      <ul className="flex justify-around md:justify-start">
        <li className={`flex items-center justify-center flex-grow ${location.pathname === '/' ? 'text-blue-500 border' : ''}`}>
          <Link to="/" className="flex items-center">
            <HomeIcon className="h-6 w-6" />
            <span className="hidden md:inline">Home</span>
          </Link>
        </li>
        <li className={`flex items-center justify-center flex-grow  ${location.pathname === '/menu' ? 'text-blue-500 border' : ''}`}>
          <Link to="/menu" className="flex items-center">
            <BuildingStorefrontIcon className="h-6 w-6" />
            <span className="hidden md:inline">Menu</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
