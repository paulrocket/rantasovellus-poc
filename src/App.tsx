import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App