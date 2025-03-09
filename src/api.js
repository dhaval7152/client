import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;
const token = localStorage.getItem("token");

export const dowloadPdf = async (fileId) => {
  const fullURL = `${baseURL}/api/pdf/dowloadPdf/${fileId}`;

  const response = await axios.get(fullURL, {
    responseType: "blob",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
