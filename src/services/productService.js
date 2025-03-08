import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL}/api/products`;

const getProducts = async () => {
  const res = await axios.get(API_URL + "/getProducts", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return res.data;
};

export default { getProducts };
