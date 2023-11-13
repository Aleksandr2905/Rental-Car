import React from 'react';
import makes from '../../../services/makes.json';
import { createOptions, priceArr, sortByMakes } from './helpersSelect';
import { InputSelect, Label, SelectWrap } from './SelectFilter.styled';

export const SelectFilter = ({
  name,
  textLabel,
  brand,
  handleChange,
  value,
  width,
}) => {
  const sortMakes = sortByMakes(makes);
  const brandFilter = createOptions(sortMakes);
  const priceFilter = createOptions(priceArr);

  return (
    <SelectWrap width={width}>
      <Label htmlFor={name}>{textLabel}</Label>
      <InputSelect
        id={name}
        options={brand ? brandFilter : priceFilter}
        className="custom-select custom-select-menu"
        onChange={handleChange}
        value={value}
        styles={{
          dropdownIndicator: (base, state) => ({
            ...base,
            transition: 'transform 0.5s',
            transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
          }),
          control: base => ({
            ...base,
            backgroundColor: '#F7F7FB',
            borderRadius: '14px',
            border: 'none',
            output: 'none',
            height: '48px',
          }),
        }}
      />
    </SelectWrap>
  );
};
