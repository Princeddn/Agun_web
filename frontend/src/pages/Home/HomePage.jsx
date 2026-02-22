import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function HomePage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <nav className="flex items-center justify-between px-8 py-4 border-b bg-white shadow-sm">
        <span className="text-xl font-bold text-indigo-600">Agun Web</span>
        <div className="flex gap-3">
          {user ? (
            <Link
              to="/dashboard"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link to="/login" className="px-4 py-2 text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition">
                Connexion
              </Link>
              <Link to="/register" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                Inscription
              </Link>
            </>
          )}
        </div>
      </nav>

      <main className="flex flex-col items-center justify-center px-4 pt-24 pb-16 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Bienvenue sur <span className="text-indigo-600">Agun Web</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mb-8">
          Une application web moderne avec FastAPI, React et Supabase.
        </p>
        <div className="flex gap-4">
          {user ? (
            <Link to="/dashboard" className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-lg hover:bg-indigo-700 transition shadow">
              Aller au dashboard →
            </Link>
          ) : (
            <Link to="/register" className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-lg hover:bg-indigo-700 transition shadow">
              Commencer →
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}
