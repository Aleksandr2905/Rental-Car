import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BtnCatalog = styled(NavLink)`
  width: 168px;
  margin-top: 24px;
  padding: 12px 50px;
  border-radius: 12px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  background-color: var(--accent-color);
  color: var(--button-text-color);

  &:hover {
    background-color: var(--color-hover);
    outline: none;
  }
`;
