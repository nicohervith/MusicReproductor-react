import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faSquare } from "@fortawesome/free-solid-svg-icons";
import chords from "../../Assets/Video/chords.mp4";
import styles from "./Player.module.css";

const Player = ({
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
    <div className={styles.player_container}>
      <div className={styles.controls}>
        {/* <BsFillSkipStartCircleFill className="btn_action" onClick={skipBack} /> */}
        <div
          id="btnplay"
          className={styles.play_container}
          onClick={ToggleClassPlay}
        >
          <FontAwesomeIcon
            icon={faPlay}
            className={styles.btn_action}
            onClick={PlayPause}
            style={{ cursor: "pointer" }}
          />
        </div>

        {isplaying ? (
          <div
            id="btnpause"
            className={styles.play_container}
            onClick={ToggleClassPause}
          >
            <FontAwesomeIcon
              icon={faPause}
              className={styles.btn_action}
              onClick={PlayPause}
              style={{ cursor: "pointer" }}
            />
          </div>
        ) : (
          <div
            id="btnpause"
            className={styles.play_container}
            onClick={ToggleClassPause}
          >
            <FontAwesomeIcon
              icon={faPause}
              className={styles.btn_action}
              onClick={PlayPause}
              style={{ cursor: "pointer" }}
            />
          </div>
        )}
        <div
          id="btnstop"
          className={styles.play_container}
          onClick={ToggleClassStop}
        >
          <FontAwesomeIcon
            className={styles.btn_action}
            icon={faSquare}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <div className={styles.title_and_navigation}>
        <div className={styles.title_video}>
          <div className={styles.title}>
            <p className={styles.title_current}>{currentSong.title}</p>
            <span className="">{currentSong.artist}</span>
            <p className={styles.time}>00:04:38</p>
          </div>
          <div className="video">
            <video autoplay muted controls>
              <source src={chords} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className={styles.navigation}>
          <div
            className={styles.navigation_wrapper}
            onClick={checkWidth}
            ref={clickRef}
          >
            <div
              className={styles.seek_bar}
              style={{ width: `${currentSong.progress + "%"}` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
