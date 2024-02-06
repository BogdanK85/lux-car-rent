import { HeroBox, HeroLink, HeroTitle } from './Hero.styled';

export const Hero = () => {
  return (
    <HeroBox>
      <HeroTitle>Best car rental service</HeroTitle>
      <HeroLink to="/catalog">Catalog</HeroLink>
    </HeroBox>
  );
};
