import React, { useEffect, useState } from "react";
import validator from "validator";
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box,
  Container,
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { clearError, registerUser } from "../redux/slices/authSlice"; // Assuming you have this action creator
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const { loading, message, error, user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }

    if (message) {
      toast.success(message);
      dispatch(clearError());
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  }, [error, message, dispatch]);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <ToastContainer position="top-right" autoClose={3000} />
      <Container maxWidth="sm">
        <Paper elevation={3} className="p-8 mx-4">
          <Box className="text-center mb-6">
            <Typography variant="h4" component="h1" className="font-bold">
              Create an Account
            </Typography>
            <Typography variant="body2" color="textSecondary" className="mt-2">
              Sign up and start your journey with us
            </Typography>
          </Box>

          <Box>
            <form onSubmit={handleSubmit} className="mb-6">
              <TextField
                label="Full Name"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
                className="mb-4"
              />

              <TextField
                label="Email Address"
                variant="outlined"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
                className="mb-4"
              />

              <TextField
                label="Mobile Number"
                variant="outlined"
                name="mobile"
                value={formData.mobile}
                onChange={(e) => {
                  const value = e.target.value.slice(0, 10);
                  setFormData((prev) => ({
                    ...prev,
                    mobile: value,
                  }));
                }}
                fullWidth
                required
                className="mb-4"
                error={
                  formData.mobile.length > 0 &&
                  !validator.isMobilePhone(formData.mobile, "en-IN")
                }
                helperText={
                  formData.mobile.length > 0 &&
                  !validator.isMobilePhone(formData.mobile, "en-IN")
                    ? "Please enter a valid mobile number"
                    : ""
                }
              />

              <TextField
                label="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                required
                className="mb-6"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                className="mb-4 py-3"
              >
                Register
              </Button>

              <Box className="flex items-center my-6">
                <Divider className="flex-grow" />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className="mx-4"
                >
                  OR
                </Typography>
                <Divider className="flex-grow" />
              </Box>

              <Typography variant="body2" align="center">
                Already have an account?{" "}
                <a
                  onClick={() => navigate("/login")}
                  className="text-blue-600 font-medium"
                >
                  Sign in
                </a>
              </Typography>
            </form>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default RegisterPage;
