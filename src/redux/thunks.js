import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRequestCatalogCar, fetchRequestFirst } from '../services/api';

export const requestFirstPage = createAsyncThunk(
  'advert/requestFirstPage',
  async (_, thunkAPI) => {
    try {
      const response = await fetchRequestFirst();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
