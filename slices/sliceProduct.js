import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postProduct = createAsyncThunk('product/postProduct', async (productData) => {
  const response = await axios.post('https://6715c78333bc2bfe40bb1a53.mockapi.io/bikes', productData);
  return response.data;
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(postProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products.push(action.payload);
      })
      .addCase(postProduct.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default productSlice.reducer;