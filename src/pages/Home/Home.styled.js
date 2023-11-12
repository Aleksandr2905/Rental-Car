import styled from 'styled-components';

export const HomeWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

export const HomeTitle = styled.h1`
  position: absolute;
  width: 500px;
  top: 100px;
  right: 50px;
  font-size: 42px;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--primary-text-color);
`;

export const Img = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  max-height: 100%;
  max-width: 1000px;
  z-index: 5;
`;

export const ImgCity = styled.img`
  position: absolute;
  bottom: 110px;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
`;
