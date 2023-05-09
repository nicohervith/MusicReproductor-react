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
import jugar from "../../Assets/Img/jugar.png";
import filtrar from "../../Assets/Img/filtrar.png";

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
            <Search placeholder={`Buscar aquí`} />
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
              <img src={jugar} alt="" />
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
               {/*  <img
                  src={filtrar}
                  alt=""
                  style={{
                    color: "#fff",
                    margin: "auto",
                    width: "100%",
                    cursor: "pointer",
                  }}
                /> */}
              </div>
            </div>
          </div>

          <div className={styles.multiplayer_container}>
            <div>
              <div className={styles.multiplayer}>
                <div className={styles.intro}>
                  <p className={styles.title_first}>INTRO</p>
                  <p className={styles.time}>00:15</p>
                </div>
                <div className={styles.restante}>
                  <p className={styles.title_first}>RESTANTE ACTUAL</p>
                  <p className={styles.time}>03:48</p>
                </div>
                <div className={styles.playlist_actual}>
                  <p className={styles.title_first}>PLAYLIST</p>
                  <p className={styles.time}>48:23:58</p>
                </div>
              </div>
              <div>
                <div className={styles.player_container}>
                  <div className={styles.controls}>
                    <div id="btnplay" className={styles.play_container}>
                      <FontAwesomeIcon
                        icon={faPlay}
                        className={styles.btn_action}
                        onClick={PlayPause}
                        style={{ cursor: "pointer" }}
                      />
                    </div>

                    {isplaying ? (
                      <div id="btnpause" className={styles.play_container}>
                        <FontAwesomeIcon
                          icon={faPause}
                          className={styles.btn_action}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    ) : (
                      <div id="btnpause" className={styles.play_container}>
                        <FontAwesomeIcon
                          className={styles.btn_action}
                          icon={faForwardStep}
                        />
                      </div>
                    )}
                    <div id="btnstop" className={styles.play_container}>
                      <FontAwesomeIcon
                        className={styles.btn_action}
                        icon={faForwardStep}
                        style={{ transform: "rotate(180deg)" }}
                      />
                    </div>
                  </div>
                  <div className={styles.title_and_navigation}>
                    <div className={styles.title_block}>
                      <div className={styles.container_info}>
                        <span className={styles.first_p}>
                          Cuando nos volvamos a encontrar
                        </span>
                        <span className={styles.second_p}>Carlos Vives</span>
                      </div>
                    </div>
                    <div className={styles.title_block}>
                      <div className={styles.container_info}>
                        <span className={styles.first_p}>
                          Cuando nos volvamos a encontrar
                        </span>
                        <span className={styles.second_p}>Carlos Vives</span>
                      </div>
                    </div>
                    <div className={styles.title_block}>
                      <div className={styles.container_info}>
                        <span className={styles.first_p}>
                          Cuando nos volvamos a encontrar
                        </span>
                        <span className={styles.second_p}>Carlos Vives</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.multiplayer_img}>
              <img src={princeroyce} alt="" />
            </div>

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
              <div
                id="btnstop"
                className={styles.play_container_pause}
                onClick={ToggleClassStop}
              >
                <FontAwesomeIcon
                  className={styles.btn_action_pause}
                  icon={faSquare}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div
                id="btnstop"
                className={styles.play_container_pause}
                onClick={ToggleClassStop}
              >
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
          </div>

          <div className="album-container">
            <ShortAlbum />
          </div>
          <div className="">
            <ShortInfo />
          </div>
        </div>

        <div className={styles.fourthcolumn}>
          <div className={styles.fourthcolumn_space}>
            <div className={styles.radio_container}>
              <div className={styles.radio_block}>
                <div className={styles.radio_contenido}>
                  <p className={styles.first_p}>104.04 f.m.</p>
                  <p>Solo éxitos</p>
                  <span>00:07</span>
                </div>
              </div>
              <div className={styles.radio_block}>
                <div className={styles.radio_contenido}>
                  <p className={styles.first_p}>104.04 f.m.</p>
                  <p>Solo éxitos</p>
                  <span>00:07</span>
                </div>
              </div>
              <div className={styles.radio_block}>
                <div className={styles.radio_contenido}>
                  <p className={styles.first_p}>104.04 f.m.</p>
                  <p>Solo éxitos</p>
                  <span>00:07</span>
                </div>
              </div>
              <div className={styles.radio_block}>
                <div className={styles.radio_contenido}>
                  <p className={styles.first_p}>104.04 f.m.</p>
                  <p>Solo éxitos</p>
                  <span>00:07</span>
                </div>
              </div>
              <div className={styles.radio_block}>
                <div className={styles.radio_contenido}>
                  <p className={styles.first_p}>104.04 f.m.</p>
                  <p>Solo éxitos</p>
                  <span>00:07</span>
                </div>
              </div>
              <div className={styles.radio_block}>
                <div className={styles.radio_contenido}>
                  <p className={styles.first_p}>104.04 f.m.</p>
                  <p>Solo éxitos</p>
                  <span>00:07</span>
                </div>
              </div>
              <div className={styles.radio_block}>
                <div className={styles.radio_contenido}>
                  <p className={styles.first_p}>104.04 f.m.</p>
                  <p>Solo éxitos</p>
                  <span>00:07</span>
                </div>
              </div>
              <div className={styles.radio_block}>
                <div className={styles.radio_contenido}>
                  <p className={styles.first_p}>104.04 f.m.</p>
                  <p>Solo éxitos</p>
                  <span>00:07</span>
                </div>
              </div>
              <div className={styles.radio_block}>
                <div className={styles.radio_contenido}>
                  <p className={styles.first_p}>104.04 f.m.</p>
                  <p>Solo éxitos</p>
                  <span>00:07</span>
                </div>
              </div>
            </div>
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
