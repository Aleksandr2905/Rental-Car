import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { requestCatalogCar } from '../../components/redux/thunks';
import { CarList } from '../../components/CarList/CarList';

export const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestCatalogCar());
  }, [dispatch]);

  return (
    <div>
      <CarList />
    </div>
  );
};
