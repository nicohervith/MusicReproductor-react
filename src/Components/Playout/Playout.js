import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Explorer from "../Explorer/Explorer";
import Accord from "../Explorer/Accord";
import MediaExplorer from "../MediaExplorer/MediaExplorer";

const Playout = () => {
  const [selected, setSelected] = useState("First");

  const handleChange = (e) => {
    console.log(e.target.value);
    setSelected(e.target.value);
  };
  return (
    <>
      <Navigation />
      <div className="block-container-playout">
        <div className="first-block-playout">
          <div className="media-explorer-dropdown">
            {/* <ul className="dropdown-container">
              <li className="main-li">
                <Link className="cat-nombres" to="">
                  Media Explorer{" "}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{ marginRight: "8px" }}
                  />
                </Link>
                <ul>
                  <li className="li">
                    <Link className="drop-item" to="">
                      <option value="select" onChange="">
                        Multiplayer
                      </option>
                    </Link>
                  </li>
                  <li className="li">
                    <Link className="drop-item" to="">
                      SmartList
                    </Link>
                  </li>

                  <li className="li">
                    <Link className="drop-item" to="">
                      iPlay
                    </Link>
                  </li>
                  <li className="li">
                    <Link className="drop-item" to="">
                      Comercial
                    </Link>
                  </li>
                </ul>
              </li>
            </ul> */}

            <div className="dropdown-container">
              <li className="main-li">
                <select
                  className="cat-nombres"
                  value={selected}
                  onChange={(e) => handleChange(e)}
                >
                    <option>Seleccione una opción </option>
                    <option>Media Explorer</option>
                    <option>Multiplayer</option>
                    <option>SmartList</option>
                </select>
              </li>
              {selected == "Media Explorer" ? <MediaExplorer /> : ""}
              {selected == "Multiplayer" ? <Accord /> : ""}
              {selected == "SmartList" ? <Accord /> : ""}
            </div>
          </div>
        </div>
        <div className="second-block-playout">
          <div className="sb-first">
            <div className="media-explorer-dropdown">
              <ul className="dropdown-container">
                <li className="main-li">
                  <Link className="cat-nombres" to="" alt="">
                    Multiplayer
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      style={{ marginRight: "8px" }}
                    />
                  </Link>
                  <ul>
                    <li className="li">
                      <Link className="drop-item" to={Explorer}>
                        Multiplayer
                      </Link>
                    </li>
                    <li className="li">
                      <Link className="drop-item" to="">
                        SmartList
                      </Link>
                    </li>

                    <li className="li">
                      <Link className="drop-item" to="">
                        iPlay
                      </Link>
                    </li>
                    <li className="li">
                      <Link className="drop-item" to="">
                        Comercial
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="sb-second">
            <div className="media-explorer-dropdown">
              <ul className="dropdown-container">
                <li className="main-li">
                  <Link className="cat-nombres" to="">
                    Multiplayer
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      style={{ marginRight: "8px" }}
                    />
                  </Link>
                  <ul>
                    <li className="li">
                      <Link className="drop-item" to="">
                        Multiplayer
                      </Link>
                    </li>
                    <li className="li">
                      <Link className="drop-item" to="">
                        SmartList
                      </Link>
                    </li>

                    <li className="li">
                      <Link className="drop-item" to="">
                        iPlay
                      </Link>
                    </li>
                    <li className="li">
                      <Link className="drop-item" to="">
                        Comercial
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="third-block-playout">
          <div className="tb-first">
            <div className="media-explorer-dropdown">
              <ul className="dropdown-container-third">
                <li className="main-li-third">
                  <Link className="cat-nombres-third" to="">
                    iPlay
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      style={{ marginRight: "8px" }}
                    />
                  </Link>
                  <ul>
                    <li className="li">
                      <Link className="drop-item" to="">
                        Multiplayer
                      </Link>
                    </li>
                    <li className="li">
                      <Link className="drop-item" to="">
                        SmartList
                      </Link>
                    </li>

                    <li className="li">
                      <Link className="drop-item" to="">
                        iPlay
                      </Link>
                    </li>
                    <li className="li">
                      <Link className="drop-item" to="">
                        Comercial
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="tb-second">
            <div className="media-explorer-dropdown">
              <ul className="dropdown-container-third">
                <li className="main-li-third">
                  <Link className="cat-nombres-third" to="">
                    Comercial
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      style={{ marginRight: "8px" }}
                    />
                  </Link>
                  <ul>
                    <li className="li">
                      <Link className="drop-item" to="">
                        Multiplayer
                      </Link>
                    </li>
                    <li className="li">
                      <Link className="drop-item" to="">
                        SmartList
                      </Link>
                    </li>

                    <li className="li">
                      <Link className="drop-item" to="">
                        iPlay
                      </Link>
                    </li>
                    <li className="li">
                      <Link className="drop-item" to="">
                        Comercial
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Playout;
