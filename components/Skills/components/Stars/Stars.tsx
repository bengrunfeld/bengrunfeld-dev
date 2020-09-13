import Star from "./Star";
import { Container } from "./Stars.styles";

type PropTypes = {
  stars: string;
};

const createStarsArr = stars => {
  const allStars = 5;
  const filledStars = parseInt(stars);

  const arr = Array(allStars).fill(false);

  return arr.map((item, i) => (i < filledStars ? true : false));
};

const Stars = ({ stars }: PropTypes) => {
  const starsArray = createStarsArr(stars);

  return (
    <Container>
      {starsArray.map((item, i) => (
        <Star key={Math.random() + i} filled={item} />
      ))}
    </Container>
  );
};

export default Stars;
