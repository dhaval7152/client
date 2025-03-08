import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, logout } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded-full text-3xl font-bold">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <h2 className="mt-4 text-2xl font-semibold text-gray-800">
            {user?.name}
          </h2>
          <p className="text-gray-600">{user?.email}</p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Full Name:</span>
            <span className="text-gray-800 font-medium">{user?.name}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Email:</span>
            <span className="text-gray-800 font-medium">{user?.email}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Mobile:</span>
            <span className="text-gray-800 font-medium">{user?.mobile}</span>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            onClick={() => {
              dispatch(logout());
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
