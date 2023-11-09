import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from '../../components/redux/selectors';
import { requestCatalogCar } from '../../components/redux/thunks';

export const Catalog = () => {
  const cars = useSelector(selectCars);
  console.log(cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestCatalogCar());
  }, [dispatch]);

  return <div>Catalog</div>;
};
