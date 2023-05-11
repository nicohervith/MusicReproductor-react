import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Explorer from "../Explorer/Explorer";
import Accord from "../Explorer/Accord";
import MediaExplorer from "../MediaExplorer/MediaExplorer";
import Album from "../Player/Album";
import ShortInfo from "../Explorer/ShortInfo";
import Multiplayer from "../Multiplayer/Multiplayer";
import IPlay from "../IPlay/IPlay";

const Playout = () => {
  const [selected, setSelected] = useState("First");
  const [selected2, setSelected2] = useState("First");
  const [selected3, setSelected3] = useState("First");
  const [selected4, setSelected4] = useState("First");
  const [selected5, setSelected5] = useState("First");

  const handleChange = (e) => {
    console.log(e.target.value);
    setSelected(e.target.value);
  };
  const handleChange2 = (e) => {
    setSelected2(e.target.value);
  };
  const handleChange3 = (e) => {
    setSelected3(e.target.value);
  };
  const handleChange4 = (e) => {
    setSelected4(e.target.value);
  };
  const handleChange5 = (e) => {
    setSelected5(e.target.value);
  };

  return (
    <>
      <Navigation />
      <div className="block-container-playout">
        <div className="first-block-playout">
          <div className="media-explorer-dropdown">
            <div className="dropdown-container">
              <li className="main-li">
                <select
                  className="cat-nombres-select"
                  value={selected}
                  onChange={(e) => handleChange(e)}
                >
                  <option>Seleccione una opción </option>
                  <option>Media Explorer</option>
                  <option>Multiplayer</option>
                  <option>SmartList</option>
                  <option>iPlay</option>
                  <option>Comercial</option>
                </select>
              </li>
              {selected == "Media Explorer" ? (
                <div style={{ width: "100%" }}>
                  <MediaExplorer />
                </div>
              ) : (
                ""
              )}
              {selected == "Multiplayer" ? <Accord /> : ""}
              {selected == "SmartList" ? <Accord /> : ""}
            </div>
          </div>
        </div>

        <div className="second-block-playout">
          <div className="sb-first">
            <div className="media-explorer-dropdown">
              <div className="dropdown-container">
                <li className="main-li">
                  <select
                    className="cat-nombres-select"
                    value={selected2}
                    onChange={(e) => handleChange2(e)}
                  >
                    <option>Seleccione una opción </option>
                    <option>Media Explorer</option>
                    <option>Multiplayer</option>
                    <option>SmartList</option>
                    <option>iPlay</option>
                    <option>Comercial</option>
                  </select>
                </li>
                {selected2 === "Media Explorer" ? (
                  <div style={{ width: "100%" }}>
                    <MediaExplorer />
                  </div>
                ) : (
                  ""
                )}
                {selected2 == "Multiplayer" ? (
                  <div style={{ width: "100%", height: " 100%" }}>
                    <Multiplayer />
                  </div>
                ) : (
                  ""
                )}
                {selected2 == "SmartList" ? <Accord /> : ""}
              </div>
            </div>
          </div>
          <div className="sb-second">
            <div className="media-explorer-dropdown">
              <div className="dropdown-container">
                <li className="main-li">
                  <select
                    className="cat-nombres-select"
                    value={selected3}
                    onChange={(e) => handleChange3(e)}
                  >
                    <option>Seleccione una opción </option>
                    <option>Media Explorer</option>
                    <option>Multiplayer</option>
                    <option>SmartList</option>
                    <option>iPlay</option>
                    <option>Comercial</option>
                  </select>
                </li>
                {selected3 == "Multiplayer" ? <ShortInfo /> : ""}
                {selected3 == "SmartList" ? <ShortInfo /> : ""}
                {selected3 == "iPlay" ? <IPlay /> : ""}
                {selected3 == "Comercial" ? <Accord /> : ""}
              </div>
            </div>
          </div>
        </div>
        <div className="third-block-playout">
          <div className="tb-first">
            <div className="media-explorer-dropdown">
              <div className="dropdown-container">
                <li className="main-li">
                  <select
                    className="cat-nombres-select"
                    value={selected4}
                    onChange={(e) => handleChange4(e)}
                  >
                    <option>Seleccione una opción </option>
                    <option>Media Explorer</option>
                    <option>Multiplayer</option>
                    <option>SmartList</option>
                    <option>iPlay</option>
                    <option>Comercial</option>
                  </select>
                </li>
                {selected4 == "Media Explorer" ? (
                  <div style={{ width: "100%" }}>
                    <MediaExplorer />
                  </div>
                ) : (
                  ""
                )}
                {selected4 == "Multiplayer" ? <Accord /> : ""}
                {selected4 == "SmartList" ? <Accord /> : ""}
                {selected4 == "iPlay" ? (
                  <div style={{ width: "100%", height: "100%" }}>
                    {" "}
                    <IPlay />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="tb-second">
            <div className="media-explorer-dropdown">
              <div className="dropdown-container">
                <li className="main-li">
                  <select
                    className="cat-nombres-select"
                    value={selected5}
                    onChange={(e) => handleChange5(e)}
                  >
                    <option>Seleccione una opción </option>
                    <option>Media Explorer</option>
                    <option>Multiplayer</option>
                    <option>SmartList</option>
                    <option>iPlay</option>
                    <option>Comercial</option>
                  </select>
                </li>
                {selected5 == "Media Explorer" ? (
                  <div style={{ width: "100%" }}>
                    <MediaExplorer />
                  </div>
                ) : (
                  ""
                )}
                {selected5 == "Multiplayer" ? <Accord /> : ""}
                {selected5 == "SmartList" ? <Accord /> : ""}
                {selected5 == "iPlay" ? (
                  <div style={{ width: "100%" }}>
                    {" "}
                    <IPlay />
                  </div>
                ) : (
                  ""
                )}
                {selected4 == "Comercial" ? <Accord /> : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Playout;
