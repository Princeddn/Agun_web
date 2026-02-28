import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { authService } from '../services/auth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadUser = useCallback(async () => {
    const token = localStorage.getItem('access_token');
    if (!token) { setLoading(false); return; }
    try {
      const me = await authService.getMe();
      setUser(me);
    } catch {
      localStorage.removeItem('access_token');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadUser(); }, [loadUser]);

  const login = async (email, password) => {
    // 1. Appel au backend FastAPI ! 
    const data = await authService.login(email, password);

    // 2. On range le précieux token
    localStorage.setItem('access_token', data.access_token);

    // 3. (Gros FIX) Pour le moment, on créé l'utilisateur 'artificiellement' 
    // afin qu'il puisse au moins entrer dans l'application sans que getMe() ne crashe le flux. 
    const loggedUser = { id: data.user_id, email: email };
    setUser(loggedUser);

    return loggedUser;
  };

  const register = async (userData) => {
    const data = await authService.register(userData);
    return data;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
