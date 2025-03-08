import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Box,
  InputAdornment,
  IconButton,
  Divider,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { clearError, loginUser } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: "", password: "" });
  const { loading, error, user } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);

        if (decoded.exp * 1000 > Date.now()) {
          navigate("/dashboard");
          return;
        }
      } catch (error) {}
    }
  }, [navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    console.log("user", user);
    if (user) {
      toast.success("Logged In successful!");
      dispatch(clearError());
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    }
  }, [error, user, dispatch]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <ToastContainer position="top-right" autoClose={3000} />
      <Container maxWidth="sm">
        <Paper elevation={3} className="p-8 mx-4">
          <Box className="text-center mb-6">
            <Typography variant="h4" component="h1" className="font-bold">
              Welcome Back
            </Typography>
            <Typography variant="body2" color="textSecondary" className="mt-2">
              Sign in to continue to your account
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              required
              className="mb-4"
              onChange={handleChange}
              value={form.email}
            />

            <TextField
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              required
              className="mb-4"
              onChange={handleChange}
              value={form.password}
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

            <Box className="flex justify-between items-center mb-6">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    color="primary"
                  />
                }
                label={<Typography variant="body2">Remember me</Typography>}
              />
            </Box>

            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              size="large"
              className="mb-4 py-3"
            >
              Login
            </Button>

            <Typography marginTop={4} variant="body2" align="center">
              Don't have an account?{" "}
              <a
                onClick={() => navigate("/register")}
                className="text-blue-600 font-medium"
              >
                Sign up
              </a>
            </Typography>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
