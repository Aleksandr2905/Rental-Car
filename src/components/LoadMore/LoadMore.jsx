import React from 'react';
import { Button } from './LoadMore.styled';
import { useDispatch } from 'react-redux';
import { requestCatalogCar } from '../../redux/thunks';

export const LoadMore = ({ page, setPage, setShowButton }) => {
  const dispatch = useDispatch();

  const handleLoadMore = async () => {
    const { payload } = await dispatch(requestCatalogCar(page + 1));
    setPage(prevPage => prevPage + 1);
    if (payload.length >= 12) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  return (
    <>
      <Button onClick={handleLoadMore}>Load more</Button>
    </>
  );
};
