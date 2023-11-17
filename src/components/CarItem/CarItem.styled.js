import styled from 'styled-components';

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
  cursor: pointer;
`;

export const BtnFavor = styled.button`
  background-color: ${props => props.color};
  border: none;
  background-color: transparent;
  position: absolute;
  cursor: pointer;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  padding: 0;

  &:hover {
    transform: scale(1.2);
  }

  svg {
    stroke: ${props => props.iconColor};
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
  column-gap: 6px;
  align-items: center;
  color: var(--secondary-text-color);
`;

export const CardInfoCarItem = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  padding-right: 6px;
  border-right: 1px solid rgba(18, 20, 23, 0.1);
  color: var(--secondary-text-color);

  &:last-child {
    border-right: none;
  }
`;
