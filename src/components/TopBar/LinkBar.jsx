import React from "react";
import { Link } from "react-router-dom";
const LinkBar = ({ medicineName }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Medicine">All Medicine</Link>
        </li>
        <li>
          <Link to={`/medicine/`}>Medicine details</Link>
        </li>
      </ul>
    </nav>
  );
};

export default LinkBar;
