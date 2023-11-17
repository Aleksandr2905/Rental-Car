import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/selectors';
import { CarList } from '../../components/CarList/CarList';
import { FavoriteWrap } from './Favorites.styled';

const Favorites = () => {
  const { favoriteCars } = useSelector(selectFavorite);
  return (
    <>
      <FavoriteWrap>
        {favoriteCars.length > 0 ? (
          <>
            <h1>Your Favorite Cars</h1>
            <CarList carsArr={favoriteCars} />
          </>
        ) : (
          <h2>Not Favorite Cars</h2>
        )}
      </FavoriteWrap>
    </>
  );
};

export default Favorites;
