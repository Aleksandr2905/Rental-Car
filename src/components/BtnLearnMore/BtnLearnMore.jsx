import React from 'react';
import { CardButton } from './BtnLearnMore.styled';

export const BtnLearnMore = ({ onClick }) => {
  return (
    <>
      <CardButton onClick={onClick}>Learn more</CardButton>
    </>
  );
};
