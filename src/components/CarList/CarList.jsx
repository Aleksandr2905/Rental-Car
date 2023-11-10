import React from 'react';
import { useSelector } from 'react-redux';
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

export const CarList = () => {
  const cars = useSelector(selectCars);
  console.log(cars);

  return (
    <>
      <ListCar>
        {cars.map(car => {
          const city = car.address.split(',')[1].trim();
          const country = (car.address.split(',')[2] || '').trim();

          return (
            <CardWrapper key={car.id}>
              <ImgCar
                src={car.img ?? noImg}
                alt={car.make}
                width="274"
                height="268"
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
              <CardButton type="button">Learn more</CardButton>
            </CardWrapper>
          );
        })}
      </ListCar>
    </>
  );
};
