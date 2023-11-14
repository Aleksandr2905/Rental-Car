import { createSlice } from '@reduxjs/toolkit';
import { requestCatalogCar, requestFilters, requestFirstPage } from './thunks';

const initialState = {
  cars: [],
  filterCars: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(requestFirstPage.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestFirstPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload;
        state.error = null;
      })
      .addCase(requestFirstPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(requestCatalogCar.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestCatalogCar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = [...state.cars, ...action.payload];
        state.error = null;
      })
      .addCase(requestCatalogCar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(requestFilters.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestFilters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload;
        state.error = null;
      })
      .addCase(requestFilters.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
