import axios from "axios";

const API_URL = `${process.env.REACT_APP_BACKEND_API_URL}/api/auth/`;

const register = async (userData) => {
  const res = await axios.post(API_URL + "register", userData);
  return res.data;
};

const login = async (userData) => {
  const res = await axios.post(API_URL + "login", userData);
  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
  }
  return res.data;
};

const getProfile = async () => {
  const token = localStorage.getItem("token");
  const res = await axios.get(API_URL + "profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export default { register, login, getProfile };
