import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faSquare,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Player2.module.css";


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
      <div className={styles.controls}>
        <div
          id="btnplay"
          className={styles.play_container}
          onClick={ToggleClassPlay}
        >
          <FontAwesomeIcon
            icon={faPlay}
            className={styles.btn_action}
            style={{ cursor: "pointer" }}
            onClick={PlayPause}
          />
        </div>

        {isplaying ? (
          <div id="btnpause" className={styles.play_container}>
            <FontAwesomeIcon
              icon={faForwardStep}
              onClick={PlayPause}
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
        <div className={styles.title_video}>
          <div className={styles.title}>
            <div
              className={styles.seek_bar}
              style={{ width: `${currentSong.progress + "%"}` }}
            ></div>
            <div className={styles.container_info}>
              <span className={styles.first_p}>{currentSong.title}</span>
              <span className={styles.second_p}>{currentSong.artist}</span>
            </div>
          </div>

          <div className={styles.title}>
            <div className={styles.container_info}>
              <span className={styles.first_p}>{nextSong.title}</span>
              <span className={styles.second_p}>{nextSong.artist}</span>
            </div>
          </div>

          <div className={styles.title}>
            <div className={styles.container_info}>
              <span className={styles.first_p}>{prevSong.title}</span>
              <span className={styles.second_p}>{prevSong.artist}</span>
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
