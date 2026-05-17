import React from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from '../components/navigation/AppHeader';
import BottomNav from '../components/navigation/BottomNav';

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />

      {/* pt-14 = hauteur du header fixe, pb-16 = hauteur de la BottomNav fixe */}
      <main className="flex-1 overflow-y-auto pt-14 pb-16">
        <Outlet />
      </main>

      <BottomNav />
    </div>
  );
}
