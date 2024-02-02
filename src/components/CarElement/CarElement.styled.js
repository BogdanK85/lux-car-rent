import { styled } from 'styled-components';

export const CarElementStyled = styled.li`
display: flex;
  width: 100%;
  width: 150px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex-basis: calc((100% -1 * 15px) / 2);
  gap: 17px;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 2 * 20px) / 3);
    gap: 20px;
    width: 210px;
  }

  @media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 2 * 20px) / 3);
    width: 274px;
    height: 426px
    gap: 29px;
  }`;

export const CarCard = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex-basis: calc((100% -1 * 15px) / 2);
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }
    @media screen and (min-width: 1440px) {
    width: 274px;
    height: 354px
    gap: 14px;
  }
`;
export const ImageBox = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 146px;
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
  height: 146px;
  position: absolute;
  object-fit: cover;
  object-position: center;
  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );
  transition: transform 0.5s cubic-bezier(0.3, 0, 0.3, 1);
  &hover: {
    transform: scale(1.2);
  }
  @media screen and (min-width: 768px) {
    height: 204px;
  }
  @media screen and (min-width: 1440px) {
    height: 268px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-directioc: column;
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
  font-size: inherit;
  font-weight: inherit;
  line-heit: 24px;
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
  color: rgba(138, 138, 137, 1);
  white-space: nowrap;
  overflow-x: ${props => props.$overflow || 'hidden'};
  overflow-y: hidden;
`;
export const InfoElement = styled.li`
  color: rgba(138, 138, 137, 1);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  padding-right: 6px;
  margin-right: 6px;
  border-right: 1px solid rgba(18, 20, 23, 0.1);
  flex-shrink: 0;

  &:last-child {
    border-right: none;
    padding-right: 0px;
    margin-right: 0px;
    flex-shrink: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const LearnBtn = styled.button`
  display: flex;
  justify-content: center;
  height: 44px;
  width: ${props => props.width || '100%'};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  border-radius: 12px;
  padding: 12px;
  background: rgba(52, 112, 255, 1);
  color: rgba(255, 255, 255, 1);

  &:hover,
  &:focus {
    background: rgba(11, 68, 205, 1);
  }
`;
