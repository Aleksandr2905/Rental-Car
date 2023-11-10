import styled from 'styled-components';

export const ListCar = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 90px;
  margin-left: auto;
  margin-right: auto;
  column-gap: 29px;
  row-gap: 50px;
`;

export const CardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  width: 274px;
  height: 426px;
`;

export const ImgCar = styled.img`
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

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
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

export const CardButton = styled.button`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 12px 0;
  margin-top: auto;
  border: none;
  border-radius: 12px;
  transition: all 0.3s;
  background-color: var(--accent-color);
  color: var(--button-text-color);

  &:hover {
    background-color: var(--color-hover);
  }
`;
