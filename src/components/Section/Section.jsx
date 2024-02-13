import { Container, SectionStyle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionStyle>
      <Container $top="50px">
        {/* <SectionTitle>{title}</SectionTitle> */}
        {children}
      </Container>
    </SectionStyle>
  );
};
