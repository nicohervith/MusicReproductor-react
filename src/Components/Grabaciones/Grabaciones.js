import React from "react";
import Navigation from "../Navigation/Navigation";
import styles from "./Grabaciones.module.css";
import playgrabaciones from "../../Assets/Img/playgrabaciones.png";
import ecualizer from "../../Assets/Img/ecualizer.png";
import reloj from "../../Assets/Img/reloj.png";
import transmitiendoahora from "../../Assets/Img/transmitiendoahora.png";
import herramientas from "../../Assets/Img/herramientas.png";
import ducking from "../../Assets/Img/ducking.png";

const Grabaciones = () => {
  return (
    <>
      <Navigation />
      <div className={styles.grabaciones_container}>
        <div class={styles.grabaciones_info}>

          <div className={styles.grabaciones_block}>
            <div className={styles.img_grabaciones}>
              <img src={playgrabaciones} alt="" />
            </div>
            <div className={styles.grabaciones_song}>
              <div>
                <h5 className={styles.title}>Si tu me besas</h5>
                <p className={styles.artist}>Victor Manuelle</p>
                <p className={styles.time}>00:04:38 | 00:15 (INTRO)</p>
              </div>
            </div>
          </div>
          <div className={styles.container_short_blocks}>
            <div className={styles.grabaciones_block_short}>
              <div className={styles.reloj_container}>
                <img src={reloj} alt="" />
              </div>
              <div className={styles.info_short_blocks}>
                <p>Jue, 11 de junio 2022</p>
                <h5>08:52:39 A.M.</h5>
              </div>
            </div>
            <div className={styles.grabaciones_block_short}>
              <div className={styles.reloj_container}>
                <img
                  src={transmitiendoahora}
                  alt=""
                  style={{ width: "40px" }}
                />
              </div>
              <div className={styles.info_short_blocks}>
                <p>Transmitiendo ahora</p>
                <h5>2685 Oyentes</h5>
              </div>
            </div>
          </div>
          <div className={styles.container_short_blocks}>
            <div className={styles.grabaciones_block_short}>
              <div className={styles.reloj_container}>
                <img src={herramientas} alt="" style={{ width: "30px" }} />
              </div>
              <div className={styles.info_short_blocks}>
                <p>Jue, 11 de junio 2022</p>
                <h5>HERRAMIENTAS</h5>
              </div>
            </div>
            <div className={styles.grabaciones_block_short}>
              <div className={styles.reloj_container}>
                <img src={ducking} alt="" />
              </div>
              <div className={styles.info_short_blocks}>
                <p>Auto ducking</p>
                <h5>APAGADO</h5>
              </div>
            </div>
          </div>
          
        </div>

        <div class={styles.ecu_container}>
          <img src={ecualizer} alt="" />
        </div>
      </div>
    </>
  );
};

export default Grabaciones;
