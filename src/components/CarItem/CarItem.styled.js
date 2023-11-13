import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 274px;
  height: 426px;
`;

export const ImgWrap = styled.div`
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
  transition: all 0.3s;
`;

export const FavorWrap = styled.div`
  position: absolute;
  top: 14;
  right: 14;
  width: 20px;
  height: 20px;

  &:hover {
    transform: scale(1.3);
  }
`;

export const BtnFavor = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 14;
  right: 14;
  width: 20px;
  height: 20px;

  &:hover {
    transform: scale(1.3);
  }

  & use {
    stroke: red;
  }
`;

export const ImgCar = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 14px;
`;

export const CardTitle = styled.div`
  display: flex;
  width: 100%;
  margin-top: 14px;
  margin-bottom: 8px;
`;

export const MakeCar = styled.h1`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--primary-text-color);
`;

export const ModelCar = styled.span`
  color: var(--accent-color);
`;

export const PriceCar = styled.h2`
  margin-left: auto;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--primary-text-color);
`;

export const CardInfoCar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 4px;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: var(--secondary-text-color);
`;
