import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from '../../redux/selectors';
import noImg from '../../images/no-photo.png';
import {
  CardButton,
  CardInfoCar,
  CardTitle,
  CardWrapper,
  ImgCar,
  ListCar,
  MakeCar,
  ModelCar,
  PriceCar,
} from './CarList.styled';
import { LoadMore } from '../LoadMore/LoadMore';
import { Modal } from '../Modal/Modal';
import { requestCatalogCar } from '../../redux/thunks';

export const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const [modal, setModal] = useState({ isOpen: false, modalData: null });
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page === 1) {
      dispatch(requestCatalogCar());
    }
  }, [dispatch, page]);

  const onOpenModal = car => {
    setModal({ isOpen: true, modalData: car });
  };

  const onCloseModal = () => {
    setModal({ isOpen: false, modalData: null });
  };

  return (
    <>
      <ListCar>
        {cars.map(car => {
          const city = (car.address.split(',')[1] || '').trim();
          const country = (car.address.split(',')[2] || '').trim();

          return (
            <CardWrapper key={car.id}>
              <ImgCar
                src={car.img || noImg}
                alt={car.make}
                width="274"
                height="268"
                onError={e => {
                  e.target.src = noImg;
                }}
              />
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
              <CardButton type="button" onClick={() => onOpenModal(car)}>
                Learn more
              </CardButton>
            </CardWrapper>
          );
        })}
      </ListCar>
      <LoadMore page={page} setPage={setPage} />

      <Modal
        onCloseModal={onCloseModal}
        modalData={modal.modalData}
        isOpen={modal.isOpen}
      />
    </>
  );
};
