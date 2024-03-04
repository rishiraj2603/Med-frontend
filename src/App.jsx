import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AllMedicine from "./components/Content/AllMedicine";
import HomePage from "./components/MainPages/HomePage";
import GetOneMed from "./components/Content/GetOneMed";
import SearchedMedicine from "./components/Content/SearchedMedicine";
import Login from "./components/User/Login";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/TopBar/Navbar";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]);
  return (
    <div>
      <Navbar></Navbar>
      <div className="px-5 mt-32 ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/medicine" element={<AllMedicine />} />
          <Route path={`/medicine/:medicineId`} element={<GetOneMed />} />
          <Route path="/search" element={<SearchedMedicine />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
