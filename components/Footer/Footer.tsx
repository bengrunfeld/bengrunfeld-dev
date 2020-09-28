import { InnerPageWrapper, BigTitle, SubTitle, Line } from "../";
import { ContactLinks } from "./components";
import { Container } from "./Footer.styles";

const Footer = () => (
  <Container>
    <InnerPageWrapper>
      <BigTitle white={true} centered={true}>
        Contact
      </BigTitle>
      <SubTitle>
        &quot;Talent hits a target no one else can hit. Genius hits a target no
        one else can see.&quot;
      </SubTitle>
      <SubTitle>– Arthur Schopenhauer</SubTitle>
      <Line />
      <ContactLinks />
    </InnerPageWrapper>
  </Container>
);

export default Footer;
