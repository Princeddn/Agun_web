import api from './api';

export const authService = {
  async login(email, password) {
    // On envoie un simple objet JSON avec email et password (Comme attendu par FastAPI LoginRequest)
    const { data } = await api.post('/auth/login', { email, password });
    return data;
  },

  async register(userData) {
    const { data } = await api.post('/auth/register', userData);
    return data;
  },

  async getMe() {
    const { data } = await api.get('/users/me');
    return data;
  },

  logout() {
    localStorage.removeItem('access_token');
  },
};
