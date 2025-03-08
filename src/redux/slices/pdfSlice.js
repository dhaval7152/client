import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import pdfService from "../../services/pdfService";

export const generatePDF = createAsyncThunk(
  "pdf/generate",
  async ({ selectedProducts, user }, thunkAPI) => {
    try {
      return await pdfService.generatePDF({ selectedProducts, user });
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "An unexpected error occurred"
      );
    }
  }
);

const pdfSlice = createSlice({
  name: "pdf",
  initialState: { filePath: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(generatePDF.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generatePDF.fulfilled, (state, action) => {
        state.loading = false;
        state.filePath = action.payload.filePath;
      })
      .addCase(generatePDF.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to generate PDF";
      });
  },
});

export default pdfSlice.reducer;
