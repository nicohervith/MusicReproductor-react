import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faSquare } from "@fortawesome/free-solid-svg-icons";
import wavesurfer from "wavesurfer.js";
import TimelinePlugin from "wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js";
import RegionsPlugin from "wavesurfer.js/dist/plugin/wavesurfer.regions.min.js";
import { songsdata } from "../Player/audios";
import styles from "./Player.module.css";

const Player = () => {
  const wavesurferRef = useRef(null);
  const timelineRef = useRef(null);
  const playButtonRef = useRef(null);

  const [currentSong, setCurrentSong] = useState(songsdata[1]);
  const [wavesurferObj, setWavesurferObj] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (wavesurferRef.current && !wavesurferObj) {
      setWavesurferObj(
        wavesurfer.create({
          container: wavesurferRef.current,
          scrollParent: true,
          autoCenter: true,
          cursorColor: "#0084a3",
          loopSelection: true,
          waveColor: "#0084a3",
          progressColor: "#005e74",
          responsive: true,
          plugins: [
            TimelinePlugin.create({
              container: timelineRef.current,
            }),
            RegionsPlugin.create({}),
          ],
        })
      );
    }
  }, [wavesurferRef, wavesurferObj]);

  useEffect(() => {
    if (wavesurferObj) {
      wavesurferObj.load(currentSong.url);
      wavesurferObj.on("ready", () => {
        setDuration(Math.floor(wavesurferObj.getDuration()));
      });
      wavesurferObj.on("play", () => {
        setPlaying(true);
      });
      wavesurferObj.on("pause", () => {
        setPlaying(false);
      });
    }
  }, [currentSong.url, wavesurferObj]);

  const handlePlayPause = () => {
    if (playing) {
      wavesurferObj.pause();
    } else {
      wavesurferObj.play();
    }
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

  const updateTime = () => {
    setCurrentTime(wavesurferObj.getCurrentTime());
  };

  useEffect(() => {
    if (wavesurferObj) {
      wavesurferObj.on("audioprocess", updateTime);
    }
    return () => {
      if (wavesurferObj) {
        wavesurferObj.un("audioprocess", updateTime);
      }
    };
  }, [wavesurferObj]);

  useEffect(() => {
    const playButtonElement = playButtonRef.current;

    const handleClickOutside = (event) => {
      if (playButtonElement && !playButtonElement.contains(event.target)) {
        playButtonElement.classList.remove(styles.clicked);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlePlayButtonClick = () => {
    const playButtonElement = playButtonRef.current;
    playButtonElement.classList.toggle(styles.clicked);
    handlePlayPause();
  };

  return (
    <div className={styles.player_container}>
      <div className={styles.controls}>
        <div
          className={styles.play_container}
          ref={playButtonRef}
          onClick={handlePlayButtonClick}
        >
          <FontAwesomeIcon
            icon={faPlay}
            className={styles.btn_action}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className={styles.play_container} onClick={handlePlayPause}>
          <FontAwesomeIcon
            icon={faPause}
            className={styles.btn_action}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div
          className={styles.play_container}
          onClick={() => wavesurferObj.stop()}
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
          <div className="video" onClick={handlePlayPause}>
            <div
              ref={wavesurferRef}
              id="waveform"
              style={{ height: "100px" }}
            />
            <div ref={timelineRef} id="wave-timeline" />
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.navigation_wrapper}>
            <div
              className={styles.seek_bar}
              style={{ width: `${(currentTime / duration) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
