import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import styles from "./Ajustes.module.css";
import playgrabaciones from "../../Assets/Img/playgrabaciones.png";
import ecualizer from "../../Assets/Img/ecualizer.png";
import reloj from "../../Assets/Img/reloj.png";
import Ecualizer from "./Ecualizer";
import transmitiendoahora from "../../Assets/Img/transmitiendoahora.png";
import herramientas from "../../Assets/Img/herramientas.png";
import ducking from "../../Assets/Img/ducking.png";
import agregar from "../../Assets/Img/agregar.png";

const Ajustes = () => {
  const [volume, setVolume] = useState(0.8);

  return (
    <>
      <Navigation />
      <div className={styles.grabaciones_container}>
        <div class={styles.grabaciones_info}>
          <div style={{ paddingTop: "50px", display: "grid" }}>
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
                <p style={{ height: "18px" }}></p>
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

        <div className={styles.ecu_container}>
          <div className={styles.nuevo_canal_container}>
            <div className={styles.nuevo_canal}>
              <div className={styles.container_img_canal}>
                <img src={agregar} alt="" />
                <div className={styles.container_text_canal}>
                  <p>Nuevo</p>
                  <h5>Canal</h5>
                </div>
              </div>
            </div>
            <div className={styles.config_nuevo_canal}>
              <div className={styles.title_canal}>
                <p>Configurar nuevo canal</p>
              </div>
              <div className={styles.container_input}>
                <p>Nombre</p>
                <input className={styles.input} type="text" />
              </div>
              <div className={styles.container_input}>
                <p>Tipo de canal</p>
                <div className={styles.checkbox_container}>
                  <input className={styles.input_check} type="checkbox" />
                  <p>Micrófono</p>
                  <input className={styles.input_check} type="checkbox" />
                  <p>Línea</p>
                  <input className={styles.input_check} type="checkbox" />
                  <p>SIP Cliente</p>
                  <input className={styles.input_check} type="checkbox" />
                  <p>Invitado Virtual</p>
                </div>
              </div>
              <div className={styles.container_input}>
                <p>Dispositivo</p>
                <input className={styles.input} type="text" />
              </div>
              <div className={styles.container_input}>
                <p>Cámara</p>
                <input className={styles.input} type="text" />
              </div>
              <div className={styles.container_input}>
                <p>Buses</p>
                <input className={styles.input} type="text" />
              </div>
              <div className={styles.container_input}>
                <p>DSP</p>
                <div className={styles.checkbox_container}>
                  <input className={styles.input_check} type="checkbox" />
                  <p>AGC</p>
                  <input className={styles.input_check} type="checkbox" />
                  <p>EQ</p>
                  <input className={styles.input_check} type="checkbox" />
                  <p>Limitador</p>
                  <input className={styles.input_check} type="checkbox" />
                  <p>Compresor</p>
                </div>
                <div className={styles.button_container}>
                  <button className={styles.button_add}>
                    <a href="">Agregar</a>{" "}
                  </button>
                  <button className={styles.button_cancel}>
                    <a href="">Cancelar</a>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Ajustes;
