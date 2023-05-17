import React from "react";
import {
  faPlay,
  faClock,
  faCheck,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Traffic.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Traffic = () => {
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

        <div className={styles.smart_block}>
          <div
            className={styles.smart_block_container}
            style={{ backgroundColor: "#ec7300" }}
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
                icon={faCheck}
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
        </div>

        <div className={styles.smart_block_green}>
          <div
            className={styles.smart_block_container}
            style={{ backgroundColor: "#01e985" }}
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
                icon={faCheck}
                style={{ width: "10px", padding: "0 !important" }}
              />
              <p>12:00:00 PM</p>
            </div>
            <div>
              <p>01:50:40 </p>
            </div>
            <div className={styles.nombre}>
              <p> Nombre </p>
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
        </div>
      </div>
    </>
  );
};

export default Traffic;
