import styled from '@emotion/styled';
import { NumericFormat } from 'react-number-format';

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: center;
  margin-top: 120px;
  margin-left: auto;
  margin-right: auto;
`;

export const WrapperInput = styled.div`
  text-align: left;
`;

export const LabelText = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--label-text-color);
`;

export const ContainerInput = styled.div`
  display: flex;
  gap: 2px;
  border: none;
  border-radius: 14px;
  overflow: hidden;
  background-color: rgba(138, 138, 137, 0.2);
`;

export const InputMileage = styled.div`
  position: relative;
`;

export const Label = styled.p`
  position: absolute;
  top: 12px;
  left: 24px;
  font-size: 16px;
`;

export const Input = styled(NumericFormat)`
  padding-left: ${props => props.padding};
  width: 160px;
  height: 48px;
  font-size: 16px;
  border: none;
  outline: none;
  background-color: var(--input-background-color);
`;

export const Button = styled.button`
  padding: 14px 44px;
  border-radius: 12px;
  border: none;
  align-self: end;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: var(--button-text-color);
  background-color: var(--accent-color);

  &:hover {
    background-color: var(--color-hover);
  }

  &:disabled {
    background-color: var(--secondary-text-color);
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
