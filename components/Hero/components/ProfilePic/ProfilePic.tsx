import { Container, Image } from "./ProfilePic.styles";

type ProfilePicProps = {
  src: string;
};

const ProfilePic = ({ src }: ProfilePicProps) => (
  <Container>
    <Image src={src} />
  </Container>
);

export default ProfilePic;
