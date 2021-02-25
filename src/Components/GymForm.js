import { useState } from "react";
import { BackButtonStyled, CreateButtonStyled, ListWrapper } from "../styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addGym } from "../store/actions/gymActions";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
const GymForm = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const [gym, setGym] = useState({
    name: "",
    image: "",
  });

  const handleChange = (event) => {
    setGym({ ...gym, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addGym(gym));
    history.push("/gym");
  };

  const handleImage = (event) =>
    setGym({ ...gym, image: event.target.files[0] });

  return (
    <>
      <Helmet>
        <title>Create GYM</title>
      </Helmet>
      <ListWrapper> Create GYM </ListWrapper>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter gym name"
            className="form-control"
            value={gym.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            name="image"
            placeholder="Enter gym image url"
            className="form-control"
            onChange={handleImage}
          />
        </div>

        <CreateButtonStyled onSubmit={handleSubmit}>Create</CreateButtonStyled>
        <Link to="/categories">
          <BackButtonStyled>Back</BackButtonStyled>
        </Link>
      </form>
    </>
  );
};

export default GymForm;