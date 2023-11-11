import React from 'react';
import { Button } from './LoadMore.styled';
import { useDispatch } from 'react-redux';
import { requestCatalogCar } from '../../redux/thunks';

export const LoadMore = ({ page, setPage, setShowLoadMore }) => {
  const dispatch = useDispatch();

  const handleLoadMore = async () => {
    const { payload } = await dispatch(requestCatalogCar(page));
    console.log(payload);
    setPage(prevPage => prevPage + 1);
    if (payload.length >= 12) {
      setShowLoadMore(true);
    } else {
      setShowLoadMore(false);
    }
  };

  return (
    <>
      <Button type="button" onClick={handleLoadMore}>
        Load more
      </Button>
    </>
  );
};
