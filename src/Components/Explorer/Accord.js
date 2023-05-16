import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "react-bootstrap/Accordion";
import { faFolder, faSliders } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import barrasdesonido from "../../Assets/Img/barrasdesonido.png";

function Accord() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <div className="music-styles-container">
            <img src={barrasdesonido} alt="" style={{ width: "15px" }} />
            <p className="music-styles-text">AUDIO</p>
          </div>
        </Accordion.Header>
        <Accordion.Body style={{ padding: "0" }}>
          <div className="item-music-style">
            <div></div>
            <Link to="">Salsa Éxitos</Link>
          </div>
          <div className="item-music-style">
            <div></div>
            <Link to="">Salsa Éxitos</Link>
          </div>
          <div className="item-music-style">
            <div></div>
            <Link to="">Salsa Éxitos</Link>
          </div>
          <div className="item-music-style">
            <div></div>
            <Link to="">Salsa Éxitos</Link>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item
        className="accordion-item"
        style={{ borderBottom: "0.3px solid rgba(138, 136, 137, 0.3)" }}
        eventKey="2"
      >
        <Accordion.Header
          className="accordion-header"
          style={{
            background: "#9a1111 !important",
          }}
        >
          <div className="music-styles-container">
            <FontAwesomeIcon
              icon={faFolder}
              style={{ color: "#00ea85 !important", fontSize: "13px" }}
            />
            <p className="music-styles-text">Bachata</p>
          </div>
        </Accordion.Header>
        <Accordion.Body style={{ padding: "0" }}>
          <div className="item-music-style">
            <div></div>
            <Link to="">Salsa Éxitos</Link>
          </div>
          <div className="item-music-style">
            <div></div>
            <Link to="">Salsa Éxitos</Link>
          </div>
          <div className="item-music-style">
            <div></div>
            <Link to="">Salsa Éxitos</Link>
          </div>
          <div className="item-music-style">
            <div></div>
            <Link to="">Salsa Éxitos</Link>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <div className="music-styles-container">
            <FontAwesomeIcon
              icon={faFolder}
              style={{ color: "#ff5fa9 !important", fontSize: "13px" }}
            />
            <p className="music-styles-text">Merengue</p>
          </div>
        </Accordion.Header>
        <Accordion.Body style={{ padding: "0" }}>
          <div className="item-music-style">
            <div></div>
            <Link to="">Salsa Éxitos</Link>
          </div>
          <div className="item-music-style">
            <div></div>
            <Link to="">Salsa Éxitos</Link>
          </div>
          <div className="item-music-style">
            <div></div>
            <Link to="">Salsa Éxitos</Link>
          </div>
          <div className="item-music-style">
            <div></div>
            <Link to="">Salsa Éxitos</Link>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          <div className="music-styles-container">
            <FontAwesomeIcon
              icon={faFolder}
              style={{ color: "#fb925b", fontSize: "13px" }}
            />
            <p className="music-styles-text">Salsa</p>
          </div>
        </Accordion.Header>
        <Accordion.Body style={{ padding: "0" }}>
          <div className="item-music-style">
            <div></div>
            <Link to="">Salsa Éxitos</Link>
          </div>
          <div className="item-music-style">
            <div></div>
            <Link to="">Salsa Éxitos</Link>
          </div>
          <div className="item-music-style">
            <div></div>
            <Link to="">Salsa Éxitos</Link>
          </div>
          <div className="item-music-style">
            <div></div>
            <Link to="">Salsa Éxitos</Link>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>
          <div className="music-styles-container">
            <FontAwesomeIcon
              icon={faFolder}
              style={{ color: "#00e3cf", fontSize: "13px" }}
            />
            <p className="music-styles-text">Reggaeton</p>
          </div>
        </Accordion.Header>
        <Accordion.Body style={{ padding: "0" }}>
          <div className="item-music-style">
            <div></div>
            <Link to="">Salsa Éxitos</Link>
          </div>
          <div className="item-music-style">
            <div></div>
            <Link to="">Salsa Éxitos</Link>
          </div>
          <div className="item-music-style">
            <div></div>
            <Link to="">Salsa Éxitos</Link>
          </div>
          <div className="item-music-style">
            <div></div>
            <Link to="">Salsa Éxitos</Link>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accord;
