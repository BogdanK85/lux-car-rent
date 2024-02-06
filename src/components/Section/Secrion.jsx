import { Container, SectionStyle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionStyle>
      <Container>
        {/* <SectionTitle>{title}</SectionTitle> */}
        {children}
      </Container>
    </SectionStyle>
  );
};
