import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AppLayout from '../layouts/AppLayout';

import HomePage from '../pages/Home/HomePage';
import LoginPage from '../pages/Auth/LoginPage';
import RegisterPage from '../pages/Auth/RegisterPage';
import FeedPage from '../pages/Feed/FeedPage';
import EventsPage from '../pages/Events/EventsPage';
import NetworkPage from '../pages/Network/NetworkPage';
import MessagesPage from '../pages/Messages/MessagesPage';
import ProfilePage from '../pages/Profile/ProfilePage';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Page marketing — layout propre */}
      <Route path="/" element={<HomePage />} />

      {/* Auth — pas de nav */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* App — authentification requise + layout partagé */}
      <Route element={<PrivateRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/feed"     element={<FeedPage />} />
          <Route path="/events"   element={<EventsPage />} />
          <Route path="/network"  element={<NetworkPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/profile"  element={<ProfilePage />} />
          {/* Ancien /dashboard → redirige vers le feed */}
          <Route path="/dashboard" element={<Navigate to="/feed" replace />} />
        </Route>
      </Route>

      {/* Route inconnue → accueil */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
