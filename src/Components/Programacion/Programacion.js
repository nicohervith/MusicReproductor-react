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
} from "@fortawesome/free-solid-svg-icons";
import botondeplay from "../../Assets/Img/botondeplay.png";
import whatsapp from "../../Assets/Img/whatsapp.png";
import playlisticon from "../../Assets/Img/playlisticon.png";

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

export default Programacion;