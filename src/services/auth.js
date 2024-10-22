import axios from 'axios'; 
const apiUrl = import.meta.env.VITE_API_URL;
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${apiUrl}/auth/register`, userData);
    return response.data; 
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Registration failed');
    } else {
      throw new Error('An error occurred while registering');
    }
  }
};
export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${apiUrl}/auth/login`, loginData);
    const { token } = response.data;
    localStorage.setItem('token', token);
    return response.data; 
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Login failed');
    } else {
      throw new Error('An error occurred while logging in');
    }
  }
};
export const refreshToken = async (refreshToken) => {
    const response = await axios.post('/api/refresh-token', { refreshToken });
    const { token } = response.data;
    localStorage.setItem('token', token); // Cập nhật token mới
    return response.data;
};
export const logoutUser = () => {
    localStorage.removeItem('token');
};
export const getUserInfo = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get('/api/user-info', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};