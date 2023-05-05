import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Home from "../Home/Home";
import Playout from "../Playout/Playout";
import Explorer from "../Explorer/Explorer";
import Playerview from "../Playerview/Playerview";
import Logeditor from "../Logeditor/Logeditor";
import Programacion from "../Programacion/Programacion";
import Grabaciones from "../Grabaciones/Grabaciones";
import Ajustes from "../Ajustes/Ajustes";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/playout" element={<Playout />} />
        <Route path="/explorer" element={<Explorer />} />
        <Route path="/player" element={<Playerview />} />
        <Route path="/logeditor" element={<Logeditor />} />
        <Route path="/programacion" element={<Programacion />} />
        <Route path="/grabaciones" element={<Grabaciones />} />
        <Route path="/ajustes" element={<Ajustes />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
