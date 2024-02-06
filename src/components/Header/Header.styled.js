import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
  padding: 10px 0;
  margin-bottom: 0px;
  border-bottom: 1px solid #00fffc;
  background-color: #96b5fc;
`;
export const Logo = styled.div`
  width: 130px;
`;
export const NavigationStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  /* list-style: none; */
  gap: 10px;
`;
export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: beige;
  padding: 7px;
  &:hover,
  &:focus {
    color: #0400ee;

    &active {
      color: #0400ee;
    }
  }
`;
