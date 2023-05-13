import React from "react";
import { Link } from "@mui/material";
import "./Header.css";

const Header = ({ selectedUsers }) => {
  return (
    <div className="header">
      <div className="left">Kc</div>
      <div className="right">
        <ul className="links">
          {selectedUsers.length > 0 && (
            <li>
              <Link href="#team-list">Team</Link>
            </li>
          )}
          <li>
            <Link href="#user-list">UserList</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
