import React from 'react';
import noImg from '../../images/no-photo.png';

import {
  AccessoriesItem,
  AccessoriesList,
  ConditionsItem,
  ConditionsList,
  Description,
  ImgModal,
  InfoCarItem,
  InfoCarList,
  InfoCarModal,
  ModalContent,
  Title,
  TitleModal,
} from './CarInfo.styled';
import { BtnRentalCar } from '../BtnRentalCar/BtnRentalCar';
import Modal from '../Modal/Modal';

export const CarInfo = ({ isModalOpen, onCloseModal, car }) => {
  const {
    address,
    rentalConditions,
    img,
    make,
    model,
    year,
    id,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    mileage,
    rentalPrice,
  } = car;
  const city = car ? (address.split(',')[1] || '').trim() : '';
  const country = car ? (address.split(',')[2] || '').trim() : '';
  const rentalConditionsArray =
    car && rentalConditions ? rentalConditions.split('\n') : [];

  const minimumAge =
    rentalConditionsArray.length > 0 ? rentalConditionsArray[0].split(' ') : [];
  const age = minimumAge.length > 2 ? minimumAge[2] : '';
  const textMinAge =
    minimumAge.length > 0 ? minimumAge.slice(0, 2).join(' ') : '';

  return (
    <Modal isModalOpen={isModalOpen} onCloseModal={onCloseModal}>
      <ModalContent>
        <ImgModal
          src={img || noImg}
          alt={make}
          onError={e => {
            e.target.src = noImg;
          }}
        />
        <TitleModal>
          {make} <span>{model},</span> {year}
        </TitleModal>
        <InfoCarModal>
          <InfoCarList>
            <InfoCarItem>{city}</InfoCarItem>
            <InfoCarItem>{country}</InfoCarItem>
            <InfoCarItem>Id: {id}</InfoCarItem>
            <InfoCarItem>Year: {year}</InfoCarItem>
            <InfoCarItem>Type: {type}</InfoCarItem>
          </InfoCarList>
          <InfoCarList>
            <InfoCarItem>Fuel Consumption: {fuelConsumption}</InfoCarItem>
            <InfoCarItem>Engine Size: {engineSize}</InfoCarItem>
          </InfoCarList>
        </InfoCarModal>
        <Description>{description}</Description>
        <Title>Accessories and functionalities:</Title>
        <AccessoriesList>
          {accessories.map(item => (
            <AccessoriesItem key={item}>{item}</AccessoriesItem>
          ))}
          {functionalities.map(item => (
            <AccessoriesItem key={item}>{item}</AccessoriesItem>
          ))}
        </AccessoriesList>
        <Title>Rental conditions:</Title>
        <ConditionsList>
          <ConditionsItem>
            {textMinAge}
            <span> {age}</span>
          </ConditionsItem>
          {rentalConditionsArray.map(
            (item, index) =>
              index !== 0 && <ConditionsItem key={index}>{item}</ConditionsItem>
          )}
          <ConditionsItem>
            Mileage: <span>{mileage.toLocaleString('en-US')}</span>
          </ConditionsItem>
          <ConditionsItem>
            Price: <span>{rentalPrice}</span>
          </ConditionsItem>
        </ConditionsList>
        <BtnRentalCar text="Rental Car" />
      </ModalContent>
    </Modal>
  );
};
