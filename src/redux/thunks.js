import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRequestCatalogCar } from '../services/api';

export const requestCatalogCar = createAsyncThunk(
  'advert/requestCatalog',
  async (page, thunkAPI) => {
    try {
      const response = await fetchRequestCatalogCar(page);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
