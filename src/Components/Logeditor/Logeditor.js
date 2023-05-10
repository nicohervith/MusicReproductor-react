import React, { useRef, useState } from "react";
import Navigation from "../Navigation/Navigation";
import Accord from "../Explorer/Accord";
import styles from "./Logeditor.module.css";
import Search from "../Player/Search";
import ShortInfo from "../Explorer/ShortInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "react-bootstrap/Accordion";
import whatsapp from "../../Assets/Img/whatsapp.png";
import playlisticon from "../../Assets/Img/playlisticon.png";

import {
  faSliders,
  faBackwardFast,
  faPlay,
  faForwardFast,
  faPause,
  faForwardStep,
  faMagnifyingGlass,
  faFilter,
  faStop,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import ShortAlbum from "../Player/ShortAlbum";
import princeroyce from "../../Assets/Img/princeroyce.png";
import botondeplay from "../../Assets/Img/botondeplay.png";
import filtrar from "../../Assets/Img/filtrar.png";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import Multiplayer from "../Multiplayer/Multiplayer";
import IPlay from "../IPlay/IPlay";

const Logeditor = ({
  audioElem,
  isplaying,
  setisplaying,
  currentSong,
  setCurrentSong,
  songs,
}) => {
  const clickRef = useRef();

  const PlayPause = () => {
    setisplaying(!isplaying);
  };

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    audioElem.current.currentTime = (divprogress / 100) * currentSong.length;
  };

  const [isActive, setActive] = useState("false");
  const ToggleClassPlay = () => {
    var btn = document.getElementById("btnplay");

    setActive(!isActive);
    btn.classList.toggle("clicked");
  };

  const ToggleClassPause = () => {
    var btn = document.getElementById("btnpause");

    setActive(!isActive);
    btn.classList.toggle("clicked");
  };

  const ToggleClassStop = () => {
    var btn = document.getElementById("btnstop");

    setActive(!isActive);
    btn.classList.toggle("clicked");
  };
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
                  <FontAwesomeIcon
                    icon={faForwardStep}
                    style={{ transform: "rotate(180deg)" }}
                  />
                  <FontAwesomeIcon icon={faPlay} />
                  <FontAwesomeIcon icon={faForwardStep} />
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
          <Multiplayer />
          <div className="album-container">
            <ShortAlbum />
          </div>
          <div className="">
            <ShortInfo />
          </div>
        </div>

        <div className={styles.fourthcolumn}>
          <div className={styles.fourthcolumn_space}>
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

export default Logeditor;
