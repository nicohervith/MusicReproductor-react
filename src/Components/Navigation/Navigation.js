import "bootstrap/dist/css/bootstrap.min.css";
import LOGO2 from "../../Assets/Img/LOGO2.png";
import switchmode from "../../Assets/Img/switchmode.png";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import Datetime from "./Date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import menu from "../../Assets/Img/menu.png";
import styles from "./Navigation.module.css";
import media from "../../Assets/Img/media.png";
import logeditor from "../../Assets/Img/logeditor.png";
import programacion from "../../Assets/Img/programacion.png";
import playout from "../../Assets/Img/playout.png";
import grabaciones from "../../Assets/Img/grabaciones.png";
import ajustes from "../../Assets/Img/ajustes.png";

function Navigation() {
  const [isActive, setActive] = useState("false");
  const ToggleSwitch = () => {
    var sli = document.getElementById("slider");

    setActive(!isActive);
    sli.classList.toggle("slider-active");
  };

  return (
    <div className="navbar-container">
      <div className="first-block">
        <Dropdown>
          <DropdownToggle
            style={{
              backgroundColor: "#292929",
              border: "none",
              color: "#8a8889 ",
              fontSize: "12px",
              justifyContent: "space-around",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            Ondas del Tonusco
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Accion 1</DropdownItem>
            <DropdownItem>Accion 1</DropdownItem>
            <DropdownItem>Accion 1</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <div className="date">
          <Datetime />
        </div>
      </div>
      <div className="second-block">
        <div className="logo">
          <Link to="/home">
            <img src={LOGO2} alt="" />
          </Link>
        </div>
      </div>
      <div className="third-block">
        <div>
          <div className="swich">
            <label for="" className="switch-button">
              <input className="switch-input" type="checkbox" checked />
              <span
                className="slider"
                id="slider"
                onClick={ToggleSwitch}
              ></span>
            </label>
            <FontAwesomeIcon icon={faBell} style={{ cursor: "pointer" }} />
            <Dropdown>
              <DropdownToggle
                className={styles.dropdown_toggle}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  width: "25px",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={menu}
                  alt=""
                  style={{
                    width: "16px",
                    cursor: "pointer",
                  }}
                />
              </DropdownToggle>
              <DropdownMenu
                style={{
                  backgroundColor: "transparent",
                  padding: "0px",
                  width: "100px",
                  paddingLeft: "50px",
                }}
              >
                {/* <DropdownItem>Accion 1</DropdownItem>
                <DropdownItem>Accion 1</DropdownItem>
                <DropdownItem>Accion 1</DropdownItem> */}

                <div className={styles.dropdown_menu_item}>
                  <Link to="/explorer">
                    <div className={styles.container_menu_dropdown}>
                      <img src={media} alt="" />{" "}
                    </div>
                  </Link>
                  <Link to="/playout">
                    <div className={styles.container_menu_dropdown}>
                      <img src={playout} alt="" />
                    </div>
                  </Link>
                  <Link to="/logeditor">
                    <div className={styles.container_menu_dropdown}>
                      <img src={logeditor} alt="" />{" "}
                    </div>
                  </Link>
                  <Link to="/programacion">
                    <div className={styles.container_menu_dropdown}>
                      <img src={programacion} alt="" />{" "}
                    </div>
                  </Link>
                  <Link to="/grabaciones">
                    <div className={styles.container_menu_dropdown}>
                      <img src={grabaciones} alt="" />{" "}
                    </div>
                  </Link>
                  <Link to="/ajustes">
                    <div className={styles.container_menu_dropdown}>
                      <img src={ajustes} alt="" />{" "}
                    </div>
                  </Link>
                </div>
              </DropdownMenu>
            </Dropdown>
            {/* <div className={styles.menu_block}>

            </div> */}
            <img src={switchmode} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
