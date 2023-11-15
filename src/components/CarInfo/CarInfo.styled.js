import styled from 'styled-components';

export const BtnCloseModal = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  z-index: 102;

  & svg {
    stroke: var(--primary-text-color);

    &:hover {
      stroke: var(--color-hover);
    }
  }
`;

export const ModalContent = styled.div`
  padding: 40px;
  width: 541px;
`;

export const ImgModal = styled.img`
  width: 100%;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`;

export const TitleModal = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: var(--primary-text-color);

  & span {
    color: var(--accent-color);
  }
`;

export const InfoCarModal = styled.div`
  margin-top: 8px;
  margin-bottom: 14px;
`;

export const InfoCarList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 4px;
`;

export const InfoCarItem = styled.li`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  padding-right: 6px;
  border-right: 1px solid rgba(18, 20, 23, 0.1);
  color: var(--secondary-text-color);

  &:last-child {
    border-right: none;
  }
`;

export const Description = styled.h1`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: var(--primary-text-color);
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 8px;
  margin-top: 24px;
  color: var(--primary-text-color);
`;

export const AccessoriesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 4px;
  column-gap: 6px;
`;

export const AccessoriesItem = styled.li`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  padding-right: 6px;
  border-right: 1px solid rgba(18, 20, 23, 0.1);
  color: var(--secondary-text-color);

  &:last-child {
    border-right: none;
  }
`;

export const ConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const ConditionsItem = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  font-family: Montserrat, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  background-color: var(--conditions-background-color);
  color: var(--conditions-text-color);

  & span {
    font-weight: 600;
    color: var(--accent-color);
  }
`;
