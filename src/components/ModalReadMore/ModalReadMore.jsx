import {
  Button,
  InfoElement,
  InfoList,
  InfoListBox,
} from 'components/CarElement/CarElement.styled';
import { makeComaInMileage } from 'helpers/makeComaInMileage';
import { makeNumberFromPrice } from 'helpers/MakeNumberFromPrice';
import {
  Block,
  ConditionsItem,
  ConditionsList,
  Description,
  ModalCard,
  ModalCarWrap,
  ModalDescriptionWrap,
  ModalImg,
  ModalImgWrap,
  ModalTitleH3,
  ModalTitleH4,
  Span,
} from './ModalReadMore.styled';

export const ModalReadMare = ({ car }) => {
  const {
    id,
    make,
    model,
    year,
    img,
    rentalPrice,
    mileage,
    type,
    functionalities,
    address,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
  } = car;

  const addressInfo = address?.split(', ').slice(-2);
  const arrOfConditions = rentalConditions.split('\n');

  const age = conditionsWithAge => {
    const conditionsWithEgeArr = conditionsWithAge.split(': ');
    return conditionsWithEgeArr;
  };

  return (
    <ModalCarWrap key={id}>
      <ModalCard>
        <ModalImgWrap>
          <ModalImg
            src={img ? img : '../../images/image_not_available.png'}
            alt={make}
          />
        </ModalImgWrap>
        <ModalDescriptionWrap>
          <Block>
            <ModalTitleH3>
              {make}
              <Span>{model}</Span>, {year}
            </ModalTitleH3>
            <InfoListBox>
              <InfoList>
                <InfoElement>{addressInfo[0]}</InfoElement>
                <InfoElement>{addressInfo[0]}</InfoElement>
                <InfoElement>Id: {id}</InfoElement>
                <InfoElement>Year: {year}</InfoElement>
                <InfoElement>Type: {type}</InfoElement>
              </InfoList>
              <InfoList>
                <InfoElement>Fuel Consumption: {fuelConsumption}</InfoElement>
                <InfoElement>Engine Size: {engineSize}</InfoElement>
              </InfoList>
            </InfoListBox>
            <Description>{description}</Description>
          </Block>
          <Block>
            <ModalTitleH4>Accessories and functionalities: </ModalTitleH4>
            <InfoListBox>
              <InfoList>
                {accessories?.map((item, index) => (
                  <InfoElement key={`accessory_${index}`}>{item}</InfoElement>
                ))}
              </InfoList>
              <InfoList>
                {functionalities?.map((item, index) => (
                  <InfoElement key={`functionality_${index}`}>
                    {item}
                  </InfoElement>
                ))}
              </InfoList>
            </InfoListBox>
          </Block>
          <Block>
            <ModalTitleH4>Rental Conditions:</ModalTitleH4>
            <InfoListBox $gap="8px">
              <ConditionsList>
                <ConditionsItem>
                  {age(arrOfConditions[0])[0]}:
                  <Span>{age(arrOfConditions[0])[1]}</Span>
                </ConditionsItem>
                <ConditionsItem>{arrOfConditions[1]}</ConditionsItem>
              </ConditionsList>
              <ConditionsList>
                <ConditionsItem>{arrOfConditions[2]}</ConditionsItem>
                <ConditionsItem>
                  Mileage: <Span>{makeComaInMileage(mileage)}</Span>
                </ConditionsItem>
                <ConditionsItem>
                  Price: <Span>{makeNumberFromPrice(rentalPrice)}$</Span>
                </ConditionsItem>
              </ConditionsList>
            </InfoListBox>
          </Block>
        </ModalDescriptionWrap>
      </ModalCard>
      <Button
        width="168px"
        onClick={() => (window.location.href = 'tel:+3809700000000')}
      >
        Rental car
      </Button>
    </ModalCarWrap>
  );
};
