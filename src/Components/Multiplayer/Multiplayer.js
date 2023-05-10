import React, { useRef, useState } from 'react';
import styles from '../Logeditor/Logeditor.module.css';

import {
  faSliders,
  faBackwardFast,
  faPlay,
  faForwardFast,
  faPause,
  faForwardStep,
  faMagnifyingGlass,
  faFilter,
  faStop,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import princeroyce from "../../Assets/Img/princeroyce.png";
import botondeplay from "../../Assets/Img/botondeplay.png";
import filtrar from "../../Assets/Img/filtrar.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

const Multiplayer = ({
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
    <>
        <div className={styles.search_container_third}>
          <div className={styles.search_first_column}>
            {/* <FontAwesomeIcon icon={faPlay} /> */}
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
                <p className={styles.time}>00:15</p>
              </div>
              <div className={styles.restante}>
                <p className={styles.title_first}>RESTANTE ACTUAL</p>
                <p className={styles.time}>03:48</p>
              </div>
              <div className={styles.playlist_actual}>
                <p className={styles.title_first}>PLAYLIST</p>
                <p className={styles.time}>48:23:58</p>
              </div>
            </div>
            <div>
              <div className={styles.player_container}>
                <div className={styles.controls}>
                  <div id="btnplay" className={styles.play_container}>
                    <FontAwesomeIcon
                      icon={faPlay}
                      className={styles.btn_action}
                      onClick={PlayPause}
                      style={{ cursor: "pointer" }}
                    />
                  </div>

                  {isplaying ? (
                    <div id="btnpause" className={styles.play_container}>
                      <FontAwesomeIcon
                        icon={faPause}
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
                  <div className={styles.title_block}>
                    <div className={styles.container_info}>
                      <span className={styles.first_p}>
                        Cuando nos volvamos a encontrar
                      </span>
                      <span className={styles.second_p}>Carlos Vives</span>
                    </div>
                  </div>
                  <div className={styles.title_block}>
                    <div className={styles.container_info}>
                      <span className={styles.first_p}>
                        Cuando nos volvamos a encontrar
                      </span>
                      <span className={styles.second_p}>Carlos Vives</span>
                    </div>
                  </div>
                  <div className={styles.title_block}>
                    <div className={styles.container_info}>
                      <span className={styles.first_p}>
                        Cuando nos volvamos a encontrar
                      </span>
                      <span className={styles.second_p}>Carlos Vives</span>
                    </div>
                  </div>
                </div>
              </div>
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
              />
            </div>
            <div id="btnpause" className={styles.play_container_pause}>
              <FontAwesomeIcon
                icon={faPause}
                className={styles.btn_action_pause}
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

export default Multiplayer