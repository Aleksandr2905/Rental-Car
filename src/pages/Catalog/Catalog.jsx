import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestFilters, requestFirstPage } from '../../redux/thunks';
import { CarList } from '../../components/CarList/CarList';
import { Filter } from '../../components/Filter/Filter';
import { selectCars, selectFilter } from '../../redux/selectors';
import { Loader } from '../../components/Loader/Loader';
import { LoadMore } from '../../components/LoadMore/LoadMore';

export const Catalog = () => {
  const dispatch = useDispatch();
  const { cars, isLoading } = useSelector(selectCars);
  const [page, setPage] = useState(1);
  const [showButton, setShowButton] = useState(true);
  const filter = useSelector(selectFilter);
  const [filterCars, setFilterCars] = useState([]);
  const [filtering, setFiltering] = useState(false);
  const filteredCars = (payload, filter) => {
    const pars = str => parseInt(str.replace(/\D/g, ''), 10);
    const filteredCars = payload.filter(
      ({ make, rentalPrice, mileage }) =>
        make.toLowerCase().includes(filter.make) &&
        pars(rentalPrice) <= filter.price &&
        mileage > filter.mileageMin &&
        mileage < filter.mileageMax
    );
    return filteredCars;
  };

  useEffect(() => {
    if (page === 1) {
      dispatch(requestFirstPage());
    }
  }, [dispatch, page]);

  useEffect(() => {
    if (filtering) {
      dispatch(requestFilters()).then(({ payload }) => {
        const visibleCars = filteredCars(payload, filter);
        setFilterCars(visibleCars);
      });
    }
  }, [dispatch, filter, filtering]);

  return (
    <>
      <Filter setFiltering={setFiltering} />
      {filtering ? (
        filterCars.length === 0 ? (
          <p>
            Nothing was found for your request, change your search parameters
          </p>
        ) : (
          <CarList carsArr={filterCars} />
        )
      ) : (
        <CarList carsArr={cars} />
      )}
      {!filtering &&
        (isLoading ? (
          <Loader />
        ) : (
          showButton && (
            <LoadMore
              page={page}
              setPage={setPage}
              setShowButton={setShowButton}
            />
          )
        ))}
    </>
  );
};
