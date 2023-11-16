import React from 'react';
import car from '../../images/car-home.png';
import road from '../../images/road.png';
import { HomeTitle, HomeWrapper, Img, ImgRoad } from './Home.styled';

const Home = () => {
  return (
    <HomeWrapper>
      <HomeTitle>Selection of cars for comfortable travel</HomeTitle>
      <Img src={car} alt="car" />
      <ImgRoad src={road} alt="road" />
    </HomeWrapper>
  );
};

export default Home;
