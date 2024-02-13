import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../images/sprite.svg';
import { addFavoriteCar, deleteFavoriteCar } from 'redux/favoriteCarsSlice';
import { selectFavoriteCars } from 'redux/selectors';
import {
  Button,
  CarCard,
  CarElementStyled,
  Heart,
  ImageBox,
  Img,
  InfoContainer,
  InfoElement,
  InfoList,
  InfoListBox,
  Title,
  TitleBox,
} from './CarElement.styled';
import { useEffect, useState } from 'react';
import { ModalWindowWrap } from 'components/ModalWindowWrap/ModalWindowWrap';
import { ModalReadMare } from 'components/ModalReadMore/ModalReadMore';

export const CarElement = ({ car, index }) => {
  const dispatch = useDispatch();
  const favoriteCarsId = useSelector(selectFavoriteCars);
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
  } = car;

  const addressInfo = address?.split(', ').slice(-2);

  const [isCarFavorite, setIsCarFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (favoriteCarsId?.some(car => car.id === id)) {
      setIsCarFavorite(true);
    } else {
      setIsCarFavorite(false);
    }
  }, [favoriteCarsId, id]);

  const onClickHeart = () => {
    isCarFavorite
      ? dispatch(deleteFavoriteCar(id))
      : dispatch(addFavoriteCar(car));
  };
  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <CarElementStyled key={id}>
      {showModal && (
        <ModalWindowWrap onClick={toggleModal}>
          <ModalReadMare car={car} key={id} />
        </ModalWindowWrap>
      )}
      <CarCard>
        <ImageBox>
          <Img
            src={img ? img : '../../images/image_not_available.png'}
            alt="car"
          />
          <Heart
            onClick={onClickHeart}
            fill={isCarFavorite ? 'var(--color-button)' : 'none'}
            stroke={
              isCarFavorite
                ? 'var(--color-button)'
                : 'var(--color-text-button-and-back)'
            }
          >
            <use href={`${sprite}#icon-heart`} />
          </Heart>
        </ImageBox>
        <InfoContainer>
          <TitleBox>
            <Title>
              {make} <span>&nbsp;{model}</span>,&nbsp;{year}
            </Title>
            <p>{rentalPrice}</p>
          </TitleBox>
          <InfoListBox>
            <InfoList>
              <InfoElement>{addressInfo[0]}</InfoElement>
              <InfoElement>{addressInfo[1]}</InfoElement>
              <InfoElement>{rentalCompany}</InfoElement>
              <InfoElement>Premium</InfoElement>
            </InfoList>
            <InfoList>
              <InfoElement>{type}</InfoElement>
              <InfoElement>
                {' '}
                {index === 10 ? make : index === 0 || index > 4 ? model : make}
              </InfoElement>
              <InfoElement>{id}</InfoElement>
              <InfoElement>{functionalities[0]}</InfoElement>
            </InfoList>
          </InfoListBox>
        </InfoContainer>
      </CarCard>
      <Button onClick={toggleModal}>Learn More</Button>
    </CarElementStyled>
  );
};
