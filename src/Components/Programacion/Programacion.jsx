import React, { useEffect, useRef, useState } from "react";
import Navigation from "../Navigation/Navigation";
import Accord from "../Explorer/Accord";
import styles from "./Programacion.module.css";

import ShortAlbum from "../Player/ShortAlbum";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "react-bootstrap/Accordion";
import {
  faSliders,
  faBackwardFast,
  faPlay,
  faForwardFast,
  faFilter,
  faMagnifyingGlass,
  faFolder,
  faSquare,
  faPause,
  faStop,
  faClock,
  faCheck,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import botondeplay from "../../Assets/Img/botondeplay.png";
import whatsapp from "../../Assets/Img/whatsapp.png";
import playlisticon from "../../Assets/Img/playlisticon.png";
import princeroyce from "../../Assets/Img/princeroyce.png";
import { Link } from "react-router-dom";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import { Dropdown } from "react-bootstrap";
import IPlay from "../IPlay/IPlay";
import Player3 from "../Player/Player3";
import { songsdata } from "../Player/audios";
import cuadricula from "../../Assets/Img/cuadricula.png";
import Traffic from "../Traffic/Traffic";

const Programacion = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      duration: "00:04:26",
      img: "https://www.cotopaxi.com.ec/sites/default/files/2020-08/BLANCO%20760X440PX_0.png",
      title: "Nombre canción",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      artist: "Artista",
      album: "Álbum año",
      genero: "bachata",
      anio: "2022",
      list: 1,
    },
    {
      id: 2,
      duration: "00:04:26",
      img: "https://www.cotopaxi.com.ec/sites/default/files/2020-08/BLANCO%20760X440PX_0.png",
      title: "Culpa al corazón",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      artist: "Prince Royce",
      album: "Álbum año",
      genero: "bachata",
      anio: "2022",
      list: 1,
    },
    {
      id: 3,
      duration: "00:04:26",
      img: "https://www.cotopaxi.com.ec/sites/default/files/2020-08/BLANCO%20760X440PX_0.png",
      title: "Nombre canción",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      artist: "Artista",
      album: "Álbum año",
      genero: "bachata",
      anio: "2022",
      list: 1,
    },
    {
      id: 4,
      duration: "00:04:26",
      img: "https://www.cotopaxi.com.ec/sites/default/files/2020-08/BLANCO%20760X440PX_0.png",
      title: "Nombre canción",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      artist: "Artista",
      album: "Álbum año",
      genero: "bachata",
      anio: "2022",
      list: 1,
    },
    {
      id: 5,
      duration: "00:04:26",
      img: "https://www.cotopaxi.com.ec/sites/default/files/2020-08/BLANCO%20760X440PX_0.png",
      title: "Nombre canción",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      artist: "Artista",
      album: "Álbum año",
      genero: "bachata",
      anio: "2022",
      list: 1,
    },
  ]);
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

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };

  const getList = (list) => {
    return tasks.filter((item) => item.list === list);
  };

  const startDrag = (evt, item) => {
    evt.dataTransfer.setData("itemID", item.id);
    console.log(item);
  };

  const draggingOver = (evt) => {
    evt.preventDefault();
  };

  const onDrop = (evt, list) => {
    const itemID = evt.dataTransfer.getData("itemID");
    const item = tasks.find((item) => item.id == itemID);
    item.list = list;

    const newState = tasks.map((task) => {
      if (task.id === itemID) return item;
      return task;
    });

    setTasks(newState);
  };

  const [isActive, setActive] = useState("false");
  const ToggleClassPlay = () => {
    var btn = document.getElementById("btnplay");

    setActive(!isActive);
    btn.classList.toggle("clicked");
  };

  return (
    <>
      <Navigation />
      <div className={styles.explorercontainer}>
        <div className={styles.firstaside}>
          <div className="  dropdown-container-aside">
            <Accord />
          </div>

          <div className="">
            <div className="social-media">
              <div className="social-media-blocks">
                <img
                  src={playlisticon}
                  alt=""
                  style={{ width: "15px", objectFit: "cover", margin: "auto" }}
                />
                <p>Playlist</p>
                <p>(0)</p>
              </div>
              <div className="social-media-blocks">
                <img
                  src={whatsapp}
                  alt=""
                  style={{ width: "15px", objectFit: "cover", margin: "auto" }}
                />
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

        <div className={styles.secondcolumn}>
          <div className={styles.search_container}>
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

          <div
            className={styles.video_container}
            droppable="true"
            onDragOver={(evt) => draggingOver(evt)}
            onDrop={(evt) => onDrop(evt, 1)}
          >
            {getList(1).map((item) => (
              <div
                className={styles.video_block}
                key={item.id}
                draggable
                onDragStart={(evt) => startDrag(evt, item)}
              >
                <div className={styles.video_block_container_img}>
                  <img src={item.img} alt="" />
                </div>
                <div className={styles.info_song}>
                  <span>{item.title} </span>
                  <p>{item.artist} </p>
                  <p>{item.album} </p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.mix_explorer}>
            <div className={styles.social_media}>
              <div className={styles.social_media_blocks_reproduction_mid}>
                <div className={styles.play_next_prev}>
                  <FontAwesomeIcon icon={faBackwardFast} />
                  <FontAwesomeIcon icon={faPlay} />
                  <FontAwesomeIcon icon={faForwardFast} />
                </div>
                <div className="reproduciendo">
                  <p>La Bachata</p>
                  <p className="artist">Manuel turizo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.thirdcolumn}>
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

          <div className={styles.container_multiplayer_reproductor}>
            <div className={styles.container_img_reproductor}>
              <img src={princeroyce} alt="" />
              <audio
                src={currentSong.url}
                ref={audioElem}
                onTimeUpdate={onPlaying}
              />
              <Player3
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
            <div className={styles.container_playlist_reproductor}>
              <p className={styles.title_first}>PLAYLIST</p>
              <p className={styles.time}>48:23:58</p>
            </div>
          </div>

          <div className={styles.controls_main_container}>
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
              <div id="btnstop" className={styles.play_container_pause}>
                <FontAwesomeIcon
                  className={styles.btn_action_pause}
                  icon={faSquare}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div id="btnstop" className={styles.play_container_pause}>
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

          <div className="" style={{ height: "50%" }}>
            <ShortAlbum />
            <div className={styles.container_artist_and_album}>
              <div className="nombres-artist-explorer">
                <p>00:04:26</p>
              </div>
              <div className="nombres-artist-explorer">
                <p>00:04:26</p>
              </div>
              <div className="nombres-artist-explorer">
                <p>Culpa al corazón</p>
              </div>
              <div className="nombres-artist-explorer">
                <p>Prince Royce</p>
              </div>
              <div className="nombres-artist-explorer">
                <p>Bachata</p>
              </div>

              <div className="nombres-artist-explorer">
                <p>2022</p>
              </div>
            </div>
            <div className={styles.container_artist_and_album}>
              <div className="nombres-artist-explorer">
                <p>00:04:26</p>
              </div>
              <div className="nombres-artist-explorer">
                <p>00:04:26</p>
              </div>
              <div className="nombres-artist-explorer">
                <p>Culpa al corazón</p>
              </div>
              <div className="nombres-artist-explorer">
                <p>Prince Royce</p>
              </div>
              <div className="nombres-artist-explorer">
                <p>Bachata</p>
              </div>

              <div className="nombres-artist-explorer">
                <p>2022</p>
              </div>
            </div>

            <div className={styles.container_artist_and_album}>
              <div className="nombres-artist-explorer">
                <p>00:04:26</p>
              </div>
              <div className="nombres-artist-explorer">
                <p>00:04:26</p>
              </div>
              <div className="nombres-artist-explorer">
                <p>Culpa al corazón</p>
              </div>
              <div className="nombres-artist-explorer">
                <p>Prince Royce</p>
              </div>
              <div className="nombres-artist-explorer">
                <p>Bachata</p>
              </div>

              <div className="nombres-artist-explorer">
                <p>2022</p>
              </div>
            </div>

            <div
              className={styles.video_container}
              droppable="true"
              onDragOver={(evt) => draggingOver(evt)}
              onDrop={(evt) => onDrop(evt, 2)}
            >
              {getList(2).map((item) => (
                <div
                  key={item.id}
                  draggable
                  onDragStart={(evt) => startDrag(evt, item)}
                >
                  <div className={styles.container_artist_and_album}>
                    <div className="nombres-artist-explorer">
                      <p>{item.duration} </p>
                    </div>
                    <div className="nombres-artist-explorer">
                      <p>{item.duration} </p>
                    </div>
                    <div className="nombres-artist-explorer">
                      <p>{item.title} </p>
                    </div>
                    <div className="nombres-artist-explorer">
                      <p>{item.artist} </p>
                    </div>
                    <div className="nombres-artist-explorer">
                      <p>{item.genero} </p>
                    </div>
                    <div className="nombres-artist-explorer">
                      <p>{item.anio} </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.fourthcolumn}>
          <div
            className={styles.search_container}
            style={{ marginTop: "50px" }}
          >
            <div className={styles.input_search}>
              <img
                src={cuadricula}
                alt=""
                style={{ width: "16px", marginLeft: "5px" }}
              />
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
          <div className={styles.fourthcolumn_space}>
            <IPlay />
          </div>

          <div>
                  <Traffic />
          </div>
        </div>
      </div>
    </>
  );
};

export default Programacion;