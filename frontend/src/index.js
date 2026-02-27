// 1. Importe React et ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
// 2. Importe les styles globaux
import './index.css';
import App from './App';

// 3. Monte l'application dans le DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
