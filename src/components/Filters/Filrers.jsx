import { CloseBtnWrapper } from 'components/ModalWindowWrap/ModalWindowWrap.styled';
import { makeComaInMileage } from 'helpers/makeComaInMileage';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { filterSet } from 'redux/filterSlice';
import { selectCarsBrands } from 'redux/selectors';
import sprite from '../../images/sprite.svg';
import {
  Blink,
  ButtonSearch,
  FalseInput,
  firstSelectStyles,
  Form,
  Input,
  InputWrap,
  Label,
  secondSelectStyles,
  WrapSecondInput,
} from './Filter.styled';

export const options = {
  svgSize: '42px',
  position: 'center-center',
  timeout: 5000,
};

export const Filters = () => {
  const dispatch = useDispatch();
  const carBrands = useSelector(selectCarsBrands);

  const [brand, setBrand] = useState({ value: 'all', label: 'enter the text' });
  const [toPrice, setToPrice] = useState({ value: 'all', label: '' });
  const [mileageTo, setMileageTo] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageToWithComa, setMileageToWithComa] = useState('');
  const [mileageFromWistComa, setMileageFromWithComa] = useState('');

  const pricesArray = [{ value: 'all', label: 'All price' }];
  for (let index = 10; index < 301; index += 10) {
    pricesArray.push({ value: index, label: index });
  }

  const onClickSearch = () => {
    if (
      (mileageFrom.length > 0 && mileageTo.length === 0) ||
      (mileageFrom.length === 0 && mileageTo.length > 0)
    ) {
      Report.failure(
        'Failere',
        'Please fill in both search fields by car mileage',
        'Okay',
        options
      );
      return;
    }

    if (
      mileageFrom !== '' &&
      mileageTo !== '' &&
      parseInt(mileageFrom) >= parseInt(mileageTo)
    ) {
      Report.failure(
        'Failure',
        'Mileage "From" must be less than mileage "To"',
        'Okay',
        options
      );
      return;
    }

    const commonFilter = {
      brand: brand.value,
      priceTo: toPrice.value,
      mileage: {
        from: mileageFrom,
        to: mileageTo,
      },
    };
    dispatch(filterSet(commonFilter));
  };

  const handleChange = evt => {
    const { value } = evt.target;
    const valueWithComa = makeComaInMileage(value);

    switch (evt.target.name) {
      case 'mileageFrom':
        setMileageFrom(value);
        setMileageFromWithComa(valueWithComa);
        break;
      case 'mileageTo':
        setMileageTo(value);
        setMileageToWithComa(valueWithComa);
        break;
      default:
        break;
    }
  };

  const onClickResetMileage = inputName => {
    switch (inputName) {
      case 'mileageFrom':
        setMileageFrom('');
        setMileageFromWithComa('');
        break;
      case 'mileageTo':
        setMileageTo('');
        setMileageToWithComa('');
        break;
      default:
        break;
    }
  };

  const onClickResetAll = () => {
    setBrand({ value: 'all', label: 'Enter the text' });
    setToPrice({ value: 'all', label: '' });
    setMileageTo('');
    setMileageFrom('');
    setMileageToWithComa('');
    setMileageFromWithComa('');
    onClickSearch();
  };

  return (
    <Form>
      <Label>
        Car brand
        <Select
          onChange={setBrand}
          options={carBrands}
          isSearcheble
          placeholder="Enter the text"
          styles={firstSelectStyles}
          value={brand}
        />
      </Label>
      <Label>
        Price/ 1 hour
        <Select
          onChange={setToPrice}
          options={pricesArray}
          isSearchable
          placeholder=""
          styles={secondSelectStyles}
          value={toPrice}
        />
        <FalseInput $left="18px">To</FalseInput>
        <FalseInput $left="75px">$</FalseInput>
      </Label>
      <InputWrap>
        <Label>
          Car mileage / km
          <Input
            type="number"
            pattern="[0-9]{1,5}"
            title="Only numbers. From 1 to 5 digits. Minimum value of 1 km"
            name="mileageFrom"
            value={mileageFrom}
            onChange={handleChange}
            min="1"
            max="99998"
            $radius="14px 0px 0px 14px"
            $border="1px solid rgba(138, 138, 137, 0.20)"
          />
          <span></span>
          <FalseInput>
            From {mileageFromWistComa}
            {mileageFromWistComa.length > 0 && <Blink></Blink>}
          </FalseInput>
          {mileageFrom.length > 0 && (
            <CloseBtnWrapper
              $top="38px"
              $right="6px"
              onClick={() => onClickResetMileage('mileageFrom')}
            >
              <use href={`${sprite}#icon-x`} />
            </CloseBtnWrapper>
          )}
        </Label>
        <WrapSecondInput>
          <Input
            type="number"
            pattern="[0-9]{1,5}"
            title="Only numbers. From 1 to 5 digits. Mininmum value of 1 km"
            name="mileageTo"
            value={mileageTo}
            onChange={handleChange}
            min="1"
            max="99999"
            $radius="0px 14px 14px 0px"
            $padding="14px 14px 14px 48px"
          />
          <span></span>
          <FalseInput>
            To {mileageToWithComa}
            {mileageFromWistComa.length > 0 && <Blink></Blink>}
          </FalseInput>
          {mileageTo.length > 0 && (
            <CloseBtnWrapper
              $top="20px"
              $right="14px"
              onClick={() => onClickResetMileage('mileageTo')}
            >
              <use href={`${sprite}#icon-x`} />
            </CloseBtnWrapper>
          )}
        </WrapSecondInput>
      </InputWrap>
      {(brand.value !== 'all' ||
        toPrice.value !== 'all' ||
        mileageFrom !== '' ||
        mileageTo !== '') && (
        <ButtonSearch type="button" onClick={onClickResetAll}>
          Reset
        </ButtonSearch>
      )}
      <ButtonSearch type="button" onClick={onClickSearch}>
        Search
      </ButtonSearch>
    </Form>
  );
};
