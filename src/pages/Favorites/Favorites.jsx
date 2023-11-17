import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/selectors';
import { CarList } from '../../components/CarList/CarList';
import { FavoriteText, FavoriteTitle, FavoriteWrap } from './Favorites.styled';
import BtnToCatalog from '../../components/BtnToCatalog/BtnToCatalog';
import noCars from '../../images/favorites-not-car.png';

const Favorites = () => {
  const { favoriteCars } = useSelector(selectFavorite);
  return (
    <>
      {favoriteCars.length > 0 ? (
        <FavoriteWrap>
          <FavoriteTitle>Your Favorite Cars</FavoriteTitle>
          <CarList carsArr={favoriteCars} />
        </FavoriteWrap>
      ) : (
        <FavoriteWrap>
          <FavoriteText>
            At the moment, you don't have any favorite cars. To select cars,
            please go to the page
          </FavoriteText>
          <BtnToCatalog text="Catalog" />
          <img src={noCars} alt="no cars" width="500" />
        </FavoriteWrap>
      )}
    </>
  );
};

export default Favorites;
