import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../Assets/Img/logo.png";
import LOGO2 from "../../Assets/Img/LOGO2.png";
import switchmode from "../../Assets/Img/switchmode.png";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navbar-container">
      <div className="first-block">
        <div className="dropdown">
          <p> Ondas del Tonusco</p>
        </div>
        <div className="date">
          <p>10:49:38 A.M.</p>
        </div>
      </div>
      <div className="second-block">
        <div className="logo">
          <Link to="/">
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
