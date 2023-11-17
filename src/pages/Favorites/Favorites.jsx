import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/selectors';
import { CarList } from '../../components/CarList/CarList';
import { FavoriteWrap } from './Favorites.styled';
import { NavLink } from 'react-router-dom';

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
          <h2>
            At the moment, you don't have any favorite cars. To select cars,
            please go to the page <NavLink to="/catalog">Catalog</NavLink>
          </h2>
        )}
      </FavoriteWrap>
    </>
  );
};

export default Favorites;
