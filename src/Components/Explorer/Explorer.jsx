import React, { useEffect, useRef, useState } from "react";
import Navigation from "../Navigation/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "react-bootstrap/Accordion";
import {
  faPlay,
  faForwardStep,
  faEllipsisVertical,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { WaveSurfer } from "react-wavesurfer.js";
import { songsdata } from "../Player/audios";
import Player from "../Player/Player";
import Search from "../Player/Search";
import Album from "../Player/Album";
import InfoArtist from "./InfoArtist";
import nosignal from "../../Assets/Img/nosignal.png";
import barrasdesonido from "../../Assets/Img/barrasdesonido.png";
import styles from "./Explorer.module.css";
import "./explorer.css";
import MediaExplorer from "../MediaExplorer/MediaExplorer";
import ReactAudioPlayer from "react-audio-player";
import Audiowave from "../Player/Audiowave";
import * as Tone from "tone";

const Explorer = () => {
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[1]);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const canvasRef = useRef(null);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionToggle = (accordionId) => {
    setActiveAccordion(accordionId === activeAccordion ? null : accordionId);
  };

  const audioElem = useRef();

  const [query, updateQuery] = useState("");

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };


  return (
    <>
      <Navigation />
      <div className="explorer-container">
        <div style={{ marginTop: "50px" }}>
          <MediaExplorer />
        </div>

        <div className="explorer-mid">
          <div className="reproductor">
            <div className="container-reproductor">
              <audio
                src={currentSong.url}
                ref={audioElem}
                onTimeUpdate={onPlaying}
              />
              <Player
                songs={songs}
                setSongs={setSongs}
                isplaying={isplaying}
                setisplaying={setisplaying}
                audioElem={audioElem}
                currentSong={currentSong}
                artist={currentSong.artist}
                setCurrentSong={setCurrentSong}
              />

              <div>
                <Search
                  value={query}
                  onChange={(e) => updateQuery(e.target.value.toLowerCase())}
                  placeholder={`Buscar aquí`}
                />
              </div>
              {/* <div className="video">
                <Audiowave/>
              </div> */}
              <div className="album-container">
                <Album />
              </div>

              <div className="artist-and-album">
                <InfoArtist />
              </div>
            </div>
          </div>

          <div className="mix-explorer">
            <div className="social-media-mid-explorer">
              <div className="social-media-blocks-reproduction-mid">
                <div className="play-next-prev">
                  <FontAwesomeIcon
                    icon={faForwardStep}
                    style={{ transform: "rotate(180deg)" }}
                  />
                  <FontAwesomeIcon icon={faPlay} />
                  <FontAwesomeIcon icon={faForwardStep} />
                </div>
                <div className="reproduciendo">
                  <p>Reproduciendo a</p>
                  <p className="artist">{currentSong.artist}</p>
                </div>
                <div className={styles.time_text}>
                  <p className={styles.time_text_first}>00:02:52</p>
                  <p className={styles.time_text_second}>-00:02:52</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="second-aside">
          <div className="nosignal">
            <img src={nosignal} alt="" />
          </div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header
                className={`${styles.accordion_header} ${
                  activeAccordion === "0" ? styles.accordion_active : ""
                }`}
                onClick={() => handleAccordionToggle("0")}
              >
                <div className="music-styles-container">
                  <img src={barrasdesonido} alt="" style={{ width: "15px" }} />
                  <p className="music-styles-text">GENERAL</p>
                  <div>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`accordion-chevron ${
                        activeAccordion === "0" ? "rotate" : ""
                      }`}
                    />
                  </div>
                  <div className={styles.ellipsis_container}>
                    <FontAwesomeIcon
                      icon={faEllipsisVertical}
                      className="ellipsis-vertical"
                    />
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body style={{ padding: "2px" }}>
                <div>
                  <span>Información del archivo aquí</span>
                  <p className={styles.titulo}>Título</p>
                  <span>Información del archivo aquí</span>
                  <p className={styles.titulo}>Artista</p>
                  <span>Información del archivo aquí</span>
                  <p className={styles.titulo}>Álbum</p>
                  <span>Información del archivo aquí</span>
                  <p className={styles.titulo}>Compositor</p>
                  <span>Información del archivo aquí</span>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              className="accordion-item"
              style={{ borderBottom: "0.3px solid rgba(138, 136, 137, 0.3)" }}
              eventKey="2"
            >
              <Accordion.Header
                className={`${styles.accordion_header} ${
                  activeAccordion === "1" ? styles.accordion_active : ""
                }`}
                onClick={() => handleAccordionToggle("1")}
              >
                <div className="music-styles-container">
                  <img src={barrasdesonido} alt="" style={{ width: "15px" }} />
                  <p className="music-styles-text">GENERAL</p>
                  <div>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`accordion-chevron ${
                        activeAccordion === "1" ? "rotate" : ""
                      }`}
                    />
                  </div>
                  <div className={styles.ellipsis_container}>
                    <FontAwesomeIcon
                      icon={faEllipsisVertical}
                      className="ellipsis-vertical"
                    />
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body style={{ padding: "2px" }}>
                <div>
                  <span>Información del archivo aquí</span>
                  <p className={styles.titulo}>Título</p>
                  <span>Información del archivo aquí</span>
                  <p className={styles.titulo}>Artista</p>
                  <span>Información del archivo aquí</span>
                  <p className={styles.titulo}>Álbum</p>
                  <span>Información del archivo aquí</span>
                  <p className={styles.titulo}>Compositor</p>
                  <span>Información del archivo aquí</span>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header
                className={`${styles.accordion_header} ${
                  activeAccordion === "3" ? styles.accordion_active : ""
                }`}
                onClick={() => handleAccordionToggle("3")}
              >
                <div className="music-styles-container">
                  <img src={barrasdesonido} alt="" style={{ width: "15px" }} />
                  <p className="music-styles-text">GENERAL</p>
                  <div>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`accordion-chevron ${
                        activeAccordion === "3" ? "rotate" : ""
                      }`}
                    />
                  </div>
                  <div className={styles.ellipsis_container}>
                    <FontAwesomeIcon
                      icon={faEllipsisVertical}
                      className="ellipsis-vertical"
                    />
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body style={{ padding: "2px" }}>
                <div>
                  <span>Información del archivo aquí</span>
                  <p className={styles.titulo}>Título</p>
                  <span>Información del archivo aquí</span>
                  <p className={styles.titulo}>Artista</p>
                  <span>Información del archivo aquí</span>
                  <p className={styles.titulo}>Álbum</p>
                  <span>Información del archivo aquí</span>
                  <p className={styles.titulo}>Compositor</p>
                  <span>Información del archivo aquí</span>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Explorer;
