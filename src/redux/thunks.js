import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchRequestCarById,
  fetchRequestCatalogCar,
  fetchRequestFilters,
  fetchRequestFirst,
} from '../services/api';

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

export const requestCarById = createAsyncThunk(
  'advert/requestCarById',
  async (id, thunkAPI) => {
    try {
      const response = await fetchRequestCarById(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestFilters = createAsyncThunk(
  'advert/requestFilters',
  async (_, thunkAPI) => {
    try {
      const response = await fetchRequestFilters();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
