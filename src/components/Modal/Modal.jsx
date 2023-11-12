import React, { useEffect } from 'react';
import {
  AccessoriesItem,
  AccessoriesList,
  Backdrop,
  BtnCloseModal,
  BtnRentalCar,
  ConditionsItem,
  ConditionsList,
  Description,
  ImgModal,
  InfoCarItem,
  InfoCarList,
  InfoCarModal,
  ModalContent,
  ModalWrap,
  Title,
  TitleModal,
} from './Modal.styled';
import sprite from '../../images/sprite.svg';
import noImg from '../../images/no-photo.png';

export const Modal = ({ onCloseModal, isOpen, modalData }) => {
  console.log(modalData);
  const onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  useEffect(() => {
    const handleEscape = event => {
      if (event.code === 'Escape') {
        onCloseModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onCloseModal]);

  const city = modalData ? (modalData.address.split(',')[1] || '').trim() : '';
  const country = modalData
    ? (modalData.address.split(',')[2] || '').trim()
    : '';
  const rentalConditionsArray =
    modalData && modalData.rentalConditions
      ? modalData.rentalConditions.split('\n')
      : [];

  const minimumAge =
    rentalConditionsArray.length > 0 ? rentalConditionsArray[0].split(' ') : [];
  const age = minimumAge.length > 2 ? minimumAge[2] : '';
  const textMinAge =
    minimumAge.length > 0 ? minimumAge.slice(0, 2).join(' ') : '';

  return (
    isOpen && (
      <Backdrop onClick={onBackdropClick}>
        <ModalWrap>
          <BtnCloseModal type="button" onClick={onCloseModal}>
            <svg width="24" height="24">
              <use href={`${sprite}#icon-x`} />
            </svg>
          </BtnCloseModal>
          <ModalContent>
            <ImgModal src={modalData.img || noImg} alt={modalData.make} />
            <TitleModal>
              {modalData.make} <span>{modalData.model},</span> {modalData.year}
            </TitleModal>
            <InfoCarModal>
              <InfoCarList>
                <InfoCarItem>{city}</InfoCarItem>
                <InfoCarItem>{country}</InfoCarItem>
                <InfoCarItem>Id: {modalData.id}</InfoCarItem>
                <InfoCarItem>Year: {modalData.year}</InfoCarItem>
                <InfoCarItem>Type: {modalData.type}</InfoCarItem>
              </InfoCarList>
              <InfoCarList>
                <InfoCarItem>
                  Fuel Consumption: {modalData.fuelConsumption}
                </InfoCarItem>
                <InfoCarItem>Engine Size: {modalData.engineSize}</InfoCarItem>
              </InfoCarList>
            </InfoCarModal>
            <Description>{modalData.description}</Description>
            <Title>Accessories and functionalities:</Title>
            <AccessoriesList>
              {modalData.accessories.map(item => (
                <AccessoriesItem key={item}>{item}</AccessoriesItem>
              ))}
            </AccessoriesList>
            <AccessoriesList>
              {modalData.functionalities.map(item => (
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
                  index !== 0 && (
                    <ConditionsItem key={index}>{item}</ConditionsItem>
                  )
              )}
              <ConditionsItem>
                Mileage:{' '}
                <span>{modalData.mileage.toLocaleString('en-US')}</span>
              </ConditionsItem>
              <ConditionsItem>
                Price: <span>{modalData.rentalPrice}</span>
              </ConditionsItem>
            </ConditionsList>
            <BtnRentalCar href="tel:+380730000000">Rental car</BtnRentalCar>
          </ModalContent>
        </ModalWrap>
      </Backdrop>
    )
  );
};
