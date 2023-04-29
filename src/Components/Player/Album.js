import React from "react";
import styles from "./Album.module.css";

const Album = () => {
  return (
    <div className="album-container">
      <div className={styles.title}>
        <div>
          <p>Duración</p>
        </div>
        <div>
          <p>Titulo</p>
        </div>
        <p>Artista</p>
        <div>
          <p>Género</p>
        </div>
        <div>
          <p>Album</p>
        </div>
        <div>
          <p>Año</p>
        </div>
        <div>
          <p>Subido el</p>
        </div>
        <div>
          <p>Subido por</p>
        </div>
      </div>
    </div>
  );
};

export default Album;
