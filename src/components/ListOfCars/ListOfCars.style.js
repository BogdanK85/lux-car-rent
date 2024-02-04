import { styled } from 'styled-components';

export const ListOfCarsStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
  column-gap: 15px;
  row-gap: 20px;
  /* background: aqua; */

  @media screen and (min-width: 768px) {
    row-gap: 30px;
    column-gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    row-gap: 50px;
    column-gap: 29px;
  }
`;

export const LoadMore = styled.p`
  display: ${props => props.display || 'block'};
  color: rgba(52, 112, 255, 1);
  font-size: 16px;
  font-weight: 500;
  text-decoration-line: underline;
  text-align: center;
  margin: 0 auto;
  padding: 15px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: rgba(11, 68, 205, 1);
  }
`;
