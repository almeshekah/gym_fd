
import { useState } from "react";
import { signup } from "../store/actions/authActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, history));
  };

  return (
    <div className="container">
      <h3>Signup</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            name="username"
            value={user.username}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            value={user.password}
            type="password"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input
              type="text"
              name="firstName"
              className="form-control"
              value={user.firstName}
              onChange={handleChange}
            />
        </div>
        <div className="form-group">
          <label> Last Name:</label>
          <input
              type="text"
              name="lastName"
              className="form-control"
              value={user.lastName}
              onChange={handleChange}
            />
        </div>
        <div className="form-group">
          <label>  Email</label>
          <input
              type="email"
              name="email"
              className="form-control"
              value={user.email}
              onChange={handleChange}
            />
        </div>
        <button  class="btn btn-secondary " type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;