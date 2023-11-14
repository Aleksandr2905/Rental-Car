import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;
  border: none;
  margin-bottom: 70px;
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  color: var(--accent-color);

  &:hover {
    color: var(--color-hover);
  }

  &:after {
    content: '';
    background: none repeat scroll 0 0 transparent;
    bottom: -1px;
    display: block;
    height: 1px;
    left: 50%;
    position: absolute;
    background: var(--color-hover);
    transition: width 500ms ease 0s, left 500ms ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }
  :hover {
    color: var(--color-hover);
  }
`;
