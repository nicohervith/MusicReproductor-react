import React from "react";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

const Playout = () => {
  return (
    <>
      <Navigation />
      <div className="block-container-playout">
        <div className="first-block-playout">
          <div className="media-explorer-dropdown">
            <ul className="dropdown-container">
              <li className="main-li">
                <a className="cat-nombres" href="">
                  Media Explorer
                </a>
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
        <div className="second-block-playout">
          <div className="sb-first">
            <div className="media-explorer-dropdown">
              <ul className="dropdown-container">
                <li className="main-li">
                  <a className="cat-nombres" href="">
                    Multiplayer
                  </a>
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
          <div className="sb-second">
            <div className="media-explorer-dropdown">
              <ul className="dropdown-container">
                <li className="main-li">
                  <a className="cat-nombres" href="">
                    Multiplayer
                  </a>
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
                  <a className="cat-nombres-third" href="">
                    iPlay
                  </a>
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
                  <a className="cat-nombres-third" href="">
                    Comercial
                  </a>
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
