import React, { useEffect, useRef, useState } from "react";
import styles from "../Logeditor/Logeditor.module.css";

import {
  faPlay,
  faPause,
  faForwardStep,
  faMagnifyingGlass,
  faFilter,
  faStop,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import princeroyce from "../../Assets/Img/princeroyce.png";
import botondeplay from "../../Assets/Img/botondeplay.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { songsdata } from "../Player/audios";
import Player2 from "../Player/Player2";

const Multiplayer = () => {
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[1]);
  const [nextSong, setNextSong] = useState(songsdata[0]);
  const [prevSong, setPrevSong] = useState(songsdata[2]);

  const audioElem = useRef();

  const [query, updateQuery] = useState("");

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

const onPlaying = () => {
  const duration = audioElem.current.duration;
  const ct = audioElem.current.currentTime;

  if (!isNaN(duration)) {
    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  }
};

  const [isActive, setActive] = useState(false);

  const ToggleClassPlay = () => {
    setActive(!isActive);
    var btn = document.getElementById("btnplay");
    btn.classList.toggle("clicked");
  };

  const ToggleClassPause = () => {
    setActive(!isActive);
    var btn = document.getElementById("btnpause");
    btn.classList.toggle("clicked");
  };

  const ToggleClassStop = () => {
    setActive(!isActive);
    var btn = document.getElementById("btnstop");
    btn.classList.toggle("clicked");
  };

  return (
    <>
      <div className={styles.search_container_third}>
        <div className={styles.search_first_column}>
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

      <div className={styles.multiplayer_container}>
        <div>
          <div className={styles.multiplayer}>
            <div className={styles.intro}>
              <p className={styles.title_first}>INTRO</p>
              <p className={styles.time}>{formatTime(currentSong.progress)}</p>
            </div>
            <div className={styles.restante}>
              <p className={styles.title_first}>RESTANTE ACTUAL</p>
              <p className={styles.time}>
                {formatTime(currentSong.length - currentSong.progress)}
              </p>
            </div>
            <div className={styles.playlist_actual}>
              <p className={styles.title_first}>PLAYLIST</p>
              <p className={styles.time}>48:23:58</p>
            </div>
          </div>
          <div>
            <audio
              src={currentSong.url}
              ref={audioElem}
              onTimeUpdate={onPlaying}
            />
            <Player2
              songs={songs}
              setSongs={setSongs}
              isplaying={isplaying}
              setisplaying={setisplaying}
              audioElem={audioElem}
              currentSong={currentSong}
              nextSong={nextSong}
              prevSong={prevSong}
              artist={currentSong.artist}
              setCurrentSong={setCurrentSong}
            />
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
              onClick={ToggleClassPlay}
            />
          </div>
          <div id="btnpause" className={styles.play_container_pause}>
            <FontAwesomeIcon
              icon={faPause}
              className={styles.btn_action_pause}
              style={{ cursor: "pointer" }}
              onClick={ToggleClassPause}
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
    </>
  );
};

export default Multiplayer;
