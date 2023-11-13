import styled from 'styled-components';

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transition: all 0.3s;
`;

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
