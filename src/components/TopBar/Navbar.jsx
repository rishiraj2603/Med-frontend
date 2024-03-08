import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import SearchMed from "./SearchMed";

const Navbar = () => {
  return (
    <div className={`${styles.main} rounded-full grid grid-cols-3 `}>
      <div className="flex m-3 ">
        <img src="/logo.png" alt="Logo" className={`${styles.logo}`} />
        <Link
          to="/Medicine"
          className={`${styles.heading} flex m-3 align-middle `}
        >
          <a href="#top">Medicine Vault</a>
        </Link>
      </div>
      <div className={`${styles.search} m-3`}>
        <SearchMed></SearchMed>
      </div>
      <div className={`${styles.links} m-3`} style={{ fontSize: "20px" }}>
        <div className="flex items-center float-right gap-8 m-5 mx-16 w-fit">
          <Link to="/">
            <a href="#top"> Home</a>
          </Link>
          <div>
            <Link to="/login">
              <a href="#top"> Login</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
