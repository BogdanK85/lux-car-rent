import headerLogo from '../../images/logo-car.png';
import { Logo, Header, NavigationStyle, NavLinkStyled } from './Header.styled';

export const HeaderWrap = () => {
  return (
    <Header>
      <Logo>
        <img src={headerLogo} alt="Header Logo" width="85" />
      </Logo>
      <NavigationStyle>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="catalog">Catalog</NavLinkStyled>
        <NavLinkStyled to="favorites">Favorites</NavLinkStyled>
      </NavigationStyle>
    </Header>
  );
};
