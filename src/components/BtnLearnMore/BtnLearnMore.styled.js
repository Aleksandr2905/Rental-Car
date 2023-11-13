import styled from 'styled-components';

export const CardButton = styled.button`
  width: 274px;
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
