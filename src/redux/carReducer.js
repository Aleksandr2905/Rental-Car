import { createSlice } from '@reduxjs/toolkit';
import { requestCatalogCar } from './thunks';

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(requestCatalogCar.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestCatalogCar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload;
        state.error = null;
      })
      .addCase(requestCatalogCar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
