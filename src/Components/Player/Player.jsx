import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faSquare } from "@fortawesome/free-solid-svg-icons";
import WaveSurfer from "wavesurfer.js";
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
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  console.log(songs);

  const visualizeData = () => {};

  const updateDuration = () => {
    setDuration(audioElem.current.duration);
  };

  const updateTime = () => {
    setCurrentTime(audioElem.current.currentTime);
  };

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

  const formatTime = (time) => {
    if (isNaN(time)) {
      return "--:--";
    }

    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    const formattedHours =
      hours > 0 ? `${hours.toString().padStart(2, "0")}:` : "";
    const formattedMinutes = `${minutes.toString().padStart(2, "0")}:`;
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return formattedHours + formattedMinutes + formattedSeconds;
  };

  const wavesurferRef = useRef(null);
  /* const canvasRef = useRef(null); */

/*   useEffect(() => {
    if (currentSong ) {
      // Verificar si currentSong y currentSong.url están definidos
      wavesurferRef.current = WaveSurfer.create({
        container: canvasRef.current,
        waveColor: "rgba(255, 255, 255, 0.7)",
        progressColor: "rgba(255, 255, 255, 1)",
        cursorColor: "rgba(255, 255, 255, 1)",
        barWidth: 2,
        barRadius: 3,
        barGap: 3,
        height: 200,
        responsive: true,
        normalize: true,
      }); */

      // Cargar el archivo de audio en WaveSurfer
 /*      wavesurferRef.current.load(audioElem);

      return () => {
        // Limpiar y destruir WaveSurfer al desmontar el componente
        wavesurferRef.current.destroy();
      };
    }
  }, [currentSong]); */

  useEffect(() => {
    if (wavesurferRef.current && duration > 0) {
      const progress = currentTime / duration;
      wavesurferRef.current.seekTo(progress);
    }
  }, [currentTime, duration]);

  useEffect(() => {
    if (audioElem.current) {
      // Event listener para actualizar el tiempo actual
      audioElem.current.addEventListener("timeupdate", updateTime);
      // Event listener para obtener la duración del audio
      audioElem.current.addEventListener("loadedmetadata", updateDuration);
    }
    return () => {
      // Remover los event listeners al desmontar el componente
      if (audioElem.current) {
        audioElem.current.removeEventListener("timeupdate", updateTime);
        audioElem.current.removeEventListener("loadedmetadata", updateDuration);
      }
    };
  }, [audioElem]);

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
            <p className={styles.time}>
              {" "}
              {formatTime(currentTime)} / {formatTime(duration)}
            </p>
          </div>
          {/* <div className="video">
            <canvas ref={canvasRef} width={500} height={200} />
          </div> */}
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
