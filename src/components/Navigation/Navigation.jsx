import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/rental-car.png';
import { BtnNav, BtnWrapper, NavigationWrap } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavigationWrap>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <BtnWrapper>
        <BtnNav to="/">Home</BtnNav>
        <BtnNav to="/catalog">Catalog</BtnNav>
        <BtnNav to="/favorites">Favorites</BtnNav>
      </BtnWrapper>
    </NavigationWrap>
  );
};
