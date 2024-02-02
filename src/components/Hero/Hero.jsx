import { HeroBox, HeroBtn, HeroTitle } from './Hero.styled';

export const Hero = () => {
  return (
    <HeroBox>
      <HeroTitle>Best car rental service</HeroTitle>
      <HeroBtn to="/catalog">Catalog</HeroBtn>
    </HeroBox>
  );
};
