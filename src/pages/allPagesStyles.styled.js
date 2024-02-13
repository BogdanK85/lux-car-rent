import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const EmptyPage = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  font-size: 22px;
  font-weight: 600;
  margin: 0 auto;
  color: rgba(18, 20, 23, 1);

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 40px;
  }
`;

export const LinkStyled = styled(Link)`
  color: var(color-button);
`;
