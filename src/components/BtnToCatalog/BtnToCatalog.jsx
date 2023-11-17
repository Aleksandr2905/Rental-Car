import React from 'react';
import { BtnCatalog } from './BtnToCatalog.styled';

const BtnToCatalog = ({ text }) => {
  return <BtnCatalog to="/catalog">{text}</BtnCatalog>;
};

export default BtnToCatalog;
