import React from "react";
import Navigation from "../Navigation/Navigation";
import Accord from "./Accord";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "react-bootstrap/Accordion";
import {
  faSliders,
  faBackwardFast,
  faPlay,
  faForwardFast,
  faEllipsisVertical,
  faChevronDown,
  faListMusic,
} from "@fortawesome/free-solid-svg-icons";
import { songsdata } from "../Player/audios";
import { useRef, useState, useEffect } from "react";
import Player from "../Player/Player";
import Search from "../Player/Search";
import Album from "../Player/Album";
import InfoArtist from "./InfoArtist";
import nosignal from "../../Assets/Img/nosignal.png";
import playlist from "../../Assets/Img/playlist.png";
import styles from "./Explorer.module.css";
import MediaExplorer from "../MediaExplorer/MediaExplorer";



const Explorer = () => {
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[0]);
  const [currentArtist, setCurrentArtist] = useState(songsdata.artist);

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
        <div>
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
              <div className="album-container">
                <Album />
              </div>

              <div className="artist-and-album">
                <InfoArtist />
              </div>
            </div>
          </div>

          <div className="mix-explorer">
            <div className="social-media">
              <div className="social-media-blocks-reproduction-mid">
                <div className="play-next-prev">
                  <FontAwesomeIcon icon={faBackwardFast} />
                  <FontAwesomeIcon icon={faPlay} />
                  <FontAwesomeIcon icon={faForwardFast} />
                </div>
                <div className="reproduciendo">
                  <p>Reproduciendo a</p>
                  <p className="artist">Manuel turizo</p>
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
              <Accordion.Header>
                <div className="music-styles-container">
                  <FontAwesomeIcon
                    icon={faSliders}
                    style={{ fontSize: "13px" }}
                  />
                  <p className="music-styles-text">GENERAL</p>
                  {/* <FontAwesomeIcon className="drop-icon" icon={faChevronDown} />
                <FontAwesomeIcon icon={faEllipsisVertical} /> */}
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
              <Accordion.Header>
                <div className="music-styles-container">
                  <FontAwesomeIcon
                    icon={faSliders}
                    style={{ fontSize: "13px" }}
                  />
                  <p className="music-styles-text">GENERAL</p>
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
