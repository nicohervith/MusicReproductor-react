import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "react-bootstrap/Accordion";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

function Accord() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <FontAwesomeIcon icon={faSliders} style={{ fontSize: "13px" }} />
          <p className="music-styles-text">AUDIO</p>
        </Accordion.Header>
        <Accordion.Body>Lorem ipsum dolor sit amet, consectetur</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className="accordion-item" eventKey="2">
        <Accordion.Header
          className="accordion-header"
          style={{ background: "#9a1111 !important" }}
        >
          <div className="music-styles-container">
            <FontAwesomeIcon
              icon={faFolder}
              style={{ color: "#00ea85", fontSize: "13px" }}
            />
            <p className="music-styles-text">Bachata</p>
          </div>
        </Accordion.Header>
        <Accordion.Body>Lorem ipsum dolor sit amet, consectetur</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <div className="music-styles-container">
            <FontAwesomeIcon
              icon={faFolder}
              style={{ color: "#ff5fa9", fontSize: "13px" }}
            />
            <p className="music-styles-text">Merengue</p>
          </div>
        </Accordion.Header>
        <Accordion.Body>Lorem ipsum dolor sit amet, consectetur</Accordion.Body>
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
        <Accordion.Body>Lorem ipsum dolor sit amet, consectetur</Accordion.Body>
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
        <Accordion.Body>Lorem ipsum dolor sit amet, consectetur</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accord;
