import { Project } from "../";
import { Container } from "./ProjectList.styles";

const ProjectList = () => (
  <Container>
    <Project
      title="Discovery Channel"
      link="https://discovery.com"
      img="discovery-2.jpg"
    >
      Helped with their Video On Demand product.
    </Project>
    <Project title="Bared Footwear" link="https://bared.com.au" img="bared.jpg">
      Created an eventing system for their internal dashboard.
    </Project>
    <Project
      title="Ethical Jobs"
      link="https://www.ethicaljobs.com.au/"
      img="ethicaljobs.jpg"
    >
      Redesigned their corporate website.
    </Project>
    <Project title="Audi" link="https://www.audiusa.com" img="audi.jpg">
      Developed interactive elements for the online store.
    </Project>
    <Project title="Credible" link="https://credible.com" img="credible.jpg">
      Rolled out new features and helped fix security holes.
    </Project>
    <Project
      title="Tetra Tech"
      link="https://tetratech.com"
      img="tetratech.jpg"
    >
      Initiate and manage a data science project.
    </Project>
  </Container>
);

export default ProjectList;
