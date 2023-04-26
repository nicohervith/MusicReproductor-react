import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Home from "../Home/Home";
import Playout from "../Playout/Playout";
import Explorer from "../Explorer/Explorer";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/playout" element={<Playout />} />
        <Route path="/explorer" element={<Explorer />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
