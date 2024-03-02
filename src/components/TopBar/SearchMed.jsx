import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Fuse from "fuse.js";
const SearchMed = ({ getData }) => {
  const [med, setMed] = useState([]);
  const [searchText, setSearchText] = useState("");
  async function SearchedMed(text) {
    const res = await axios.get(
      `http://localhost:4000/search/?medicineName=${text}`
    );
    const data = res.data;
    setMed(data);
  }
  const fuse = new Fuse(med);
  const handleChange = (value) => {
    setSearchText(value);
    SearchedMed(value);
  };
  return (
    <div>
      <form
        className="flex gap-2 m-5 mx-10"
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          value={searchText}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
          className="w-64 border-2 border-black rounded-lg h-11 "
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="w-20 border-2 border-green-400 rounded-lg"
          type="submit"
          onClick={() => {
            getData(med);
          }}
        >
          <Link to={`/search/?medicineName=${searchText}`}>Search</Link>
        </button>
      </form>
    </div>
  );
};

export default SearchMed;
