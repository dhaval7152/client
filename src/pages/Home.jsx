import React, { useEffect, useState } from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DownloadIcon from "@mui/icons-material/Download";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import { generatePDF } from "../redux/slices/pdfSlice";
import { Button } from "@mui/material";
import Navbar from "../components/Navbar";
import { getProfile } from "../redux/slices/authSlice";
import { toast, ToastContainer } from "react-toastify";

const Home = () => {
  const images = ["./tiles1.jpg", "./tiles2.jpg", "./tiles3.jpg"];
  const dispatch = useDispatch();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const { products, loading } = useSelector((state) => state.products);
  const { filePath } = useSelector((state) => state.pdf);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const handleGeneratePDF = () => {
    if (selectedProducts.length >= 10) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch(generatePDF({ selectedProducts, user }));
    } else {
      toast("Select at least 10 products");
    }
  };
  const downloadPDF = (filePath) => {
    const baseURL = process.env.REACT_APP_BACKEND_API_URL;
    const fullURL = `${baseURL}${filePath}`;

    const link = document.createElement("a");
    link.href = fullURL;
    link.setAttribute("download", filePath.split("/").pop());
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSelect = (product) => {
    setSelectedProducts((prev) =>
      prev.includes(product)
        ? prev.filter((p) => p !== product)
        : [...prev, product]
    );
  };

  return (
    <>
      <Navbar />
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="max-w-6xl mx-auto p-4">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-96 object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>

        <h2 className="text-lg font-semibold text-gray-700 mt-6">
          Selected Products:{" "}
          <span className="text-blue-600">{selectedProducts.length}</span>
        </h2>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGeneratePDF}
          sx={{ marginRight: "10px" }}
          startIcon={<PictureAsPdfIcon />}
        >
          Generate PDF
        </Button>
        {filePath && (
          // <a href={`${filePath}`} download>
          //   Download PDF
          // </a>
          <Button
            variant="contained"
            color="success"
            onClick={() => downloadPDF(filePath)}
            startIcon={<DownloadIcon />}
          >
            Download PDF
          </Button>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg shadow-lg p-4">
              <img
                src={product.product_image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-bold mt-2">{product.product_name}</h3>
              <p className="text-gray-600">Size: {product.size}</p>
              <p className="text-gray-600">thickness: {product.thickness}</p>
              <p className="text-gray-600">Finish: {product.finish_type}</p>
              <button
                className={`mt-3 px-4 py-2 w-full rounded-lg font-semibold transition ${
                  selectedProducts.includes(product)
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
                onClick={() => handleSelect(product)}
              >
                {selectedProducts.includes(product) ? "Deselect" : "Select"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
