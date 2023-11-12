import React, { useState } from 'react';
import { Button } from './LoadMore.styled';
import { useDispatch } from 'react-redux';
import { requestCatalogCar } from '../../redux/thunks';

export const LoadMore = ({ page, setPage }) => {
  const dispatch = useDispatch();
  const [showLoadMore, setShowLoadMore] = useState(true);

  const handleLoadMore = async () => {
    const { payload } = await dispatch(requestCatalogCar(page + 1));
    setPage(prevPage => prevPage + 1);
    if (payload.length >= 12) {
      setShowLoadMore(true);
    } else {
      setShowLoadMore(false);
    }
  };

  return (
    <>
      {showLoadMore && (
        <Button type="button" onClick={handleLoadMore}>
          Load more
        </Button>
      )}
    </>
  );
};
