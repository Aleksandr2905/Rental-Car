import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestCarById } from '../../redux/thunks';
import noImg from '../../images/no-photo.png';
import sprite from '../../images/sprite.svg';
import { selectFavorite } from '../../redux/selectors.js';
import { addFavorite, removeFavorite } from '../../redux/favoriteReducer.js';
import {
  CardInfoCar,
  CardTitle,
  ImgCar,
  MakeCar,
  ModelCar,
  PriceCar,
  ImgWrap,
  BtnFavor,
  FavorWrap,
  CardInfoCarItem,
} from './CarItem.styled';
import { BtnLearnMore } from '../BtnLearnMore/BtnLearnMore';
import { CarInfo } from '../CarInfo/CarInfo.jsx';

export const CarItem = ({ car }) => {
  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    rentalCompany,
    type,
    functionalities,
  } = car;
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { favoriteCars } = useSelector(selectFavorite);
  const city = (car.address.split(',')[1] || '').trim();
  const country = (car.address.split(',')[2] || '').trim();

  useEffect(() => {
    if (favoriteCars.some(favorCar => favorCar.id === car.id)) {
      setIsFavorite(true);
    }
  }, [car, favoriteCars]);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);

    if (isFavorite) {
      dispatch(removeFavorite(car));
    } else {
      dispatch(addFavorite(car));
    }
  };

  const onOpenModal = () => {
    setIsModalOpen(true);
    dispatch(requestCarById(id));
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <ImgWrap>
        <FavorWrap onClick={handleFavorite}>
          {!isFavorite ? (
            <BtnFavor type="button">
              <svg width="18" height="18">
                <use href={`${sprite}#icon-heart`} />
              </svg>
            </BtnFavor>
          ) : (
            <BtnFavor type="button">
              <svg width="18" height="18">
                <use href={`${sprite}#icon-active`} />
              </svg>
            </BtnFavor>
          )}
        </FavorWrap>
        <ImgCar
          src={img || noImg}
          alt={make}
          width="274"
          height="268"
          onError={e => {
            e.target.src = noImg;
          }}
        />
      </ImgWrap>
      <CardTitle>
        <MakeCar>
          {make}
          <ModelCar>&#x20;{model},&#x20;</ModelCar>
          {year}
        </MakeCar>
        <PriceCar>{rentalPrice}</PriceCar>
      </CardTitle>
      <CardInfoCar>
        <CardInfoCarItem>{city}</CardInfoCarItem>
        <CardInfoCarItem>{country}</CardInfoCarItem>
        <CardInfoCarItem>{rentalCompany}</CardInfoCarItem>
        <CardInfoCarItem>{type}</CardInfoCarItem>
        <CardInfoCarItem>{model}</CardInfoCarItem>
        <CardInfoCarItem>{id}</CardInfoCarItem>
        <CardInfoCarItem>{functionalities[0]}</CardInfoCarItem>
      </CardInfoCar>
      <BtnLearnMore car={car} onClick={onOpenModal} />

      {isModalOpen && (
        <CarInfo
          isModalOpen={isModalOpen}
          onCloseModal={onCloseModal}
          car={car}
        />
      )}
    </>
  );
};
