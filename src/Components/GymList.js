// Styling
import { ListWrapper } from "../styles";
// Components
import { useState } from "react";
import GymItem from "./GymItem";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const GymList = ({ gyms }) => {
  const gymList = gyms.map((gym) => <GymItem gym={gym} key={gym.id} />);
  const user = useSelector((state) => state.authReducer.user);

  return (
    <div>
      {user.isAdmin  ? (
       
          <Link to="/create/gym">
            <button
              type="button"
              className="btn btn-dark "
              style={{ position: "absolute", left: "900px", top: "150px" }}
            >
              Create Gym
            </button>
          </Link>
          ):("")}
       
      
      <ListWrapper>{gymList}</ListWrapper>
    </div>
  );
};

export default GymList;