import React from 'react';
import logo from '../../images/logo.png';
import { BtnNav, BtnWrapper, Logo, NavigationWrap } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavigationWrap>
      <Logo to="/">
        <img src={logo} alt="logo" />
      </Logo>
      <BtnWrapper>
        <BtnNav to="/">Home</BtnNav>
        <BtnNav to="/catalog">Catalog</BtnNav>
        <BtnNav to="/favorites">Favorites</BtnNav>
      </BtnWrapper>
    </NavigationWrap>
  );
};
