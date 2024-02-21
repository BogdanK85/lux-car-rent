import { CarElement } from 'components/CarElement/CarElement';
import { Section } from 'components/Section/Section';
import { makeNumberFromPrice } from 'helpers/MakeNumberFromPrice';
import { EmptyPage } from 'pages/allPagesStyles.styled';
// import { Container } from 'components/Section/Section.styled';
// import { Section } from 'components/Section/Secrion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCarsThunk, getCarsThunk, LIMIT } from 'redux/fecth';
import { filterCarsSet, filterDelete } from 'redux/filterSlice';
import {
  selectAllCars,
  selectCars,
  selectFilter,
  selectFilterCars,
  selectIsLoading,
} from 'redux/selectors';
import { ListOfCarsStyle, LoadMore } from './ListOfCars.style';

export const ListOfCars = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const allCarsMarke = useSelector(selectAllCars);
  const isLoading = useSelector(selectIsLoading);
  const filterCars = useSelector(selectFilterCars);
  const filter = useSelector(selectFilter);

  const [page, setPage] = useState(0);
  const [isLoadMore, setIsLoadMore] = useState(false);

  useEffect(() => {
    dispatch(getAllCarsThunk());
  }, [dispatch]);

  useEffect(() => {
    if (page === 0) {
      setPage(page + 1);
      return;
    }
    dispatch(getCarsThunk(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (filter === null) {
      return;
    }

    const {
      brand,
      priceTo,
      mileage: { from, to },
    } = filter;
    if (brand === 'all' && priceTo === 'all' && from === '' && to === '') {
      dispatch(filterDelete());
      return;
    }

    // Filter brand є? --> Так --> Віддає filterBrandCars
    // Filter brand 'all'? --> Так --> Віддає allCars
    const filterBrandCars =
      brand !== 'all' && allCarsMarke.filter(car => car.make === brand);

    // Filter priceTo є? --> Так. Так є Filter brand --> Фільтрує filterBrandCars --> Віддає filterBrandPriceCars
    //  Filter priceTo є? --> Так. Але немає Filter brand --> Фільтрує allCars --> ВІддає filterBrandPriceCars
    //  Filter priceYo 'all' є? -->  Віддає filterBrandPriceCars = false
    const filterBrandPriceCars =
      priceTo !== 'all'
        ? filterBrandCars
          ? filterBrandCars.filter(
              car => makeNumberFromPrice(car.rentalPrice) <= priceTo
            )
          : allCarsMarke.filter(
              car => makeNumberFromPrice(car.rentalPrice) <= priceTo
            )
        : false;

    // Фільтр mileage є? -> Так. Та є Фільтр priceTo -> Фільтрує filterBrandPriceCars -> Віддає filterBrandPriceMileageCars
    // Фільтр mileage є? -> Так. Але нема priceTo. Але є brand -> Фільтрує filterBrandCars -> Віддає filterBrandPriceMileageCars
    // Фільтр mileage є? -> Так. Але нема інших фільтрів -> Фільтрує allCars -> Віддає filterBrandPriceMileageCars
    let filterBrandPriceMileageCars = false;
    if (from !== '' && to !== '' && priceTo !== 'all') {
      filterBrandPriceMileageCars = filterBrandPriceCars.filter(
        car => car.mileage > parseInt(from) && car.mileage < parseInt(to)
      );
    } else {
      if (from !== '' && to !== '' && brand !== 'all') {
        filterBrandPriceMileageCars = filterBrandCars.filter(
          car => car.mileage > parseInt(from) && car.mileage < parseInt(to)
        );
      } else {
        filterBrandPriceMileageCars = allCarsMarke.filter(
          car => car.mileage > parseInt(from) && car.mileage < parseInt(to)
        );
      }
    }

    if (from !== '' && to !== '') {
      dispatch(filterCarsSet(filterBrandPriceMileageCars));
    } else {
      if (priceTo !== 'all') {
        dispatch(filterCarsSet(filterBrandPriceCars));
      } else {
        if (brand !== 'all') {
          dispatch(filterCarsSet(filterBrandCars));
        } else {
          return;
        }
      }
    }
  }, [dispatch, filter, allCarsMarke]);

  const totalPage = allCarsMarke.length / LIMIT;

  const onClickLoadMore = () => {
    if (page === totalPage - 1) {
      setIsLoadMore(true);
    }
    setPage(page + 1);
  };

  return (
    <>
      <Section>
        {isLoading && <p>Loading...</p>}
        {filter !== null ? (
          filterCars?.length > 0 ? (
            <ListOfCarsStyle>
              {filterCars?.map((car, index) => (
                <CarElement car={car} key={car.id} index={index} />
              ))}
            </ListOfCarsStyle>
          ) : (
            <EmptyPage>
              <p>Sorry. Nothing was found for your search</p>
            </EmptyPage>
          )
        ) : (
          cars.length > 0 && (
            <>
              <ListOfCarsStyle>
                {cars.map((car, index) => (
                  <CarElement car={car} key={car.id} index={index} />
                ))}
              </ListOfCarsStyle>
              <LoadMore
                onClick={onClickLoadMore}
                display={isLoadMore ? 'none' : 'block'}
              >
                Load More
              </LoadMore>
            </>
          )
        )}
      </Section>
    </>
  );
};
