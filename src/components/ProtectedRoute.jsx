import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.warn("No token found. Redirecting to login.");
      setIsAuthenticated(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);

      if (decoded.exp * 1000 < Date.now()) {
        console.warn("Token expired. Redirecting to login.");
        localStorage.removeItem("accessToken");
        setIsAuthenticated(false);
        return;
      }

      fetch(`${process.env.REACT_APP_API_URL}/api/auth/verify-token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data.valid) {
            console.warn("Invalid token detected. Redirecting to login.");
            localStorage.removeItem("accessToken");
            setIsAuthenticated(false);
          } else {
            setIsAuthenticated(true);
          }
        })
        .catch((error) => {
          console.error("Token verification failed:", error);
          setIsAuthenticated(false);
        });
    } catch (error) {
      console.error("Invalid token format:", error);
      localStorage.removeItem("accessToken");
      setIsAuthenticated(false);
    }
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="flex justify-center items-center h-screen text-lg">
        Checking Authentication...
      </div>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
