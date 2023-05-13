import React from "react";
import "./UserCard.css";
const UserCard = ({ user, onSelect, isSelected, onDeSelect }) => {
  const {
    id,
    first_name,
    last_name,
    email,
    gender,
    avatar,
    domain,
    available,
  } = user;

  const handleUserClick = () => {
    onSelect(user);
    isSelected = true;
  };

  const handleUserDeSelect = () => {
    onDeSelect(user.id);
    isSelected = false;
  };

  return (
    <div className={`user-card ${isSelected ? "selected" : ""}`}>
      <div className="user-info">
        <img src={avatar} alt="User Avatar" />
        <h3>
          {first_name} {last_name}
        </h3>
      </div>
      <div className="card-body">
        <p>Email : {email}</p>
        <p>Gender: {gender}</p>
        <p>Domain: {domain}</p>
        <p>Availability: {available ? "Available" : "Not Available"}</p>
        {isSelected ? (
          <button className="btn" onClick={handleUserDeSelect}>
            Remove
          </button>
        ) : (
          <button className="btn" onClick={handleUserClick}>
            Select
          </button>
        )}
      </div>
    </div>
  );
};

export default UserCard;
