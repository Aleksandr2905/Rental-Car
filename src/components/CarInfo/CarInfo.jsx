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
import { Modal } from '../Modal/Modal';

export const CarInfo = ({ isModalOpen, onCloseModal, car }) => {
  const city = car ? (car.address.split(',')[1] || '').trim() : '';
  const country = car ? (car.address.split(',')[2] || '').trim() : '';
  const rentalConditionsArray =
    car && car.rentalConditions ? car.rentalConditions.split('\n') : [];

  const minimumAge =
    rentalConditionsArray.length > 0 ? rentalConditionsArray[0].split(' ') : [];
  const age = minimumAge.length > 2 ? minimumAge[2] : '';
  const textMinAge =
    minimumAge.length > 0 ? minimumAge.slice(0, 2).join(' ') : '';

  return (
    <Modal isModalOpen={isModalOpen} onCloseModal={onCloseModal}>
      <ModalContent>
        <ImgModal
          src={car.img || noImg}
          alt={car.make}
          onError={e => {
            e.target.src = noImg;
          }}
        />
        <TitleModal>
          {car.make} <span>{car.model},</span> {car.year}
        </TitleModal>
        <InfoCarModal>
          <InfoCarList>
            <InfoCarItem>{city}</InfoCarItem>
            <InfoCarItem>{country}</InfoCarItem>
            <InfoCarItem>Id: {car.id}</InfoCarItem>
            <InfoCarItem>Year: {car.year}</InfoCarItem>
            <InfoCarItem>Type: {car.type}</InfoCarItem>
          </InfoCarList>
          <InfoCarList>
            <InfoCarItem>Fuel Consumption: {car.fuelConsumption}</InfoCarItem>
            <InfoCarItem>Engine Size: {car.engineSize}</InfoCarItem>
          </InfoCarList>
        </InfoCarModal>
        <Description>{car.description}</Description>
        <Title>Accessories and functionalities:</Title>
        <AccessoriesList>
          {car.accessories.map(item => (
            <AccessoriesItem key={item}>{item}</AccessoriesItem>
          ))}
        </AccessoriesList>
        <AccessoriesList>
          {car.functionalities.map(item => (
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
            Mileage: <span>{car.mileage.toLocaleString('en-US')}</span>
          </ConditionsItem>
          <ConditionsItem>
            Price: <span>{car.rentalPrice}</span>
          </ConditionsItem>
        </ConditionsList>
        <BtnRentalCar text="Rental Car" />
      </ModalContent>
    </Modal>
  );
};
