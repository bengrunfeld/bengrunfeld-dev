import { PLACEHOLDER_IMG_URL } from "../../assets/constants";

import { Container, Image } from "./UserProfilePic.styles";

const UserProfilePic = () => (
  <Container>
    <Image src={PLACEHOLDER_IMG_URL} alt="User profile picture" />
  </Container>
);

export default UserProfilePic;
