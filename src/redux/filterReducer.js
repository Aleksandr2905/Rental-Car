import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'filter',
  storage,
};

const initialState = {
  make: '',
  price: '',
  mileageMin: '',
  mileageMax: '',
};

export const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, { payload }) {
      state.make = payload.make;
      state.price = payload.price;
      state.mileageMin = payload.mileageMin;
      state.mileageMax = payload.mileageMax;
    },
  },
});
export const { setFilter } = filtersSlice.actions;

export const filtersReducer = persistReducer(
  persistConfig,
  filtersSlice.reducer
);
