import { CarElement } from 'components/CarElement/CarElement';
import { Section } from 'components/Section/Secrion';
// import { Container } from 'components/Section/Section.styled';
// import { Section } from 'components/Section/Secrion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCarsThunk, getCarsThunk, LIMIT } from 'redux/fecth';
import { selectAllCars, selectCars } from 'redux/selectors';
import { ListOfCarsStyle, LoadMore } from './ListOfCars.style';

export const ListOfCars = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const allCarsMarke = useSelector(selectAllCars);

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
        {/* <Container> */}
        <ListOfCarsStyle>
          {/* <div>list</div> */}
          {/* {console.log(cars)} */}
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
        {/* </Container> */}
      </Section>
    </>
  );
};
