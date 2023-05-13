import React from "react";
import "./Team.css";
import UserCard from "./UserCard";
import { useDispatch } from "react-redux";
import { clearSelectedUsers, deselectUser } from "../appStore/userSlice";

const Team = ({ users, onDeSelect }) => {
  const dispatch = useDispatch();
  // Function to handle remove all selected user
  const haddleRemoveUsers = () => {
    dispatch(clearSelectedUsers());
  };

  // Function to handle deselection of perticular user
  const handleUserDeSelect = (id) => {
    dispatch(deselectUser(id));
  };

  return (
    <div className="team" id="team-list">
      <h2>Team Details</h2>
      <button className="btn" onClick={haddleRemoveUsers}>
        remove ALL
      </button>
      <ul>
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onDeSelect={handleUserDeSelect}
            isSelected={true}
          />
        ))}
      </ul>
    </div>
  );
};

export default Team;
