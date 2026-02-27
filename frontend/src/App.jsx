import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  // --- NOTRE PETIT TEST BACKEND ---
  const [messageBackend, setMessageBackend] = useState("Le backend cherche...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/test")
      .then(res => res.json())
      .then(data => {
        setMessageBackend(data.message);
      })
      .catch(err => console.log("Erreur API:", err));
  }, []);
  // --------------------------------

  return (
    <BrowserRouter>
      <div style={{ background: '#333', color: 'white', padding: '10px', textAlign: 'center' }}>
        Message du Backend : {messageBackend}
      </div>
      <AuthProvider>
        <AppRoutes />
        <Toaster position="top-right" />
      </AuthProvider>
    </BrowserRouter>
  );
}
