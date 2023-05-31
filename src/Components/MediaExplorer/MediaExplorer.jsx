import React, { useState } from "react";
import Accord from "../Explorer/Accord";
import playlisticon from "../../Assets/Img/playlisticon.png";
import whatsapp from "../../Assets/Img/whatsapp.png";
import { Accordion } from "react-bootstrap";


const MediaExplorer = () => {

  return (
    <>
      <div className="first-aside">
        <div className="  dropdown-container-aside">
          <Accord />
        </div>
        <div className="">
          <div className="social-media">
            <Accordion defaultActiveKey="0" className="accordion-upwards">
              <Accordion.Item eventKey="1" style={{ width: "100%" }}>
                <Accordion.Header >
                  <div className="container_accord_chevron">
                    <div className="accordion-div-nas">
                      <p className="accordion-button-nas">NAS 1 Local</p>
                    </div>

                  </div>
                </Accordion.Header>
                <Accordion.Body style={{ padding: "0px !important" }}>
                  <div className="audio-video-otros-container">
                    <div className="audio-text">
                      <p> Audio</p>
                      <div className="barra">
                        <div
                          className="progreso"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="audio-text">
                      <p> Video</p>
                      <div className="barra">
                        <div
                          className="progreso"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="audio-text">
                      <p> Otros</p>
                      <div className="barra">
                        <div
                          className="progreso"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <div className="social-media-blocks">
              <img
                src={playlisticon}
                alt=""
                style={{
                  width: "15px",
                  objectFit: "cover",
                  margin: "auto",
                }}
              />
              <p>Playlist</p>
              <p>(0)</p>
            </div>
            <div className="social-media-blocks">
              <img
                src={whatsapp}
                alt=""
                style={{
                  width: "15px",
                  objectFit: "cover",
                  margin: "auto",
                }}
              />
              <p>Social Media</p>
              <p>(0)</p>
            </div>
          </div>
          <div className="social-media-blocks-reproduction">
            <img
              src="https://www.cotopaxi.com.ec/sites/default/files/2020-08/BLANCO%20760X440PX_0.png"
              alt=""
            />
            <div className="reproduciendo-first-aside">
              <p className="reproduction-first-aside">Reproduciendo a</p>
              <p className="artist">Manuel turizo</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaExplorer;
