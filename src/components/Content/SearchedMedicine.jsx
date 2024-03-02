import React, { useState } from "react";
import BackgroundImage from "../TopBar/BackgroundImage";
import { Link } from "react-router-dom";
import style from "./SearchedMedicine.module.css";
import Navbar from "../TopBar/Navbar";
const SearchedMedicine = () => {
  const [med, setMed] = useState([]);

  function getData(med) {
    setMed(med);
  }
  return (
    <div>
      <Navbar getData={getData}></Navbar>
      <br />
      <br />
      <br />
      <br />
      <br />
      {med.map((e) => (
        <OneMedicine key={e.generic_id} medicine={e} />
      ))}
    </div>
  );
};

const OneMedicine = ({ medicine }) => {
  const { generic_name, side_effect, indication, generic_id } = medicine;
  return (
    <>
      <div class={style.table}>
        <Link to={`/medicine/${generic_id}`} className={style.heading}>
          {generic_name}
        </Link>
        <div class={style.block}>
          <p className="m-3">Indication: {indication}</p>
        </div>
        <div class={style.block}>
          <p className="m-3">Side Effect: {side_effect}</p>
        </div>
        <br />
        <h3 className="flex ">
          For more details
          <Link to={`/medicine/${generic_id}`} className="font-bold underline">
            Click Here
          </Link>
          Or Click On <p className="font-bold underline"> Medicine Name</p>
        </h3>
      </div>
    </>
  );
};

export default SearchedMedicine;
