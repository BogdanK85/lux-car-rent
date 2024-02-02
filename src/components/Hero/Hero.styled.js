import { styled } from 'styled-components';
import bgImage from '../../images/rent-car-hero.png';

export const HeroBox = styled.div`
  background-color: rgb(255, 240, 29);
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: 50% 10%;
  background-size: auto;
  display: flex;
  width: 100%;
  height: calc(81vh - 65px);
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 20px;
  padding: 10px 10px 100px 10px;
`;

export const HeroTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  width: 100%;
  text-align: center;
  color: #0400ee;
`;
export const HeroBtn = styled.button`
  padding: 12px 50px;
  width: 168px;
  height: 44px;
  color: #fff;
  background: rgba(52, 112, 255, 1);
  cursor: pointer;
  font-weight: 700;
  border-radius: 12px;
  text-transform: uppercase;
  margin: 25px;
  overflow: hidden;
  position: relative;
  transition: background 0.3s ease-in-out;
  border: none;

  &::before {
    content: '';
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    background: radial-gradient(
      circle at right,
      transparent,
      #00fffc,
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.5s;
    position: absolute;
  }

  &:hover {
    background: rgba(11, 68, 205, 1);
    color: #ff00ff;
    box-shadow: 0 0 20px 5px #00fffc;

    &::before {
      transform: translateX(0);
    }
  }
`;
