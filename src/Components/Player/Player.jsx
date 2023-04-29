import React, { useRef } from "react";
import "./player.scss";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartCircleFill,
  BsSkipEndCircleFill,
  BsFillSkipEndCircleFill,
} from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faSquare } from "@fortawesome/free-solid-svg-icons";

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

  const skipBack = () => {
    const index = songs.findIndex((x) => x.title == currentSong.title);
    if (index == 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }
    audioElem.current.currentTime = 0;
  };

  const skiptoNext = () => {
    const index = songs.findIndex((x) => x.title == currentSong.title);

    if (index == songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }
    audioElem.current.currentTime = 0;
  };

  return (
    <div className="player_container">
      <div className="controls">
        {/* <BsFillSkipStartCircleFill className="btn_action" onClick={skipBack} /> */}
        <FontAwesomeIcon
          icon={faPlay}
          className="btn_action pp"
          onClick={PlayPause}
          style={{ cursor: "pointer" }}
        />
        {isplaying ? (
          <FontAwesomeIcon
            icon={faPause}
            className="btn_action pp"
            onClick={PlayPause}
            style={{ cursor: "pointer", fontSize: "1rem !important" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faPause}
            className="btn_action pp"
            onClick={PlayPause}
            style={{ cursor: "pointer", fontSize: "1rem !important" }}
          />
        )}
        <FontAwesomeIcon
          className="btn_action pp"
          icon={faSquare}
          style={{ cursor: "pointer" }}
        />
        {/*   <BsFillSkipEndCircleFill className="btn_action" onClick={skiptoNext} /> */}
      </div>
      <div className="title-and-navigation">
        <div className="title">
          <p>{currentSong.title}</p>
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
