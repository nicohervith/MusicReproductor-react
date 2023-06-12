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
  /*   const [selected, setSelected] = useState("First");
  const [selected2, setSelected2] = useState("First");
  const [selected3, setSelected3] = useState("First");
  const [selected4, setSelected4] = useState("First");
  const [selected5, setSelected5] = useState("First");

  const [selectedoption, setSelectedoption] = useState("first");
  const [selectedoption2, setSelectedoption2] = useState("first");

  const [isOpen, setIsOpen] = useState(false);
  const [showSelector, setShowSelector] = useState(true);
  const [showSelector2, setShowSelector2] = useState(true);

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
  const [isActive2, setActive2] = useState("false");

  const select = () => {
    var option = document.getElementById("opciones");

    setActive(!isActive);
    option.classList.toggle("opciones_activas");
  };

  const select2 = () => {
    var option2 = document.getElementById("opciones");

    setActive2(!isActive2);
    option2.classList.toggle("opciones_activas");
  };

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");

  const handleOptionSelect = (e) => {
    const selectedValue = e.target.textContent;
    setSelectedOption(selectedValue);
    setShowSelector(false);
  };
  const handleOptionSelect2 = (e) => {
    const selectedValue2 = e.target.textContent;
    setSelectedOption2(selectedValue2);
    setShowSelector2(false);
  };

  const contenidoSelect = () => {
    var selector = document.getElementById("select");
    var contenedor = document.querySelector(".contenido_select");
    var hiddenInput = document.querySelector("#inputselect");
  };

  const handleChangeOptions = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleChangeOptions2 = (e) => {
    setSelectedOption2(e.target.value);
  };

  const handleOptionsSelect = () => {
    setShowSelector(false);
  };

  const handleCloseClick = () => {
    setSelectedOption(null);
    setShowSelector(true);
  };
  const handleCloseClick2 = () => {
    setSelectedOption2(null);
    setShowSelector2(true);
  }; */

  /*   const handleSelectClick = () => {
    setIsOpen(!isOpen);
  }; */

  const [showSelector, setShowSelector] = useState(true);
  const [isActive, setActive] = useState("false");
  const [showSelector2, setShowSelector2] = useState(true);
  const [isActive2, setActive2] = useState("false");
  const [showSelector3, setShowSelector3] = useState(true);
  const [isActive3, setActive3] = useState("false");
  const [showSelector4, setShowSelector4] = useState(true);
  const [isActive4, setActive4] = useState("false");
  const [showSelector5, setShowSelector5] = useState(true);
  const [isActive5, setActive5] = useState("false");

  const [selectedOption, setSelectedOption] = useState("");
  const [optionSelected, setOptionSelected] = useState("first");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [optionSelected2, setOptionSelected2] = useState("first");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [optionSelected3, setOptionSelected3] = useState("first");
  const [selectedOption4, setSelectedOption4] = useState("");
  const [optionSelected4, setOptionSelected4] = useState("first");
  const [selectedOption5, setSelectedOption5] = useState("");
  const [optionSelected5, setOptionSelected5] = useState("first");

  const select = () => {
    var option = document.getElementById("opciones");

    setActive(!isActive);
    option.classList.toggle("opciones_activas");
  };
  const handleChangeOptions = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleOptionSelect = (e) => {
    const selectedValue = e.target.textContent;
    setSelectedOption(selectedValue);
    setShowSelector(false);
  };

  const handleCloseClick = () => {
    setSelectedOption(null);
    setShowSelector(true);
  };

  const select2 = () => {
    var option2 = document.getElementById("opciones2");

    setActive2(!isActive2);
    option2.classList.toggle("opciones_activas");
  };
  const handleChangeOptions2 = (e) => {
    setSelectedOption2(e.target.value);
  };
  const handleOptionSelect2 = (e) => {
    const selectedValue2 = e.target.textContent;
    setSelectedOption2(selectedValue2);
    setShowSelector2(false);
  };

  const handleCloseClick2 = () => {
    setSelectedOption2(null);
    setShowSelector2(true);
  };

  const select3 = () => {
    var option3 = document.getElementById("opciones3");

    setActive3(!isActive3);
    option3.classList.toggle("opciones_activas");
  };
  const handleChangeOptions3 = (e) => {
    setSelectedOption3(e.target.value);
  };
  const handleOptionSelect3 = (e) => {
    const selectedValue3 = e.target.textContent;
    setSelectedOption3(selectedValue3);
    setShowSelector3(false);
  };

  const handleCloseClick3 = () => {
    setSelectedOption3(null);
    setShowSelector3(true);
  };

  const select4 = () => {
    var option4 = document.getElementById("opciones4");

    setActive4(!isActive4);
    option4.classList.toggle("opciones_activas");
  };
  const handleChangeOptions4 = (e) => {
    setSelectedOption4(e.target.value);
  };
  const handleOptionSelect4 = (e) => {
    const selectedValue4 = e.target.textContent;
    setSelectedOption4(selectedValue4);
    setShowSelector4(false);
  };

  const handleCloseClick4 = () => {
    setSelectedOption4(null);
    setShowSelector4(true);
  };

  const select5 = () => {
    var option5 = document.getElementById("opciones5");

    setActive5(!isActive5);
    option5.classList.toggle("opciones_activas");
  };
  const handleChangeOptions5 = (e) => {
    setSelectedOption5(e.target.value);
  };
  const handleOptionSelect5 = (e) => {
    const selectedValue5 = e.target.textContent;
    setSelectedOption5(selectedValue5);
    setShowSelector5(false);
  };

  const handleCloseClick5 = () => {
    setSelectedOption5(null);
    setShowSelector5(true);
  };

  return (
    <>
      <Navigation />
      <div className="block-container-playout">
        <div className="first-block-playout">
          <div>
            {showSelector2 && (
              <div
                className={`selector_contenedor ${!isActive2 ? "open2" : ""}`}
              >
                <form action="">
                  <div className={`select_box ${!isActive2 ? "open2" : ""}`}>
                    <div
                      className="select"
                      id="select"
                      onClick={select2}
                      value={optionSelected2}
                      onChange={(e) => handleChangeOptions2(e)}
                    >
                      <div className="contenido_select">
                        <span className="titulo_select">
                          {selectedOption2
                            ? selectedOption2
                            : "Selecciona una opción"}
                        </span>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          style={{ marginRight: "5px" }}
                        />
                      </div>
                    </div>

                    <div className="opciones" id="opciones2">
                      <div className="option" onClick={handleOptionSelect2}>
                        <div className="contenido_opcion">
                          <div className="texto_opcion">Media Explorer</div>
                        </div>
                      </div>

                      <div className="option" onClick={handleOptionSelect2}>
                        <div className="contenido_opcion">
                          <div className="texto_opcion">Multiplayer</div>
                        </div>
                      </div>

                      <div className="option" onClick={handleOptionSelect2}>
                        <div className="contenido_opcion">
                          <div className="texto_opcion">SmartList</div>
                        </div>
                      </div>

                      <div className="option" onClick={handleOptionSelect2}>
                        <div className="contenido_opcion">
                          <div className="texto_opcion">iPlay</div>
                        </div>
                      </div>

                      <div
                        className="option last_child"
                        onClick={handleOptionSelect2}
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
                    value={selectedOption2}
                  />
                </form>
              </div>
            )}
            {!showSelector2 && (
              <div className="cerrar_contenedor">
                <div className="container_button_cerrar">
                  <button className="button_cerrar" onClick={handleCloseClick2}>
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>

                {selectedOption2 === "Media Explorer" ? (
                  <div
                    style={{ width: "100%", height: "35%", marginTop: "-51px" }}
                  >
                    <MediaExplorer />
                  </div>
                ) : (
                  ""
                )}
                {selectedOption2 === "Multiplayer" ? (
                  <div style={{ width: "100%", height: "35%" }}>
                    <Multiplayer />
                  </div>
                ) : (
                  ""
                )}
                {selectedOption2 === "iPlay" ? (
                  <div style={{ width: "100%", height: "35%" }}>
                    <IPlay />
                  </div>
                ) : (
                  ""
                )}
                {selectedOption2 === "SmartList" ? (
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

        <div className="second-block-playout">
          <div className="sb-first">
            <div >
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
                        value={optionSelected}
                        onChange={(e) => handleChangeOptions(e)}
                      >
                        <div className="contenido_select">
                          <span className="titulo_select">
                            {selectedOption
                              ? selectedOption
                              : "Selecciona una opción"}
                          </span>
                          <FontAwesomeIcon
                            icon={faChevronDown}
                            style={{ marginRight: "5px" }}
                          />
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
                    <div
                      style={{
                        width: "100%",
                        height: "35%",
                        marginTop: "-51px",
                      }}
                    >
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

          <div className="sb-second">
            <div style={{ marginBottom: "30px" }}>
              {showSelector3 && (
                <div
                  className={`selector_contenedor ${!isActive3 ? "open3" : ""}`}
                >
                  <form action="">
                    <div className={`select_box ${!isActive3 ? "open3" : ""}`}>
                      <div
                        className="select"
                        id="select"
                        onClick={select3}
                        value={optionSelected3}
                        onChange={(e) => handleChangeOptions3(e)}
                      >
                        <div className="contenido_select">
                          <span className="titulo_select">
                            {selectedOption3
                              ? selectedOption3
                              : "Selecciona una opción"}
                          </span>
                          <FontAwesomeIcon
                            icon={faChevronDown}
                            style={{ marginRight: "5px" }}
                          />
                        </div>
                      </div>

                      <div className="opciones" id="opciones3">
                        <div className="option" onClick={handleOptionSelect3}>
                          <div className="contenido_opcion">
                            <div className="texto_opcion">Media Explorer</div>
                          </div>
                        </div>

                        <div className="option" onClick={handleOptionSelect3}>
                          <div className="contenido_opcion">
                            <div className="texto_opcion">Multiplayer</div>
                          </div>
                        </div>

                        <div className="option" onClick={handleOptionSelect3}>
                          <div className="contenido_opcion">
                            <div className="texto_opcion">SmartList</div>
                          </div>
                        </div>

                        <div className="option" onClick={handleOptionSelect3}>
                          <div className="contenido_opcion">
                            <div className="texto_opcion">iPlay</div>
                          </div>
                        </div>

                        <div
                          className="option last_child"
                          onClick={handleOptionSelect3}
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
                      value={selectedOption3}
                    />
                  </form>
                </div>
              )}
              {!showSelector3 && (
                <div className="cerrar_contenedor">
                  <div className="container_button_cerrar">
                    <button
                      className="button_cerrar"
                      onClick={handleCloseClick3}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                  </div>

                  {selectedOption3 === "Media Explorer" ? (
                    <div
                      style={{
                        width: "100%",
                        height: "35%",
                        marginTop: "-51px",
                      }}
                    >
                      <MediaExplorer />
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedOption3 === "Multiplayer" ? (
                    <div style={{ width: "100%", height: "35%" }}>
                      <Multiplayer />
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedOption3 === "iPlay" ? (
                    <div style={{ width: "100%", height: "35%" }}>
                      <IPlay />
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedOption3 === "SmartList" ? (
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

        <div className="third-block-playout">
          <div className="tb-first">
            <div style={{ marginBottom: "30px" }}>
              {showSelector4 && (
                <div
                  className={`selector_contenedor ${!isActive4 ? "open4" : ""}`}
                >
                  <form action="">
                    <div className={`select_box ${!isActive4 ? "open4" : ""}`}>
                      <div
                        className="select"
                        id="select"
                        onClick={select4}
                        value={optionSelected4}
                        onChange={(e) => handleChangeOptions4(e)}
                      >
                        <div className="contenido_select">
                          <span className="titulo_select">
                            {selectedOption4
                              ? selectedOption4
                              : "Selecciona una opción"}
                          </span>
                          <FontAwesomeIcon
                            icon={faChevronDown}
                            style={{ marginRight: "4px" }}
                          />
                        </div>
                      </div>

                      <div className="opciones" id="opciones4">
                        <div className="option" onClick={handleOptionSelect4}>
                          <div className="contenido_opcion">
                            <div className="texto_opcion">Media Explorer</div>
                          </div>
                        </div>

                        <div className="option" onClick={handleOptionSelect4}>
                          <div className="contenido_opcion">
                            <div className="texto_opcion">Multiplayer</div>
                          </div>
                        </div>

                        <div className="option" onClick={handleOptionSelect4}>
                          <div className="contenido_opcion">
                            <div className="texto_opcion">SmartList</div>
                          </div>
                        </div>

                        <div className="option" onClick={handleOptionSelect4}>
                          <div className="contenido_opcion">
                            <div className="texto_opcion">iPlay</div>
                          </div>
                        </div>

                        <div
                          className="option last_child"
                          onClick={handleOptionSelect4}
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
                      value={selectedOption4}
                    />
                  </form>
                </div>
              )}
              {!showSelector4 && (
                <div className="cerrar_contenedor">
                  <div className="container_button_cerrar">
                    <button
                      className="button_cerrar"
                      onClick={handleCloseClick4}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                  </div>

                  {selectedOption4 === "Media Explorer" ? (
                    <div
                      style={{
                        width: "100%",
                        height: "35%",
                        marginTop: "-51px",
                      }}
                    >
                      <MediaExplorer />
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedOption4 === "Multiplayer" ? (
                    <div style={{ width: "100%", height: "35%" }}>
                      <Multiplayer />
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedOption4 === "iPlay" ? (
                    <div style={{ width: "100%", height: "35%" }}>
                      <IPlay />
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedOption4 === "SmartList" ? (
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
          <div className="tb-second">
            <div style={{ marginBottom: "30px" }}>
              {showSelector5 && (
                <div
                  className={`selector_contenedor ${!isActive5 ? "open5" : ""}`}
                >
                  <form action="">
                    <div className={`select_box ${!isActive5 ? "open5" : ""}`}>
                      <div
                        className="select"
                        id="select"
                        onClick={select5}
                        value={optionSelected5}
                        onChange={(e) => handleChangeOptions5(e)}
                      >
                        <div className="contenido_select">
                          <span className="titulo_select">
                            {selectedOption5
                              ? selectedOption5
                              : "Selecciona una opción"}
                          </span>
                          <FontAwesomeIcon
                            icon={faChevronDown}
                            style={{ marginRight: "5px" }}
                          />
                        </div>
                      </div>

                      <div className="opciones" id="opciones5">
                        <div className="option" onClick={handleOptionSelect5}>
                          <div className="contenido_opcion">
                            <div className="texto_opcion">Media Explorer</div>
                          </div>
                        </div>

                        <div className="option" onClick={handleOptionSelect5}>
                          <div className="contenido_opcion">
                            <div className="texto_opcion">Multiplayer</div>
                          </div>
                        </div>

                        <div className="option" onClick={handleOptionSelect5}>
                          <div className="contenido_opcion">
                            <div className="texto_opcion">SmartList</div>
                          </div>
                        </div>

                        <div className="option" onClick={handleOptionSelect5}>
                          <div className="contenido_opcion">
                            <div className="texto_opcion">iPlay</div>
                          </div>
                        </div>

                        <div
                          className="option last_child"
                          onClick={handleOptionSelect5}
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
                      value={selectedOption5}
                    />
                  </form>
                </div>
              )}
              {!showSelector5 && (
                <div className="cerrar_contenedor">
                  <div className="container_button_cerrar">
                    <button
                      className="button_cerrar"
                      onClick={handleCloseClick5}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                  </div>

                  {selectedOption5 === "Media Explorer" ? (
                    <div
                      style={{
                        width: "100%",
                        height: "35%",
                        marginTop: "-51px",
                      }}
                    >
                      <MediaExplorer />
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedOption5 === "Multiplayer" ? (
                    <div style={{ width: "100%", height: "35%" }}>
                      <Multiplayer />
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedOption5 === "iPlay" ? (
                    <div style={{ width: "100%", height: "35%" }}>
                      <IPlay />
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedOption5 === "SmartList" ? (
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
      </div>
    </>
  );
};

export default Playout;
