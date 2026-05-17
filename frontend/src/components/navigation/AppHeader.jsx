import React from 'react';
import { Link } from 'react-router-dom';
import { Bell } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function AppHeader() {
  const { user } = useAuth();

  const initials = user?.full_name
    ? user.full_name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
    : user?.email?.[0]?.toUpperCase() ?? '?';

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-14 bg-background/90 backdrop-blur-md border-b border-border flex items-center px-4">
      <Link to="/feed" className="font-display font-black text-xl text-terra tracking-tight flex-1">
        AGUN
      </Link>

      <div className="flex items-center gap-3">
        <button
          className="relative w-9 h-9 rounded-full flex items-center justify-center text-brown-400 hover:bg-cream-200 transition-colors"
          aria-label="Notifications"
        >
          <Bell size={20} />
          {/* Badge notifications — à brancher dynamiquement plus tard */}
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-terra" />
        </button>

        <Link
          to="/profile"
          className="w-9 h-9 rounded-full bg-terra-200 flex items-center justify-center text-terra font-bold text-sm shrink-0 hover:ring-2 hover:ring-terra/40 transition-all"
          aria-label="Mon profil"
        >
          {initials}
        </Link>
      </div>
    </header>
  );
}
