import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../TopBar/Navbar";
import Footer from "../Footer/Footer";
import style from "./AllMedicine.module.css";

const AllMedicine = () => {
  const [meds, setMeds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  async function getMedicines(pageNumber) {
    const res = await axios.get(
      `https://med-backend-cwbd.onrender.com/medicine/?page=${pageNumber}`
    );
    const { medicineData, page, totalPages } = res.data;
    setMeds(medicineData);
    setTotalPage(totalPages);
  }
  useEffect(() => {
    getMedicines(currentPage);
  }, [currentPage]);
  return (
    <div>
      <Navbar></Navbar>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="grid grid-cols-3 border-2 ">
        {meds.map((e) => (
          <OneMedicine key={e.generic_id} medicine={e} />
        ))}
      </div>
      <Pagination totalPage={totalPage} onPageChange={setCurrentPage} />
      <Footer></Footer>
    </div>
  );
};

const OneMedicine = ({ medicine }) => {
  const {
    generic_name,
    side_effect,
    interaction,
    mode_of_action,
    indication,
    generic_id,
  } = medicine;
  return (
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
        Or Click On <p className="font-bold underline"> Medicine Name</p>
      </h3>
    </div>
  );
};

const Pagination = ({ totalPage, onPageChange }) => {
  const paginationNumbers = [];

  for (let i = 1; i <= totalPage; i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className={`flex gap-10 ${style.pagination}`}>
      {paginationNumbers.map((pageNumber) => (
        <button
          onClick={(e) => {
            onPageChange(pageNumber);
          }}
          key={pageNumber}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default AllMedicine;
