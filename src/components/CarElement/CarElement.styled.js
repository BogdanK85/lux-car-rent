import { styled } from 'styled-components';

export const CarElementStyled = styled.li`
display: flex;
  width: 100%;
  width: 150px;
  flex-direction: column;
  /* align-items: flex-start; */
  margin: 0;
  justify-content: space-between;
  flex-basis: calc((100% - 1 * 16px) / 2);
  gap: 17px;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 2 * 20px) / 3);
    gap: 20px;
    width: 210px;
  }

  @media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 3 * 29px) / 4);
    width: 274px;
    height: 426px
    gap: 28px;
  }`;

export const CarCard = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex-basis: calc((100% -1 * 16px) / 2);
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 2 * 20px) / 3);
    width: 209px;
    gap: 10px;
  }
  @media screen and (min-width: 1440px) {
    width: 274px;
    height: 354px;
    flex-basis: calc((100% - 3 * 29px) / 4);
    gap: 14px;
  }
`;
export const ImageBox = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 146px;
  object-fit: cover;
  border-radius: 14px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    height: 204px;
  }
  @media screen and (min-width: 1440px) {
    height: 268px;
  }
`;

export const Img = styled.img`
  position: absolute;
  height: 146px;
  top: 0;
  right: -37px;
  /* width: 100%;  */
  /* height: 100%; */
  margin: 0;
  padding: 0;
  /* object-fit: cover; */
  /* object-position: center; */
  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );
  transition: transform 0.5s cubic-bezier(0.3, 0, 0.3, 1);
  &:hover {
    transform: scale(1.2);
  }
  @media screen and (min-width: 768px) {
    height: 204px;
    right: -50px;
  }
  @media screen and (min-width: 1440px) {
    height: 268px;
    right: -65px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;
export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  font-size: 12px;
  font-weight: 500;
  align-items: center;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;
export const Title = styled.div`
  display: flex;
  font-size: inherit;
  font-weight: inherit;
  line-height: 24px;
  > span {
    color: rgba(52, 112, 255, 1);
  }
`;
export const InfoListBox = styled.div`
  display: flex;
  flex-direction: column;
  height: ${props => props.height || 'auto'};
  gap: ${props => props.gap || '4px'};
`;
export const InfoList = styled.ul`
  display: inline-flex;
  height: 18px;
  gap: 6px;
  padding: 0px;
  color: rgba(138, 138, 137, 1);
  white-space: nowrap;
  overflow-x: ${props => props.overflow || 'hidden'};
  overflow-y: hidden;
  list-style-type: none;
`;
export const InfoElement = styled.li`
  color: rgba(138, 138, 137, 1);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  padding-right: 6px;
  /* margin-right: 3px; */
  /* gap: 6px; */
  border-right: 1px solid rgba(18, 20, 23, 0.1);
  flex-shrink: 0;
  position: relative;

  &:not(:first-child) {
    &:before {
      content: '';
      position: absolute;
      top: 80%;
      right: -8px;
      /* transform: translateY(-50%); */
      height: 70%;
      width: 1px;
      background-color: rgba(18, 20, 23, 0.1);
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  height: 44px;
  width: ${props => props.width || '100%'};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  border-radius: 12px;
  border: none;
  padding: 12px;
  background: rgba(52, 112, 255, 1);
  color: rgba(255, 255, 255, 1);

  &:hover,
  &:focus {
    background: rgba(11, 68, 205, 1);
  }
`;

export const Heart = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  fill: ${props => props.fill || 'none'};
  stroke: ${props => props.stroke || 'var(--color-text-button-and-back)'};
  display: inline-block;
  width: 18px;
  height: 18px;
`;
