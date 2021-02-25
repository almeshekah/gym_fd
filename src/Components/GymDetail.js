import { Link, Redirect, useParams } from "react-router-dom";
import { BsPlusSquare } from "react-icons/bs";

import { DetailWrapper } from "../styles";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import ClassList from "./ClassList";

const GymDetail = () => {
  const user = useSelector((state) => state.authReducer.user);
  const gymSlug = useParams().gymSlug;
  const allClass =useSelector((state) => state.classReducer.classes);
  const gym = useSelector((state) =>
    state.gymReducer.gyms.find((gym) => gym.slug === gymSlug)
  );

  const clases = gym.classes.map((_class) =>
  allClass.find((_product) => _product.id === _class.id)
  );

  if (!gym) return <Redirect to="/gym" />;
  return (
    <>
      <DetailWrapper className="text-left">
        <Helmet>
          <title>{gym.name}</title>
        </Helmet>
        <h1>{gym.name}</h1>
        <img src={gym.image} alt={gym.name} />
      </DetailWrapper>
      {user.isAdmin  ? (
        <Link to={`/gym/${gym.id}/class/new`}>
          <BsPlusSquare className="float-right" size="2em" />
        </Link>
      ):(<p>hii</p>)}
      <ClassList _classes={clases} />
    </>
  );
};

export default GymDetail;