import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const register = async (userData) =>
  axios.post(`${API_URL}/api/auth/register`, userData);
export const login = async (userData) =>
  axios.post(`${API_URL}/login`, userData);
export const getProfile = async (token) =>
  axios.get(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
