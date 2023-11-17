import styled from 'styled-components';

export const HomeWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
`;

export const TitleWrap = styled.div`
  position: absolute;
  width: 520px;
  top: 100px;
  left: 50px;
  z-index: 1;
`;

export const HomeTitle = styled.h1`
  font-size: 44px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 24px;
  color: var(--primary-text-color);
`;

export const Img = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  max-width: 80%;
  z-index: 5;
`;

export const ImgRoad = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
`;
