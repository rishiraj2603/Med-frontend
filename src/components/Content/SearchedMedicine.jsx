import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import style from "./SearchedMedicine.module.css";
import axios from "axios";
import { BACKEND_URL } from "../../constants/url";
import Loading from "./Loading";
const SearchedMedicine = () => {
  const [med, setMed] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const medicineName = searchParams.get("medicineName");
  async function searchedMed() {
    setIsLoading(true);
    const res = await axios.get(
      `${BACKEND_URL}/search/?medicineName=${medicineName}`
    );
    const data = res.data;
    setMed(data);
    setIsLoading(false);
  }
  useEffect(() => {
    searchedMed();
  }, [medicineName]);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {med.map((e) => (
            <OneMedicine key={e.generic_id} medicine={e} />
          ))}
        </div>
      )}
    </div>
  );
};

const OneMedicine = ({ medicine }) => {
  const { generic_name, side_effect, indication, generic_id } = medicine;
  return (
    <>
      <div className={style.table}>
        <Link to={`/medicine/${generic_id}`} className={style.heading}>
          {generic_name}
        </Link>
        <div className={style.block}>
          <p className="m-3">Indication: {indication}</p>
        </div>
        <div className={style.block}>
          <p className="m-3">Side Effect: {side_effect}</p>
        </div>
        <br />
        <h3 className="flex ">
          For more details
          <Link to={`/medicine/${generic_id}`} className="font-bold underline">
            Click Here
          </Link>
          Or Click On{" "}
          <span className="font-bold underline"> Medicine Name</span>
        </h3>
      </div>
    </>
  );
};

export default SearchedMedicine;
