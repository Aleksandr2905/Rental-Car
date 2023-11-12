import React from 'react';
import car from '../../images/car-home.png';
import city from '../../images/city.png';
import { HomeTitle, HomeWrapper, Img, ImgCity } from './Home.styled';

export const Home = () => {
  return (
    <HomeWrapper>
      <HomeTitle>Selection of cars for comfortable travel</HomeTitle>
      <Img src={car} alt="car" />
      <ImgCity src={city} alt="city" />
    </HomeWrapper>
  );
};
