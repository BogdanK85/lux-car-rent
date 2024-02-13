import { CarElement } from 'components/CarElement/CarElement';
import { ListOfCarsStyle } from 'components/ListOfCars/ListOfCars.style';
import { Section } from 'components/Section/Section';
import { EmptyPage, LinkStyled } from 'pages/allPagesStyles.styled';
import { useSelector } from 'react-redux';
import { selectFavoriteCars } from 'redux/selectors';

const Favorite = () => {
  const favoriteCars = useSelector(selectFavoriteCars);

  return (
    <Section>
      {favoriteCars?.length > 0 ? (
        <ListOfCarsStyle>
          {favoriteCars?.map((car, index) => (
            <CarElement car={car} key={car.id} index={index} />
          ))}
        </ListOfCarsStyle>
      ) : (
        <EmptyPage>
          <p>
            Please select your favorite cars in the{' '}
            <LinkStyled to="/catalog">Catalog</LinkStyled>
          </p>
        </EmptyPage>
      )}
    </Section>
  );
};

export default Favorite;
