import React, { useEffect, useState } from "react";
import axios from "axios";
import BackgroundImage from "../TopBar/BackgroundImage";
import { useParams } from "react-router-dom";
import Fuse from "fuse.js";
import style from "./GetOneMed.module.css";
import { BACKEND_URL } from "../../constants/url";
const GetOneMed = () => {
  const params = useParams();
  const generic_id = params.medicineId;
  const [med, setMed] = useState([]);
  async function getMedData() {
    const res = await axios.get(`${BACKEND_URL}/medicine/${generic_id}`);
    setMed(res.data[0]);
  }
  const fuse = new Fuse(med, {
    key: generic_id,
  });
  useEffect(() => {
    getMedData();
  }, []);
  console.log(med);

  return (
    <div>
      <BackgroundImage></BackgroundImage>
      <OneMedicine key={generic_id} medicine={med} />
    </div>
  );
};

const OneMedicine = ({ medicine, onClicking }) => {
  const {
    generic_name,
    side_effect,
    interaction,
    mode_of_action,
    indication,
    dose,
    contra_indication,
    precaution,
  } = medicine;

  return (
    <div className={style.main}>
      <div className={`${style.genericName} rounded-t-3xl`}>{generic_name}</div>
      <div className="flex flex-col gap-4 bg-zinc-100">
        <span className="m-5 mt-10 text-xl font-semibold uppercase">
          Generic Name : {generic_name}
        </span>
        <div className="border-2 hover:border-dotted">
          <p className="text-2xl">Indication : </p>
          <p className=" indication">{indication}</p>
        </div>
        <div className="border-2 hover:border-dotted">
          <p className="text-2xl">Contra Indication : </p>
          <p className=" contraindication">{contra_indication}</p>
        </div>
        <div className="border-2 hover:border-dotted">
          <p className="text-2xl">Side Effect : </p>
          <p className=" sideeffect">{side_effect}</p>
        </div>
        <div className="border-2 hover:border-dotted">
          <p className="text-2xl">Interaction : </p>
          <p className=" interaction">{interaction}</p>
        </div>
        <div className="border-2 hover:border-dotted">
          <p className="text-2xl">Mode Of Action : </p>
          <p className=" modeofaction">{mode_of_action}</p>
        </div>
        <div className="border-2 hover:border-dotted">
          <p className="text-2xl">precaution : </p>
          <p className=" precaution">{precaution}</p>
        </div>
        <div className="border-2 hover:border-dotted">
          <p className="text-2xl">Dose : </p>
          <p className=" dose">{dose}</p>
        </div>
      </div>
    </div>
  );
};

export default GetOneMed;
