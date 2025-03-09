import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;
const getToken = () => localStorage.getItem("token");

export const dowloadPdf = async (fileId) => {
  let token = getToken();
  const fullURL = `${baseURL}/api/pdf/dowloadPdf/${fileId}`;
  if (!token) return;
  const response = await axios.get(fullURL, {
    responseType: "blob",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
