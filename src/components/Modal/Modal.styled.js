import styled from 'styled-components';

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const Container = styled.div`
  position: relative;
  background-color: var(--primary-background-color);
  border-radius: 24px;
  z-index: 1000;
`;

export const BtnCloseModal = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  border: none;
  outline: none;
  overflow: hidden;
  padding: 0;

  & svg {
    stroke: var(--primary-text-color);

    &:hover {
      stroke: var(--color-hover);
    }
  }
`;
