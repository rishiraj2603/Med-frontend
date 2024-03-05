import React, { useState } from "react";
import { Link } from "react-router-dom";
const SearchMed = () => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (value) => {
    setSearchText(value);
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
          className="w-64 p-2 border-2 border-black rounded-lg h-11"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="w-20 border-2 border-green-400 rounded-lg"
          type="submit"
        >
          <Link to={`/search/?medicineName=${searchText}`}>Search</Link>
        </button>
      </form>
    </div>
  );
};

export default SearchMed;
