import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Navigation />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App