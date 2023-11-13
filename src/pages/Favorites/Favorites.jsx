import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/selectors';
import { CarsList } from '../../components/CarList/CarList';

export const Favorites = () => {
  const { favoriteCars } = useSelector(selectFavorite);

  return (
    <>
      <h1>Your Favorite Cars</h1>
      {favoriteCars.lenght > 0 ? (
        <CarsList carsArr={favoriteCars} />
      ) : (
        <h2>Not Favorite Cars</h2>
      )}
    </>
  );
};
