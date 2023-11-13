import React from 'react';
import { CarItem } from '../CarItem/CarItem';
import { CardWrap, List } from './CarList.styled';

export const CarList = ({ carsArr }) => {
  return (
    <>
      <List>
        {carsArr.map(car => (
          <CardWrap key={car.id}>
            <CarItem car={car} />
          </CardWrap>
        ))}
      </List>
    </>
  );
};
