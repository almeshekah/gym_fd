import { useState } from "react";
import { BackButtonStyled, CreateButtonStyled, ListWrapper } from "../styles";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addClass } from "../store/actions/classActions";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
const ClassForm = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const { gymId } = useParams();

  const [_class, setClass] = useState({
    gymId: gymId,
    numberOfSeats :"",
    name: "",
    image: "",
    price:"",
    date:"",
    time:"",
    type:"",

  });

  const handleChange = (event) => {
    setClass({ ..._class, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addClass(_class));
    history.push("/gym");
  };

  const handleImage = (event) =>
  setClass({ ..._class, image: event.target.files[0] });

  return (
    <>
      <Helmet>
        <title>Create Class</title>
      </Helmet>
      <ListWrapper> Create Class </ListWrapper>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter class name"
            className="form-control"
            value={_class.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>numberOfSeats</label>
          <input
            type="number"
            name="numberOfSeats"
            placeholder="Enter class numberOfSeats"
            className="form-control"
            value={_class.numberOfSeats}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>price</label>
          <input
            type="number"
            name="price"
            placeholder="Enter class price"
            className="form-control"
            value={_class.price}
            onChange={handleChange}
          />
        </div>
        
        <label for="example-date-input" className="col-form-label">
        date:
      </label>
      <div className="col-7 mx-auto">
        <input
          className="form-control"
          name="date"
          type="date"
          value={_class.date}
          onChange={handleChange}
          id="example-date-input"
        />
      </div>
      <div className="form-group">
          <label>time</label>
          <input
            type="text"
            name="time"
            placeholder="Enter class time"
            className="form-control"
            value={_class.time}
            onChange={handleChange}
          />
        </div>
        <div className="form-outline mb-3">
        <label className="col-form-label">type:</label>
        {"  "}
        <select
          className="form-select mx-auto"
          aria-label="Default select example"
          name="type"
          onChange={handleChange}
          value={_class.type}
        >
          <option value="" selected>
            Select type
          </option>
          <option value="YOGA">YOGA</option>
          <option value="FULL BODY FUSION">FULL BODY FUSION</option>
          <option value="CIRCUIT TRAINING">CIRCUIT TRAINING</option>
        </select>
      </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            name="image"
            placeholder="Enter class image url"
            className="form-control"
            onChange={handleImage}
          />
        </div>
        <CreateButtonStyled onSubmit={handleSubmit}>Create</CreateButtonStyled>
        <Link to="/ingredients" style={{ textDecoration: "none" }}>
          <BackButtonStyled>Back</BackButtonStyled>
        </Link>
      </form>
    </>
  );
};

export default ClassForm;