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
} from "@fortawesome/free-solid-svg-icons";
import { songsdata } from "../Player/audios";
import { useRef, useState, useEffect } from "react";
import Player from "../Player/Player";

const Explorer = () => {
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[1]);

  const audioElem = useRef();

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
        <div className="first-aside">
          <div className="  dropdown-container-aside">
            <Accord />
          </div>
          <div className="">
            <div className="social-media">
              <div className="social-media-blocks">
                <p>Playlist</p>
                <p>(0)</p>
              </div>
              <div className="social-media-blocks">
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

        <div className="explorer-mid">
          <div class="reproductor">
            <div class="container-reproductor">
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
                setCurrentSong={setCurrentSong}
              />
            </div>
          </div>
          <div className="mix-explorer">
            <div className="social-media">
              <div className="social-media-blocks-reproduction-mid">
                <div class="play-next-prev">
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
    </>
  );
};

export default Explorer;
