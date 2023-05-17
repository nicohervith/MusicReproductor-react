import React, { useRef, useState } from "react";
import "./player.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faSquare,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Player3.module.css";
import { songsdata } from "./audios";
import Programacion from "../Programacion/Programacion";

const Player = ({
  audioElem,
  isplaying,
  setisplaying,
  currentSong,
  setCurrentSong,
  songs,
  nextSong,
  prevSong,
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
    <div className={styles.player_container}>
      <div className={styles.title_and_navigation}>
        <div className={styles.title_video}>
          <div className={styles.title}>
            <div
              className={styles.seek_bar}
              style={{ width: `${currentSong.progress + "%"}` }}
              onClick={PlayPause}
            ></div>
            <div className={styles.container_info} onClick={PlayPause}>
              <span className={styles.first_p}>{currentSong.title}</span>
              <span className={styles.second_p}>{currentSong.artist}</span>
            </div>
          </div>
        </div>
        <div className="navigation">
          <div
            className="navigation_wrapper"
            onClick={checkWidth}
            ref={clickRef}
          >
            <div
              className="seek_bar"
              style={{ width: `${currentSong.progress + "%"}` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
