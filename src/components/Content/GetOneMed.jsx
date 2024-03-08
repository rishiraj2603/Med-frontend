import axios from "axios";
import Fuse from "fuse.js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../../constants/url";
import style from "./GetOneMed.module.css";
import Loading from "./Loading";
const GetOneMed = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const generic_id = params.medicineId;
  const [med, setMed] = useState([]);
  async function getMedData() {
    setIsLoading(true);
    const res = await axios.get(`${BACKEND_URL}/medicine/${generic_id}`);
    setMed(res.data[0]);
    setIsLoading(false);
  }
  const fuse = new Fuse(med, {
    key: generic_id,
  });
  useEffect(() => {
    getMedData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <OneMedicine key={generic_id} medicine={med} />
        </div>
      )}
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
        <span
          className="m-5 mt-10 font-semibold uppercase"
          style={{ fontSize: "30px" }}
        >
          Generic Name : {generic_name}
        </span>
        <div className="border-2 hover:border-dotted">
          <p style={{ fontSize: "25px" }}>Indication : </p>
          <p className=" indication">{indication}</p>
        </div>
        <div className="border-2 hover:border-dotted">
          <p style={{ fontSize: "25px" }}>Contra Indication : </p>
          <p className=" contraindication">{contra_indication}</p>
        </div>
        <div className="border-2 hover:border-dotted">
          <p style={{ fontSize: "25px" }}>Side Effect : </p>
          <p className=" sideeffect">{side_effect}</p>
        </div>
        <div className="border-2 hover:border-dotted">
          <p style={{ fontSize: "25px" }}>Interaction : </p>
          <p className=" interaction">{interaction}</p>
        </div>
        <div className="border-2 hover:border-dotted">
          <p style={{ fontSize: "25px" }}>Mode Of Action : </p>
          <p className=" modeofaction">{mode_of_action}</p>
        </div>
        <div className="border-2 hover:border-dotted">
          <p style={{ fontSize: "25px" }}>Precaution : </p>
          <p className=" precaution">{precaution}</p>
        </div>
        <div className="border-2 hover:border-dotted">
          <p style={{ fontSize: "25px" }}>Dose : </p>
          <p className=" dose">{dose}</p>
        </div>
      </div>
    </div>
  );
};

export default GetOneMed;
