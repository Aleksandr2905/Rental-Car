import styled from 'styled-components';

export const ScrollToTopButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  transition: bottom 0.3s ease-out;
  padding: 8px;
  background-color: var(--accent-color);
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: var(--color-hover);
  }
`;
