import { useState } from "react";
import { signin } from "../store/actions/authActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Signin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(user, history));
  };

  return (
    <div className="container" >
      <h3>Signin</h3>
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
        <button  class="btn btn-secondary "type="submit"  >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Signin;