import styled from 'styled-components';
import Select from 'react-select';

export const SelectWrap = styled.div`
  width: ${props => props.width};
  text-align: left;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--label-text-color);
`;

export const InputSelect = styled(Select)`
  height: 48px;

  .custom-select-arrow {
    transition: transform 0.5s;
  }

  .custom-select.is-open .custom-select-arrow {
    transform: rotate(180deg);
  }

  .custom-select.is-open.custom-select-menu::-webkit-scrollbar {
    width: 8px;
    background-color: red;
  }

  #react-select-2-listbox,
  #react-select-3-listbox {
    border-radius: 14px;
    overflow: hidden;
  }
`;
