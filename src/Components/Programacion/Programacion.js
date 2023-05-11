import React from "react";
import Navigation from "../Navigation/Navigation";
import Accord from "../Explorer/Accord";
import styles from "./Programacion.module.css";
import Search from "../Player/Search";
import ShortInfo from "../Explorer/ShortInfo";
import ShortAlbum from "../Player/ShortAlbum";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "react-bootstrap/Accordion";
import {
  faSliders,
  faBackwardFast,
  faPlay,
  faForwardFast,
  faFilter,
  faMagnifyingGlass,
  faFolder,
  faSquare,
  faPause,
  faStop,
} from "@fortawesome/free-solid-svg-icons";
import botondeplay from "../../Assets/Img/botondeplay.png";
import whatsapp from "../../Assets/Img/whatsapp.png";
import playlisticon from "../../Assets/Img/playlisticon.png";
import princeroyce from "../../Assets/Img/princeroyce.png";
import { Link } from "react-router-dom";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import { Dropdown } from "react-bootstrap";
import IPlay from "../IPlay/IPlay";

const Programacion = () => {
  return (
    <>
      <Navigation />
      <div className={styles.explorercontainer}>
        <div className={styles.firstaside}>
          <div className="  dropdown-container-aside">
            <Accord />
          </div>

          <div className="">
            <div className="social-media">
              <div className="social-media-blocks">
                <img
                  src={playlisticon}
                  alt=""
                  style={{ width: "15px", objectFit: "cover", margin: "auto" }}
                />
                <p>Playlist</p>
                <p>(0)</p>
              </div>
              <div className="social-media-blocks">
                <img
                  src={whatsapp}
                  alt=""
                  style={{ width: "15px", objectFit: "cover", margin: "auto" }}
                />
                <p> Social Media</p>
                <p>(0)</p>
              </div>
              <div className="social-media-blocks-reproduction">
                <img
                  src="https://www.cotopaxi.com.ec/sites/default/files/2020-08/BLANCO%20760X440PX_0.png"
                  alt=""
                />
                <div className="reproduciendo">
                  <p>Reproduciendo a</p>
                  <p className="artist">Manuel turizo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.secondcolumn}>
          <div className={styles.search_container}>
            <div className={styles.input_search}>
              <input placeholder={`Buscar aquí`} />
              <div className={styles.container_search_icon}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{
                    color: "#fff",
                    margin: "auto",
                    width: "100%",
                    cursor: "pointer",
                  }}
                />
              </div>
              <div
                className={styles.fafilter_container}
                style={{ marginLeft: "3px" }}
              >
                <FontAwesomeIcon
                  icon={faFilter}
                  style={{
                    color: "#fff",
                    margin: "auto",
                    width: "100%",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles.video_container}>
            <div className={styles.video_block}>
              <div className={styles.video_block_container_img}>
                <img
                  src="https://www.cotopaxi.com.ec/sites/default/files/2020-08/BLANCO%20760X440PX_0.png"
                  alt=""
                />
              </div>
              <div className={styles.info_song}>
                <span>Nombre canción</span>
                <p>Artista</p>
                <p>Álbum - año</p>
              </div>
            </div>
            <div className={styles.video_block}>
              <div className={styles.video_block_container_img}>
                <img
                  src="https://www.cotopaxi.com.ec/sites/default/files/2020-08/BLANCO%20760X440PX_0.png"
                  alt=""
                />
              </div>
              <div className={styles.info_song}>
                <span>Nombre canción</span>
                <p>Artista</p>
                <p>Álbum - año</p>
              </div>
            </div>

            <div className={styles.video_block}>
              <div className={styles.video_block_container_img}>
                <img
                  src="https://www.cotopaxi.com.ec/sites/default/files/2020-08/BLANCO%20760X440PX_0.png"
                  alt=""
                />
              </div>
              <div className={styles.info_song}>
                <span>Nombre canción</span>
                <p>Artista</p>
                <p>Álbum - año</p>
              </div>
            </div>

            <div className={styles.video_block}>
              <div className={styles.video_block_container_img}>
                <img
                  src="https://www.cotopaxi.com.ec/sites/default/files/2020-08/BLANCO%20760X440PX_0.png"
                  alt=""
                />
              </div>
              <div className={styles.info_song}>
                <span>Nombre canción</span>
                <p>Artista</p>
                <p>Álbum - año</p>
              </div>
            </div>

            <div className={styles.video_block}>
              <div className={styles.video_block_container_img}>
                <img
                  src="https://www.cotopaxi.com.ec/sites/default/files/2020-08/BLANCO%20760X440PX_0.png"
                  alt=""
                />
              </div>
              <div className={styles.info_song}>
                <span>Nombre canción</span>
                <p>Artista</p>
                <p>Álbum - año</p>
              </div>
            </div>

            <div className={styles.video_block}>
              <div className={styles.video_block_container_img}>
                <img
                  src="https://www.cotopaxi.com.ec/sites/default/files/2020-08/BLANCO%20760X440PX_0.png"
                  alt=""
                />
              </div>
              <div className={styles.info_song}>
                <span>Nombre canción</span>
                <p>Artista</p>
                <p>Álbum año</p>
              </div>
            </div>

            <div className={styles.video_block}>
              <div className={styles.video_block_container_img}>
                <img
                  src="https://www.cotopaxi.com.ec/sites/default/files/2020-08/BLANCO%20760X440PX_0.png"
                  alt=""
                />
              </div>
              <div className={styles.info_song}>
                <span>Nombre canción</span>
                <p>Artista</p>
                <p>Álbum año</p>
              </div>
            </div>
          </div>

          <div className={styles.mix_explorer}>
            <div className={styles.social_media}>
              <div className={styles.social_media_blocks_reproduction_mid}>
                <div className={styles.play_next_prev}>
                  <FontAwesomeIcon icon={faBackwardFast} />
                  <FontAwesomeIcon icon={faPlay} />
                  <FontAwesomeIcon icon={faForwardFast} />
                </div>
                <div className="reproduciendo">
                  <p>La Bachata</p>
                  <p className="artist">Manuel turizo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.thirdcolumn}>
          <div className={styles.search_container_third}>
            <div className={styles.search_first_column}>
              {/* <FontAwesomeIcon icon={faPlay} /> */}
              <img src={botondeplay} alt="" style={{ width: "15px" }} />
              Multiplayer
            </div>
            <div className={styles.input_search}>
              <input placeholder={`Buscar aquí`} />
              <div className={styles.container_search_icon}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{
                    color: "#fff",
                    margin: "auto",
                    width: "100%",
                    cursor: "pointer",
                  }}
                />
              </div>
              <div
                className={styles.fafilter_container}
                style={{ marginLeft: "3px" }}
              >
                <FontAwesomeIcon
                  icon={faFilter}
                  style={{
                    color: "#fff",
                    margin: "auto",
                    width: "100%",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          </div>

          <div className={styles.container_multiplayer_reproductor}>
            <div className={styles.container_img_reproductor}>
              <img src={princeroyce} alt="" />
            </div>
            <div className={styles.container_playlist_reproductor}>
              <p className={styles.title_first}>PLAYLIST</p>
              <p className={styles.time}>48:23:58</p>
            </div>
          </div>

          <div className={styles.controls_main_container}>
            <div className={styles.controls_container}>
              <div id="btnplay" className={styles.play_container_controls}>
                <FontAwesomeIcon
                  icon={faPlay}
                  className={styles.btn_action_play}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div id="btnpause" className={styles.play_container_pause}>
                <FontAwesomeIcon
                  icon={faPause}
                  className={styles.btn_action_pause}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div id="btnstop" className={styles.play_container_pause}>
                <FontAwesomeIcon
                  className={styles.btn_action_pause}
                  icon={faSquare}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div id="btnstop" className={styles.play_container_pause}>
                <FontAwesomeIcon
                  className={styles.btn_action_pause}
                  icon={faPlay}
                  style={{ cursor: "pointer", paddingLeft: "10px" }}
                />
                <FontAwesomeIcon
                  icon={faStop}
                  className={styles.btn_action_pause}
                  style={{ cursor: "pointer", paddingRight: "10px" }}
                />
              </div>
            </div>
            <div>
              <Dropdown>
                <DropdownToggle
                  className={styles.dropdown_button}
                  style={{
                    backgroundColor: "#018fe5",
                    border: "none",
                    color: "#fff ",
                    fontSize: "14px",
                    width: "100%",
                    fontWeight: "600",
                    borderRadius: "0 !important",
                  }}
                >
                  AUTOMÁTICO
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Accion 1</DropdownItem>
                  <DropdownItem>Accion 1</DropdownItem>
                  <DropdownItem>Accion 1</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>

          <div className="">
            <ShortInfo />
          </div>
        </div>

        <div className={styles.fourthcolumn}>
          <div
            className={styles.fourthcolumn_space}
            
          >
            <IPlay />
          </div>

          <div className="second-aside" style={{ marginTop: "-49px" }}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <div className="music-styles-container">
                    <FontAwesomeIcon
                      icon={faSliders}
                      style={{ fontSize: "13px" }}
                    />
                    <p className="music-styles-text">GENERAL</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur
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
                      icon={faSliders}
                      style={{ fontSize: "13px" }}
                    />
                    <p className="music-styles-text">GENERAL</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <div className="music-styles-container">
                    <FontAwesomeIcon
                      icon={faSliders}
                      style={{ fontSize: "13px" }}
                    />
                    <p className="music-styles-text">GENERAL</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Programacion;
