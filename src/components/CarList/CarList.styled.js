import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 50px;
  margin-bottom: 70px;
  margin-left: auto;
  margin-right: auto;
  column-gap: 29px;
  row-gap: 50px;
`;

export const CardWrap = styled.li`
  display: flex;
  flex-direction: column;
  width: 274px;
  height: 426px;
  position: relative;
`;
