import { Link, Redirect, useParams } from "react-router-dom";

import { DetailWrapper } from "../styles";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

const ClassDetail = () => {
  const user = useSelector((state) => state.authReducer.user);
  const classSlug = useParams().classSlug;
  const _classes = useSelector((state) => state.classReducer.classes);
  const _class = useSelector((state) =>
  state.classReducer.classes.find((_class) => _class.slug === classSlug)
  );
  const handleChange = () => {
    if(user.booked<3){
     user.booked= user.booked+ 1;
     console.log(user.booked);
    }else{
      alert("nooooooob")
    }


  };

  if (!_class) return <Redirect to="/class" />;
  return (
    <DetailWrapper className="text-left">
      <Helmet>
        <title>{_class.name}</title>
      </Helmet>
      <h1>{_class.name}</h1>
      <img src={_class.image} alt={_class.name} />
      <p className="text-danger">{_class.price} USD</p>
      <p>{_class.numberOfSeats}</p>
      <p>{_class.time}</p>
      <p>{_class.date}</p>
      <Link to= "/gym">
      <button className="btn btn-outline-info" >Go back home!</button>
      </Link>
      <Link to= "/gym">
      <button className="btn btn-outline-info" onClick={handleChange}>join</button>
      </Link>
      
    </DetailWrapper>
  );
};

export default ClassDetail;