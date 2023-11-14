import React, { useEffect, useState } from 'react';
import {
  Button,
  ContainerInput,
  Form,
  Input,
  InputMileage,
  Label,
  LabelText,
  WrapperInput,
} from './Filter.styled';
import { SelectFilter } from './SelectFilter/SelectFilter';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterReducer';
import { requestFirstPage } from '../../redux/thunks';

export const Filter = ({ setFiltering, setShowButton }) => {
  const [price, setPrice] = useState('');
  const [mileageMin, setMileageMin] = useState('');
  const [mileageMax, setMileageMax] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [valuePrice, setValuePrice] = useState({ value: '', label: 'To $' });
  const [valueBrand, setValueBrand] = useState({
    value: '',
    label: 'Enter the text',
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      valueBrand.label !== 'Enter the text' ||
      valuePrice.label !== 'To $' ||
      mileageMin !== '' ||
      mileageMax !== ''
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [mileageMax, mileageMin, valueBrand, valuePrice]);

  const handleChangeBrand = selectOption => {
    setValueBrand({
      value: selectOption.value,
      label: selectOption.label,
    });
  };

  const handleChangePrice = selectOption => {
    const formattedValue = `To ${selectOption.value}$`;
    setValuePrice({
      value: formattedValue,
      label: formattedValue,
    });
    setPrice(selectOption.value);
  };

  const handleChangeMileage = event => {
    const newValue = event.target.value;
    switch (event.target.name) {
      case 'mileageMin':
        setMileageMin(newValue);
        break;
      case 'mileageMax':
        setMileageMax(newValue);
        break;
      default:
        break;
    }
  };

  const handleSearchClick = event => {
    event.preventDefault();
    const newFilterQuery = {
      make: valueBrand.value.toLowerCase().trim() || '',
      price: price || 300,
      mileageMin: mileageMin.split(',').join('') || 0,
      mileageMax: mileageMax.split(',').join('') || 99999,
    };
    dispatch(setFilter(newFilterQuery));
    setFiltering(true);
  };

  const handleResetClick = event => {
    event.preventDefault();
    dispatch(requestFirstPage());
    setFiltering(false);
    setValuePrice({
      value: '',
      label: 'To $',
    });
    setValueBrand({
      value: '',
      label: 'Enter the text',
    });
    setMileageMin('');
    setMileageMax('');
    setShowButton(true);
  };

  return (
    <Form>
      <SelectFilter
        textLabel="Car brand"
        brand
        name="make"
        width={'224px'}
        value={valueBrand}
        handleChange={handleChangeBrand}
      />
      <SelectFilter
        textLabel="Price/ 1 hour"
        name="price"
        width={'125px'}
        value={valuePrice}
        handleChange={handleChangePrice}
      />
      <WrapperInput>
        <LabelText htmlFor="Сar mileage / km">Сar mileage / km</LabelText>
        <ContainerInput>
          <InputMileage>
            <Label>From</Label>
            <Input
              type="text"
              value={mileageMin}
              name="mileageMin"
              format="####,####"
              padding="65px"
              maxLength={7}
              decimalScale={3}
              thousandSeparator={true}
              onChange={handleChangeMileage}
            />
          </InputMileage>
          <InputMileage>
            <Label>To</Label>
            <Input
              type="text"
              value={mileageMax}
              name="mileageMax"
              format="####,####"
              padding="45px"
              maxLength={7}
              decimalScale={3}
              thousandSeparator={true}
              onChange={handleChangeMileage}
            />
          </InputMileage>
        </ContainerInput>
      </WrapperInput>
      <Button type="submit" onClick={handleSearchClick} disabled={isDisabled}>
        Search
      </Button>
      <Button type="submit" onClick={handleResetClick} disabled={isDisabled}>
        Reset
      </Button>
    </Form>
  );
};
