import { useState } from "react";
import "./drag_and_drop.css";
import styles from "../Logeditor/Logeditor.module.css";

const DragAndDrop = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      img: "https://www.cotopaxi.com.ec/sites/default/files/2020-08/BLANCO%20760X440PX_0.png",
      title: "Nombre canción",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      artist: "Artista",
      album: "Álbum año",
      list: 1,
    },
    {
      id: 2,
      img: "https://biblioteca.acropolis.org/wp-content/uploads/2014/12/amarillo.png",
      title: "Nombre canción",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      artist: "Artista",
      album: "Álbum año",
      list: 1,
    },
    {
      id: 3,
      img: "https://www.cotopaxi.com.ec/sites/default/files/2020-08/BLANCO%20760X440PX_0.png",
      title: "Nombre canción",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      artist: "Artista",
      album: "Álbum año",
      list: 1,
    },
    {
      id: 4,
      img: "https://www.cotopaxi.com.ec/sites/default/files/2020-08/BLANCO%20760X440PX_0.png",
      title: "Nombre canción",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      artist: "Artista",
      album: "Álbum año",
      list: 1,
    },
    {
      id: 5,
      img: "https://www.cotopaxi.com.ec/sites/default/files/2020-08/BLANCO%20760X440PX_0.png",
      title: "Nombre canción",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      artist: "Artista",
      album: "Álbum año",
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
      <br />

      <div className="drag-and-drop">
        <div className="column column--1">
          <div
            className="dd-zone"
            droppable="true"
            onDragOver={(evt) => draggingOver(evt)}
            onDrop={(evt) => onDrop(evt, 1)}
          >
            {getList(1).map((item) => (
              <div
                className="dd-element"
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
        </div>

        <div className="column column--2">
          <div
            className="dd-zone-2"
            droppable="true"
            onDragOver={(evt) => draggingOver(evt)}
            onDrop={(evt) => onDrop(evt, 2)}
          >
            {getList(2).map((item) => (
              <div
                className="dd-element"
                key={item.id}
                draggable
                onDragStart={(evt) => startDrag(evt, item)}
              >
                <strong className="title">{item.title}</strong>
                <p className="body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="column column--3">
          <h3>Tareas realizadas</h3>
          <div
            className="dd-zone"
            droppable="true"
            onDragOver={(evt) => draggingOver(evt)}
            onDrop={(evt) => onDrop(evt, 3)}
          >
            {getList(3).map((item) => (
              <div
                className="dd-element"
                key={item.id}
                draggable
                onDragStart={(evt) => startDrag(evt, item)}
              >
                <strong className="title">{item.title}</strong>
                <p className="body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DragAndDrop;
