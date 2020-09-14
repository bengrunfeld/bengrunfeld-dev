import { useState } from "react";
import { Overlay } from "../";
import { Container, Link } from "./Project.styles";

type PropsType = {
  title: string;
  link: string;
  children: string;
  img: string;
};

const Project = ({ title, img, link, children }: PropsType) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <Link
      href={link}
      target="_blank"
      title={title}
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <Container img={img}>
        <Overlay title={title} showOverlay={showOverlay}>
          {children}
        </Overlay>
      </Container>
    </Link>
  );
};

export default Project;
