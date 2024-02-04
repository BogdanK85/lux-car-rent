import { styled } from 'styled-components';

export const SectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: ${props => props.$url || 'none'};
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
`;

export const SectionTitle = styled.h2`
  color: biege;
  font-sise: 24px;
  font-weight: 600;
  margin-bottom: 45px;
`;
