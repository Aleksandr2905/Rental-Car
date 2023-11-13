import React from 'react';
import { CardButton } from './BtnLearnMore.styled';

export const BtnLearnMore = ({ onClick }) => {
  return (
    <>
      <CardButton type="button" onClick={onClick}>
        Learn more
      </CardButton>
    </>
  );
};
