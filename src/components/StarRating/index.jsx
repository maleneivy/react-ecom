
import { EmptyStarIcon, FilledStarIcon, HalfFilledStarIcon } from './index.styles';

const StarRating = ({ rating, totalStars }) => {
  const stars = [];
  for (let i = 0; i < totalStars; i++) {
    if (rating >= i + 1) {
      stars.push(<FilledStarIcon key={i} />);
    } else if (rating > i) {
      stars.push(<HalfFilledStarIcon key={i} />);
    } else {
      stars.push(<EmptyStarIcon key={i} />);
    }
  }
  return <div>{stars}</div>;
};

export default StarRating;
