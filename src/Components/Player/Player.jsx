import React, { useRef, useState } from "react";
import "./player.scss";
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
    <div className="player_container">
      <div className="controls">
        {/* <BsFillSkipStartCircleFill className="btn_action" onClick={skipBack} /> */}
        <div id="btnplay" className="play-container" onClick={ToggleClassPlay}>
          <FontAwesomeIcon
            icon={faPlay}
            className="btn_action pp"
            onClick={PlayPause}
            style={{ cursor: "pointer" }}
          />
        </div>

        {isplaying ? (
          <div
            id="btnpause"
            className="play-container"
            onClick={ToggleClassPause}
          >
            <FontAwesomeIcon
              icon={faPause}
              className="btn_action pp"
              onClick={PlayPause}
              style={{ cursor: "pointer" }}
            />
          </div>
        ) : (
          <div
            id="btnpause"
            className="play-container"
            onClick={ToggleClassPause}
          >
            <FontAwesomeIcon
              icon={faPause}
              className="btn_action pp"
              onClick={PlayPause}
              style={{ cursor: "pointer" }}
            />
          </div>
        )}
        <div id="btnstop" className="play-container" onClick={ToggleClassStop}>
          <FontAwesomeIcon
            className="btn_action pp"
            icon={faSquare}
            style={{ cursor: "pointer" }}
          />
        </div>

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
