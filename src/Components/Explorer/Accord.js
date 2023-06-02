import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "react-bootstrap/Accordion";
import {
  faEllipsisVertical,
  faFolder,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import barrasdesonido from "../../Assets/Img/barrasdesonido.png";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Accord() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionToggle = (accordionId) => {
    setActiveAccordion(accordionId === activeAccordion ? null : accordionId);
  };

  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header
          className={`accordion_header} 
            activeAccordion === "0" ? styles.accordion_active : ""
          }`}
          onClick={() => handleAccordionToggle("0")}
        >
          <div className="music-styles-container">
            <img src={barrasdesonido} alt="" style={{ width: "15px" }} />
            <p className="music-styles-text">AUDIO</p>
            <div>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`accordion-chevron ${
                  activeAccordion === "0" ? "rotate" : ""
                }`}
              />
            </div>
            <div className="">
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                className="ellipsis-vertical"
              />
            </div>
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
          className={`accordion_header} 
            activeAccordion === "1" ? styles.accordion_active : ""
          }`}
          onClick={() => handleAccordionToggle("1")}
          style={{
            background: "#9a1111 !important",
          }}
        >
          <div style={{ display: "flex", width: "100%" }}>
            <div className="music-styles-container">
              <FontAwesomeIcon
                icon={faFolder}
                style={{ color: "#00ea85", fontSize: "13px" }}
              />
              <p className="music-styles-text">Bachata</p>
            </div>
            <div>
              <div>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`accordion-chevron ${
                    activeAccordion === "1" ? "rotate" : ""
                  }`}
                />
              </div>
            </div>
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
        <Accordion.Header
          className={`accordion_header} 
            activeAccordion === "3" ? styles.accordion_active : ""
          }`}
          onClick={() => handleAccordionToggle("3")}
        >
          <div style={{ display: "flex", width: "100%" }}>
            <div className="music-styles-container">
              <FontAwesomeIcon
                icon={faFolder}
                style={{ color: "#ff5fa9", fontSize: "13px" }}
              />
              <p className="music-styles-text">Merengue</p>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`accordion-chevron ${
                  activeAccordion === "3" ? "rotate" : ""
                }`}
              />
            </div>
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
        <Accordion.Header
          className={`accordion_header} 
            activeAccordion === "4" ? styles.accordion_active : ""
          }`}
          onClick={() => handleAccordionToggle("4")}
        >
          <div className="music-styles-container">
            <FontAwesomeIcon
              icon={faFolder}
              style={{ color: "#fb925b", fontSize: "13px" }}
            />
            <p className="music-styles-text">Salsa</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`accordion-chevron ${
                activeAccordion === "4" ? "rotate" : ""
              }`}
            />
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
        <Accordion.Header
          className={`accordion_header} 
            activeAccordion === "5" ? styles.accordion_active : ""
          }`}
          onClick={() => handleAccordionToggle("5")}
        >
          <div className="music-styles-container">
            <FontAwesomeIcon
              icon={faFolder}
              style={{ color: "#00e3cf", fontSize: "13px" }}
            />
            <p className="music-styles-text">Reggaeton</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`accordion-chevron ${
                activeAccordion === "5" ? "rotate" : ""
              }`}
            />
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
