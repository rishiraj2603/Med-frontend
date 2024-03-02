import React from "react";
import { Route, Routes } from "react-router-dom";
import AllMedicine from "./components/Content/AllMedicine";
import HomePage from "./components/MainPages/HomePage";
import GetOneMed from "./components/Content/GetOneMed";
import SearchedMedicine from "./components/Content/SearchedMedicine";
import Login from "./components/User/Login";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/medicine" element={<AllMedicine />} />
        <Route path={`/medicine/:medicineId`} element={<GetOneMed />} />
        <Route path="/search" element={<SearchedMedicine />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
