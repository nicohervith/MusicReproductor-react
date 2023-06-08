import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import Explorer from "../Explorer/Explorer";
import Accord from "../Explorer/Accord";
import MediaExplorer from "../MediaExplorer/MediaExplorer";
import Album from "../Player/Album";
import ShortInfo from "../Explorer/ShortInfo";
import Multiplayer from "../Multiplayer/Multiplayer";
import IPlay from "../IPlay/IPlay";
import Traffic from "../Traffic/Traffic";

const Playout = () => {
  const [selected, setSelected] = useState("First");
  const [selected2, setSelected2] = useState("First");
  const [selected3, setSelected3] = useState("First");
  const [selected4, setSelected4] = useState("First");
  const [selected5, setSelected5] = useState("First");
  const [selectedoption, setSelectedoption] = useState("first");
  const [isOpen, setIsOpen] = useState(false);
  const [showSelector, setShowSelector] = useState(true);

  const handleChangeOption = (e) => {
    console.log(e.target.value);
    setSelectedoption(e.target.value);
  };

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

  const [isActive, setActive] = useState("false");

  const select = () => {
    var option = document.getElementById("opciones");

    setActive(!isActive);
    option.classList.toggle("opciones_activas");
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (e) => {
    const selectedValue = e.target.textContent;
    setSelectedOption(selectedValue);
    setShowSelector(false);
  };

  const contenidoSelect = () => {
    var selector = document.getElementById("select");
    var contenedor = document.querySelector(".contenido_select");
    var hiddenInput = document.querySelector("#inputselect");
  };

  const handleChangeOptions = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleOptionsSelect = () => {
    setShowSelector(false);
  };

  const handleCloseClick = () => {
    setSelectedOption(null);
    setShowSelector(true);
  };

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
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
              {selected === "Media Explorer" ? (
                <div style={{ width: "100%", height: " 100%" }}>
                  <MediaExplorer />
                </div>
              ) : (
                ""
              )}
              {selected == "Multiplayer" ? (
                <div style={{ width: "100%", height: " 100%" }}>
                  <Multiplayer />
                </div>
              ) : (
                ""
              )}
              {selected == "SmartList" ? (
                <div style={{ width: "100%", height: " 100%" }}>
                  <ShortInfo />
                </div>
              ) : (
                ""
              )}
              {selected == "iPlay" ? (
                <div style={{ width: "100%", height: " 100%" }}>
                  <IPlay />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className="second-block-playout">
          <div className="sb-first">
            <div>
              <div style={{ marginTop: "50px" }}>
                {showSelector && (
                  <div
                    className={`selector_contenedor ${!isActive ? "open" : ""}`}
                  >
                    <form action="">
                      <div className={`select_box ${!isActive ? "open" : ""}`}>
                        <div
                          className="select"
                          id="select"
                          onClick={select}
                          value={selectedoption}
                          onChange={(e) => handleChangeOption(e)}
                        >
                          <div className="contenido_select">
                            <span className="titulo_select">
                              {selectedOption
                                ? selectedOption
                                : "Selecciona una opción"}
                            </span>
                          </div>
                        </div>

                        <div className="opciones" id="opciones">
                          <div className="option" onClick={handleOptionSelect}>
                            <div className="contenido_opcion">
                              <div className="texto_opcion">Media Explorer</div>
                            </div>
                          </div>

                          <div className="option" onClick={handleOptionSelect}>
                            <div className="contenido_opcion">
                              <div className="texto_opcion">Multiplayer</div>
                            </div>
                          </div>

                          <div className="option" onClick={handleOptionSelect}>
                            <div className="contenido_opcion">
                              <div className="texto_opcion">SmartList</div>
                            </div>
                          </div>

                          <div className="option" onClick={handleOptionSelect}>
                            <div className="contenido_opcion">
                              <div className="texto_opcion">iPlay</div>
                            </div>
                          </div>

                          <div
                            className="option last_child"
                            onClick={handleOptionSelect}
                          >
                            <div className="contenido_opcion last_child_option">
                              <div className="texto_opcion">Comercial</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <input
                        type="hidden"
                        name="optionvalue"
                        id="inputselect"
                        value={selectedOption}
                      />
                    </form>
                  </div>
                )}
                {!showSelector && (
                  <div className="cerrar_contenedor">
                    <div className="container_button_cerrar">
                      <button
                        className="button_cerrar"
                        onClick={handleCloseClick}
                      >
                        <FontAwesomeIcon icon={faXmark} />
                      </button>
                    </div>

                    {selectedOption === "Media Explorer" ? (
                      <div style={{ width: "100%", height: "35%" }}>
                        <MediaExplorer />
                      </div>
                    ) : (
                      ""
                    )}
                    {selectedOption === "Multiplayer" ? (
                      <div style={{ width: "100%", height: "35%" }}>
                        <Multiplayer />
                      </div>
                    ) : (
                      ""
                    )}
                    {selectedOption === "iPlay" ? (
                      <div style={{ width: "100%", height: "35%" }}>
                        <IPlay />
                      </div>
                    ) : (
                      ""
                    )}
                    {selectedOption === "SmartList" ? (
                      <div style={{ width: "100%", height: "35%" }}>
                        <ShortInfo />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                )}
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
                {selected3 == "Comercial" ? <Traffic /> : ""}
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
                  <div style={{ width: "100%" }}>
                    {" "}
                    <IPlay />
                  </div>
                ) : (
                  ""
                )}
                {selected4 == "Comercial" ? <Traffic /> : ""}
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
                {selected5 == "Comercial" ? <Traffic /> : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Playout;
