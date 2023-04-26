import "bootstrap/dist/css/bootstrap.min.css";
import LOGO2 from "../../Assets/Img/LOGO2.png";
import switchmode from "../../Assets/Img/switchmode.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

function Navigation() {
  return (
    <div className="navbar-container">
      <div className="first-block">
        {/* <div className="dropdown">
          <p>
            {" "}
            Ondas del Tonusco
            <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: 20 }} />
          </p>
        </div> */}
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
          <p>10:49:38 A.M.</p>
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
        <div className="swich">
          <img src={switchmode} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
