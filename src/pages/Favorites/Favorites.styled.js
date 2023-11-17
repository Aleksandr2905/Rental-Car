import styled from 'styled-components';

export const FavoriteWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
`;

export const FavoriteTitle = styled.h1`
  font-size: 22px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
  color: var(--primary-text-color);
`;

export const FavoriteText = styled.h2`
  width: 500px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: var(--primary-text-color);
`;
