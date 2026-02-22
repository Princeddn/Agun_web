import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Déconnecté');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <span className="text-xl font-bold text-indigo-600">Agun Web</span>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-sm text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition"
        >
          Se déconnecter
        </button>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Bonjour, {user?.full_name || user?.email} 👋
          </h1>
          <p className="text-gray-500 mb-8">Bienvenue sur votre tableau de bord.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Email', value: user?.email },
              { label: 'Rôle', value: user?.role || 'Utilisateur' },
              { label: 'Statut', value: user?.is_active ? 'Actif' : 'Inactif' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-indigo-50 rounded-xl p-4">
                <p className="text-xs text-indigo-400 uppercase tracking-wide">{label}</p>
                <p className="text-gray-800 font-medium mt-1">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
