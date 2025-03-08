import axios from "axios";

const API_URL = `${process.env.REACT_APP_BACKEND_API_URL}/api/pdf/`;

const generatePDF = async ({ selectedProducts, user }) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(
    API_URL + "generate",
    {
      products: selectedProducts,
      user: user,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res.data;
};

export default { generatePDF };
