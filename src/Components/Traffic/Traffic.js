import React, { useState } from "react";
import {
  faPlay,
  faClock,
  faCheck,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Traffic.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Traffic = () => {
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
      hour: "12:00:00 PM",
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
      hour: "12:00:00 PM",
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
      hour: "12:00:00 PM",
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
      hour: "12:00:00 PM",
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
      hour: "12:00:00 PM",
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
      <div className={styles.traffic_container}>
        <div className={styles.traffic_title}>
          <div>
            <p>Emisión</p>
          </div>
          <div>
            <p>Duración</p>
          </div>
          <div>
            <p>Título</p>
          </div>
        </div>

        <div
          className={styles.smart_block}
          droppable="true"
          onDragOver={(evt) => draggingOver(evt)}
          onDrop={(evt) => onDrop(evt, 3)}
        >
          <div
            className={styles.smart_block_container}
            style={{ backgroundColor: "#ec7300" }}
            droppable="true"
            onDragOver={(evt) => draggingOver(evt)}
            onDrop={(evt) => onDrop(evt, 3)}
          >
            <div className={styles.smart_block_title}>
              <FontAwesomeIcon
                icon={faClock}
                style={{ width: "10px", padding: "0 !important" }}
              />
              <p>12:00:00 PM</p>
            </div>
            <div>
              <p>01:50:40 </p>
            </div>
            <div>
              <p>SmartBlock </p>
            </div>
          </div>

          <div className={styles.smart_block_container_info}>
            <div className={styles.smart_block_info}>
              <FontAwesomeIcon
                icon={faPlay}
                style={{ width: "10px", padding: "0 !important" }}
              />
              <p>12:00:00 PM</p>
            </div>
            <div>
              <p>01:50:40 </p>
            </div>
            <div className={styles.nombre}>
              <p>Nombre </p>
            </div>
          </div>
          <div className={styles.smart_block_container_info}>
            <div className={styles.smart_block_info}>
              <FontAwesomeIcon
                icon={faForwardStep}
                style={{ width: "10px", padding: "0 !important" }}
              />
              <p>12:00:00 PM</p>
            </div>
            <div>
              <p>01:50:40 </p>
            </div>
            <div className={styles.nombre}>
              <p>Nombre </p>
            </div>
          </div>
          {getList(3).map((item) => (
            <div
              className={styles.smart_block_container_info}
              key={item.id}
              draggable
              onDragStart={(evt) => startDrag(evt, item)}
            >
              <div className={styles.smart_block_info}>
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ width: "10px", padding: "0 !important" }}
                />
                <p>{item.hour} </p>
              </div>
              <div>
                <p>{item.duration} </p>
              </div>
              <div className={styles.nombre}>
                <p>{item.title} </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={styles.smart_block_green}
          droppable="true"
          onDragOver={(evt) => draggingOver(evt)}
          onDrop={(evt) => onDrop(evt, 4)}
        >
          <div
            className={styles.smart_block_container}
            style={{ backgroundColor: "#01e985" }}
            droppable="true"
            onDragOver={(evt) => draggingOver(evt)}
            onDrop={(evt) => onDrop(evt, 4)}
          >
            <div className={styles.smart_block_title}>
              <FontAwesomeIcon
                icon={faClock}
                style={{ width: "10px", padding: "0 !important" }}
              />
              <p>12:00:00 PM</p>
            </div>
            <div>
              <p>01:50:40 </p>
            </div>
            <div>
              <p>SmartBlock </p>
            </div>
          </div>

          <div className={styles.smart_block_container_info}>
            <div className={styles.smart_block_info}>
              <FontAwesomeIcon
                icon={faPlay}
                style={{ width: "10px", padding: "0 !important" }}
              />
              <p>12:00:00 PM</p>
            </div>
            <div>
              <p>01:50:40 </p>
            </div>
            <div className={styles.nombre}>
              <p>Nombre </p>
            </div>
          </div>
          <div className={styles.smart_block_container_info}>
            <div className={styles.smart_block_info}>
              <FontAwesomeIcon
                icon={faForwardStep}
                style={{ width: "10px", padding: "0 !important" }}
              />
              <p>12:00:00 PM</p>
            </div>
            <div>
              <p>01:50:40 </p>
            </div>
            <div className={styles.nombre}>
              <p>Nombre </p>
            </div>
          </div>
          {getList(4).map((item) => (
            <div
              className={styles.smart_block_container_info}
              key={item.id}
              draggable
              onDragStart={(evt) => startDrag(evt, item)}
            >
              <div className={styles.smart_block_info}>
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ width: "10px", padding: "0 !important" }}
                />
                <p>{item.hour} </p>
              </div>
              <div>
                <p>{item.duration} </p>
              </div>
              <div className={styles.nombre}>
                <p>{item.title} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Traffic;
