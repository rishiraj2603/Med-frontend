import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import SearchMed from "./SearchMed";

const Navbar = ({ getData }) => {
  return (
    <div className={`${styles.main} rounded-full grid grid-cols-3 `}>
      <div className="flex m-3 ">
        <img src="/logo.png" alt="Logo" className={`${styles.logo}`} />
        <Link
          to="/Medicine"
          className={`${styles.heading} flex m-3 align-middle `}
        >
          Medicine Vault{" "}
        </Link>
      </div>
      <div className={`${styles.search} m-3`}>
        <SearchMed getData={getData}></SearchMed>
      </div>
      <div className={`${styles.links} m-3 text-xl`}>
        <div className="flex items-center float-right gap-8 m-5 mx-16 w-fit">
          <Link to="/">Home</Link>
          <div>
            <Link to="/login">Login</Link>
            <h1>Logout</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
