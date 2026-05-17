import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Calendar, Users, MessageCircle, User } from 'lucide-react';
import { cn } from '../../lib/utils';

const NAV_ITEMS = [
  { to: '/feed',     icon: Home,          label: 'Accueil'   },
  { to: '/events',   icon: Calendar,      label: 'Événements'},
  { to: '/network',  icon: Users,         label: 'Réseau'    },
  { to: '/messages', icon: MessageCircle, label: 'Messages'  },
  { to: '/profile',  icon: User,          label: 'Profil'    },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 h-16 bg-background/95 backdrop-blur-md border-t border-border">
      <ul className="h-full flex items-center justify-around px-2">
        {NAV_ITEMS.map(({ to, icon: Icon, label }) => (
          <li key={to} className="flex-1">
            <NavLink
              to={to}
              className={({ isActive }) =>
                cn(
                  'flex flex-col items-center gap-0.5 py-2 rounded-xl transition-colors w-full',
                  isActive
                    ? 'text-terra'
                    : 'text-brown-400 hover:text-brown-600'
                )
              }
            >
              {({ isActive }) => (
                <>
                  <span className={cn(
                    'w-10 h-7 flex items-center justify-center rounded-xl transition-colors',
                    isActive && 'bg-terra-100'
                  )}>
                    <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
                  </span>
                  <span className={cn(
                    'text-[10px] font-medium leading-none',
                    isActive && 'font-bold'
                  )}>
                    {label}
                  </span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
