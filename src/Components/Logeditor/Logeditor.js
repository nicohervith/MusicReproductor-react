import React, { useEffect, useRef, useState } from "react";
import Navigation from "../Navigation/Navigation";
import Accord from "../Explorer/Accord";
import styles from "./Logeditor.module.css";
import Search from "../Player/Search";
import ShortInfo from "../Explorer/ShortInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "react-bootstrap/Accordion";
import whatsapp from "../../Assets/Img/whatsapp.png";
import playlisticon from "../../Assets/Img/playlisticon.png";
import {
  faSliders,
  faPlay,
  faForwardStep,
  faMagnifyingGlass,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import ShortAlbum from "../Player/ShortAlbum";

import Multiplayer from "../Multiplayer/Multiplayer";
import IPlay from "../IPlay/IPlay";
import { songsdata } from "../Player/audios";
import cuadricula from "../../Assets/Img/cuadricula.png";

const Logeditor = () => {
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
                  <FontAwesomeIcon
                    icon={faForwardStep}
                    style={{ transform: "rotate(180deg)" }}
                  />
                  <FontAwesomeIcon icon={faPlay} />
                  <FontAwesomeIcon icon={faForwardStep} />
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
          <Multiplayer />

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

          <div className="second-aside" style={{ marginTop: "-49px" }}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <div className="music-styles-container">
                    <FontAwesomeIcon
                      icon={faSliders}
                      style={{ fontSize: "13px" }}
                    />
                    <p className="music-styles-text">GENERAL</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className="accordion-item"
                style={{ borderBottom: "0.3px solid rgba(138, 136, 137, 0.3)" }}
                eventKey="2"
              >
                <Accordion.Header
                  className="accordion-header"
                  style={{
                    background: "#9a1111 !important",
                  }}
                >
                  <div className="music-styles-container">
                    <FontAwesomeIcon
                      icon={faSliders}
                      style={{ fontSize: "13px" }}
                    />
                    <p className="music-styles-text">GENERAL</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <div className="music-styles-container">
                    <FontAwesomeIcon
                      icon={faSliders}
                      style={{ fontSize: "13px" }}
                    />
                    <p className="music-styles-text">GENERAL</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logeditor;
