import React from 'react';
import { User, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const initials = user?.full_name
    ? user.full_name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
    : user?.email?.[0]?.toUpperCase() ?? '?';

  const handleLogout = () => {
    logout();
    toast.success('À bientôt !');
    navigate('/');
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-6 space-y-4">
      <h1 className="font-display font-bold text-xl text-foreground">Mon profil</h1>

      {/* Avatar + infos */}
      <div className="rounded-2xl border border-border bg-card p-6 flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-terra-200 flex items-center justify-center text-terra font-bold text-xl shrink-0">
          {initials}
        </div>
        <div className="min-w-0">
          <p className="font-display font-bold text-foreground truncate">
            {user?.full_name || 'Membre Agun'}
          </p>
          <p className="text-sm text-muted-foreground truncate">{user?.email}</p>
          <span className="inline-block mt-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-forest-100 text-forest">
            {user?.role || 'Membre'}
          </span>
        </div>
      </div>

      {/* Placeholder profil enrichi */}
      <div className="rounded-2xl border border-border bg-card p-6 space-y-2">
        <div className="flex items-center gap-2 mb-3">
          <User size={16} className="text-terra" />
          <span className="font-semibold text-sm text-foreground">Infos de profil</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Origines, ville, communauté — le profil enrichi arrive bientôt.
        </p>
      </div>

      {/* Déconnexion */}
      <button
        onClick={handleLogout}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-border text-sm font-semibold text-muted-foreground hover:text-destructive hover:border-destructive/30 hover:bg-destructive/5 transition-colors"
      >
        <LogOut size={16} />
        Se déconnecter
      </button>
    </div>
  );
}
