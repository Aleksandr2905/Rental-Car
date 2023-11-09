import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRequestCatalogCar } from '../services/api';

export const requestCatalogCar = createAsyncThunk(
  'advert/requestCatalog',
  async (_, thunkAPI) => {
    try {
      const response = await fetchRequestCatalogCar();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
