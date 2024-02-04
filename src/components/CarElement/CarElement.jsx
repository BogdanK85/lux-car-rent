import {
  CarCard,
  CarElementStyled,
  ImageBox,
  Img,
  InfoContainer,
  InfoElement,
  InfoList,
  InfoListBox,
  LearnBtn,
  Title,
  TitleBox,
} from './CarElement.styled';

export const CarElement = ({ car, index }) => {
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

  return (
    <CarElementStyled key={id}>
      <CarCard>
        <ImageBox>
          <Img
            src={
              //   "../../images/hyundai_tucson.jpg"
              img ? img : '../../images/image_not_available.png'
            }
            alt="car"
          />
          {/* <Heart>
            <use href={`${sprite}#icon-heart`} />
          </Heart> */}
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
      <LearnBtn>Learn More</LearnBtn>
    </CarElementStyled>
  );
};
