import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../../constants/url";
import style from "./AllMedicine.module.css";
import Loading from "./Loading";

const AllMedicine = () => {
  const [meds, setMeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  async function getMedicines(pageNumber) {
    setIsLoading(true);
    const res = await axios.get(`${BACKEND_URL}/medicine/?page=${pageNumber}`);
    const { medicineData, page, totalPages } = res.data;
    setMeds(medicineData);
    setTotalPage(totalPages);
    setIsLoading(false);
  }
  useEffect(() => {
    getMedicines(currentPage);
  }, [currentPage]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="grid grid-cols-3 border-2 " id="medicinePart">
            {meds.map((e) => (
              <OneMedicine key={e.generic_id} medicine={e} />
            ))}
          </div>
          <Pagination totalPage={totalPage} onPageChange={setCurrentPage} />
        </div>
      )}
    </div>
  );
};

const OneMedicine = ({ medicine }) => {
  const { generic_name, side_effect, indication, generic_id } = medicine;
  return (
    <div className={style.table}>
      <Link to={`/medicine/${generic_id}`} className={style.heading}>
        {generic_name}
      </Link>
      <div className={style.block}>
        <p className="m-3">Indication: {indication}</p>
      </div>
      <div className={style.block}>
        <p className="m-3 overflow-auto h-60">Side Effect: {side_effect}</p>
      </div>
      <h3 className="flex gap-2 m-8 p-7">
        For more details
        <Link
          to={`/medicine/${generic_id}`}
          className="h-8 p-3 font-bold text-white rounded-full w-fit bg-neutral-950 place-content-center"
        >
          Click Here
        </Link>
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
    <div className={`flex gap-10 overflow-x-auto ${style.pagination}`}>
      {paginationNumbers.map((pageNumber) => (
        <button
          onClick={(e) => {
            onPageChange(pageNumber);
          }}
          key={pageNumber}
        >
          <a href="#medicinePart"> {pageNumber}</a>
        </button>
      ))}
    </div>
  );
};

export default AllMedicine;
