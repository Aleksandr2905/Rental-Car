import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestCarById } from '../../redux/thunks';
import noImg from '../../images/no-photo.png';
import sprite from '../../images/sprite.svg';
import { selectFavorite } from '../../redux/selectors.js';
import { AnimatePresence } from 'framer-motion';
import { addFavorite, removeFavorite } from '../../redux/favoriteReducer.js';
import {
  CardInfoCar,
  CardTitle,
  CardWrapper,
  ImgCar,
  MakeCar,
  ModelCar,
  PriceCar,
  ImgWrap,
  BtnFavor,
  FavorWrap,
} from './CarItem.styled';
import { BtnLearnMore } from '../BtnLearnMore/BtnLearnMore';
import { CarInfo } from '../CarInfo/CarInfo.jsx';

export const CarItem = ({ car }) => {
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

  const handleFavorite = event => {
    setIsFavorite(!isFavorite);

    if (favoriteCars.some(favorCar => favorCar.id === car.id)) {
      dispatch(removeFavorite(car));
    } else {
      dispatch(addFavorite(car));
    }
  };

  const onOpenModal = () => {
    setIsModalOpen(true);
    dispatch(requestCarById(car.id));
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <CardWrapper>
        <ImgWrap>
          <FavorWrap onClick={handleFavorite}>
            <BtnFavor type="button">
              <svg width="20" height="20">
                <use href={`${sprite}#icon-heart`} />
              </svg>
            </BtnFavor>
          </FavorWrap>
          <ImgCar
            src={car.img || noImg}
            alt={car.make}
            width="274"
            height="268"
            onError={e => {
              e.target.src = noImg;
            }}
          />
        </ImgWrap>

        <CardTitle>
          <MakeCar>
            {car.make}
            <ModelCar>&#x20;{car.model},&#x20;</ModelCar>
            {car.year}
          </MakeCar>
          <PriceCar>{car.rentalPrice}</PriceCar>
        </CardTitle>
        <CardInfoCar>
          <p>{city} | </p>
          <p>{country} | </p>
          <p>{car.rentalCompany} | </p>
          <p>{car.type} | </p>
          <p>{car.model} | </p>
          <p>{car.id} | </p>
          <p>{car.functionalities[0]}</p>
        </CardInfoCar>
        <BtnLearnMore car={car} onClick={onOpenModal} />
        <AnimatePresence>
          {isModalOpen && (
            <CarInfo
              isModalOpen={isModalOpen}
              onCloseModal={onCloseModal}
              car={car}
            />
          )}
        </AnimatePresence>
      </CardWrapper>
    </>
  );
};
