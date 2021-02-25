import { Link } from "react-router-dom";
import { ProductWrapper } from "../styles";
const GymItem = ({ gym }) => {
  return (
    <ProductWrapper>
    <Link to={`/gym/${gym.slug}/`}>
      <img alt={gym.name} src={gym.image} />
    </Link>

    <p>{gym.name}</p>
  </ProductWrapper>
  );
};
export default GymItem;