import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;
  border: none;
  margin-top: 100px;
  margin-bottom: 150px;
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  color: var(--accent-color);

  &:hover {
    color: var(--color-hover);
  }
`;
