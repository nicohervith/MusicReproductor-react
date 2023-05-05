import React from "react";
import styles from "./Shortalbum.module.css";

const Album = () => {
  return (
    <div className="album-container">
      <div className={styles.title}>
        <div className={styles.nombres}>
          <p>Emisión</p>
        </div>
        <div className={styles.nombres}>
          <p>Duración</p>
        </div>
        <div className={styles.nombres}>
          <p>Titulo</p>
        </div>
        <div className={styles.nombres}>
          <p>Artista</p>
        </div>
        <div className={styles.nombres}>
          <p>Género</p>
        </div>
        <div className={styles.nombres}>
          <p>Año</p>
        </div>
      </div>
    </div>
  );
};

export default Album;
