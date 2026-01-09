import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async () => {
    const res = await axios.get("https://dummyjson.com/products");
    return res.data.products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(
        (p) => p.id === action.payload.id
      );
      state.products[index] = action.payload;
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (p) => p.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { addProduct, updateProduct, deleteProduct } =
  productSlice.actions;
export default productSlice.reducer;
