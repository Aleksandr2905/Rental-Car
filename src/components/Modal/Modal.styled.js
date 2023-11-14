import styled from 'styled-components';

export const Backdrop = styled.div`
  /* width: 100vw;
  height: 100vh; */
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border: 1px solid #dce3e5cc;
  border-radius: 24px;
  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
  z-index: 1000;
`;

export const BtnCloseModal = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;

  & svg {
    stroke: var(--primary-text-color);

    &:hover {
      stroke: var(--color-hover);
    }
  }
`;
