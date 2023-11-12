import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationWrap = styled.div`
  display: flex;
  max-width: 1440px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 14px 60px;
  margin: 0 auto;
  position: fixed;
  background-color: var(--primary-background-color);
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--primary-background-color);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

export const BtnNav = styled(NavLink)`
  font-size: 22px;
  font-weight: 500;
  line-height: 24px;
  color: var(--accent-color);
  position: relative;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    bottom: -7px;
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background-color: var(--accent-color);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s;
  }

  &.active::after {
    color: var(--accent-color);
    background-color: var(--accent-color);
    transform: scaleX(1);
  }

  &:hover {
    color: var(--color-hover);
  }
`;
