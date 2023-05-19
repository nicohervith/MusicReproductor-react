import "bootstrap/dist/css/bootstrap.min.css";
import LOGO2 from "../../Assets/Img/LOGO2.png";
import switchmode from "../../Assets/Img/switchmode.png";
import { Link } from "react-router-dom";
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"; */
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
import styles from './Navigation.module.css'

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
            <img
              src={menu}
              alt=""
              style={{ width: "16px", marginLeft: "5px", cursor: "pointer" }}
            />
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
