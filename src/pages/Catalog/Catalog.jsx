import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { requestFirstPage } from '../../redux/thunks';
import { CarList } from '../../components/CarList/CarList';

export const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestFirstPage());
  }, [dispatch]);

  return (
    <div>
      <CarList />
    </div>
  );
};
