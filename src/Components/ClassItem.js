import { Link } from "react-router-dom";
import { ProductWrapper } from "../styles";
const ClassItem = ({ _class }) => {
  return (
    <ProductWrapper>
    <Link to={`/class/${_class.slug}/`}>
      <img alt={_class.name} src={_class.image} />
    </Link>
    <p>{_class.name}</p>
    <p>{_class.type}</p>

  </ProductWrapper>
  );
};
export default ClassItem;