import api from './api';

export const authService = {
  async login(email, password) {
    const params = new URLSearchParams({ username: email, password });
    const { data } = await api.post('/auth/login', params, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    return data;
  },

  async register(email, password, fullName) {
    const { data } = await api.post('/auth/register', {
      email,
      password,
      full_name: fullName,
    });
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
