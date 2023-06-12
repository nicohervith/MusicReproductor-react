import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import styles from "./Grabaciones.module.css";
import playgrabaciones from "../../Assets/Img/playgrabaciones.png";
import ecualizer from "../../Assets/Img/ecualizer.png";
import reloj from "../../Assets/Img/reloj.png";
import transmitiendoahora from "../../Assets/Img/transmitiendoahora.png";
import herramientas from "../../Assets/Img/herramientas.png";
import ducking from "../../Assets/Img/ducking.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const Grabaciones = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const getSliderBackgroundStyle = () => {
    const min = 0;
    const max = 100;
    const range = max - min;
    const perc = (sliderValue / range) * 100;
    return {
      backgroundImage: `linear-gradient(to right, #00de01 ${perc}%, #3c3c3c 0%)`,
    };
  };

  const getSliderBackgroundStyle2 = () => {
    const min = 0;
    const max = 100;
    const range = max - min;
    const perc = (sliderValue / range) * 100;
    return {
      backgroundImage: `linear-gradient(to right, #2b3033 ${perc}%, #2b3033 0%)`,
    };
  };
  const getSliderBackgroundStyle3 = () => {
    const min = 0;
    const max = 100;
    const range = max - min;
    const perc = (sliderValue / range) * 100;
    return {
      backgroundImage: `linear-gradient(to right, #111214 ${perc}%, #111214 0%)`,
    };
  };
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

        <div class={styles.ecu_container_grabaciones}>
          <div className={styles.ecualizer_container}>
            <div className={styles.master}>
              <p> MASTER</p>
            </div>
            <div className={styles.side}>
              <p></p>
              <p>C</p>
              <p>L</p>
              <p>R</p>
            </div>
            <div className={styles.input_container}>
              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle3()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle2()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle()}
              />
              <div className={styles.medida}>
                <p>0</p>
                <p>10</p>
                <p>15</p>
                <p>20</p>
                <p>25</p>
                <p>30</p>
                <p>40</p>
              </div>
            </div>

            <div className={styles.botones}>
              <div className={styles.botones_container}>
                <p>AGC</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.botones_container}>
                <p>Comp</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.botones_container}>
                <p>EQ</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.container_stereo_mono}>
                <div className={styles.container_block_stereo_mono}>
                  <p>S</p>
                </div>
                <div className={styles.container_block_stereo_mono}>
                  <p>M</p>
                </div>
              </div>
              <div className={styles.border_top}></div>
            </div>
          </div>

          <div className={styles.ecualizer_container}>
            <div className={styles.master}>
              <p> MASTER</p>
            </div>
            <div className={styles.side}>
              <p></p>
              <p>C</p>
              <p>L</p>
              <p>R</p>
            </div>
            <div className={styles.input_container}>
              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle3()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle2()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle()}
              />
              <div className={styles.medida}>
                <p>0</p>
                <p>10</p>
                <p>15</p>
                <p>20</p>
                <p>25</p>
                <p>30</p>
                <p>40</p>
              </div>
            </div>

            <div className={styles.botones}>
              <div className={styles.botones_container}>
                <p>AGC</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.botones_container}>
                <p>Comp</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.botones_container}>
                <p>EQ</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.container_stereo_mono}>
                <div className={styles.container_block_stereo_mono}>
                  <p>S</p>
                </div>
                <div className={styles.container_block_stereo_mono}>
                  <p>M</p>
                </div>
              </div>
              <div className={styles.border_top}></div>
            </div>
          </div>

          <div className={styles.ecualizer_container}>
            <div className={styles.master}>
              <p> MASTER</p>
            </div>
            <div className={styles.side}>
              <p></p>
              <p>C</p>
              <p>L</p>
              <p>R</p>
            </div>
            <div className={styles.input_container}>
              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle3()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle2()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle()}
              />
              <div className={styles.medida}>
                <p>0</p>
                <p>10</p>
                <p>15</p>
                <p>20</p>
                <p>25</p>
                <p>30</p>
                <p>40</p>
              </div>
            </div>

            <div className={styles.botones}>
              <div className={styles.botones_container}>
                <p>AGC</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.botones_container}>
                <p>Comp</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.botones_container}>
                <p>EQ</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.container_stereo_mono}>
                <div className={styles.container_block_stereo_mono}>
                  <p>S</p>
                </div>
                <div className={styles.container_block_stereo_mono}>
                  <p>M</p>
                </div>
              </div>
              <div className={styles.border_top}></div>
            </div>
          </div>

          <div className={styles.ecualizer_container}>
            <div className={styles.master}>
              <p> MASTER</p>
            </div>
            <div className={styles.side}>
              <p></p>
              <p>C</p>
              <p>L</p>
              <p>R</p>
            </div>
            <div className={styles.input_container}>
              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle3()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle2()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle()}
              />
              <div className={styles.medida}>
                <p>0</p>
                <p>10</p>
                <p>15</p>
                <p>20</p>
                <p>25</p>
                <p>30</p>
                <p>40</p>
              </div>
            </div>

            <div className={styles.botones}>
              <div className={styles.botones_container}>
                <p>AGC</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.botones_container}>
                <p>Comp</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.botones_container}>
                <p>EQ</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.container_stereo_mono}>
                <div className={styles.container_block_stereo_mono}>
                  <p>S</p>
                </div>
                <div className={styles.container_block_stereo_mono}>
                  <p>M</p>
                </div>
              </div>
              <div className={styles.border_top}></div>
            </div>
          </div>

          <div className={styles.ecualizer_container}>
            <div className={styles.master}>
              <p> MASTER</p>
            </div>
            <div className={styles.side}>
              <p></p>
              <p>C</p>
              <p>L</p>
              <p>R</p>
            </div>
            <div className={styles.input_container}>
              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle3()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle2()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle()}
              />
              <div className={styles.medida}>
                <p>0</p>
                <p>10</p>
                <p>15</p>
                <p>20</p>
                <p>25</p>
                <p>30</p>
                <p>40</p>
              </div>
            </div>

            <div className={styles.botones}>
              <div className={styles.botones_container}>
                <p>AGC</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.botones_container}>
                <p>Comp</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.botones_container}>
                <p>EQ</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.container_stereo_mono}>
                <div className={styles.container_block_stereo_mono}>
                  <p>S</p>
                </div>
                <div className={styles.container_block_stereo_mono}>
                  <p>M</p>
                </div>
              </div>
              <div className={styles.border_top}></div>
            </div>
          </div>

          <div className={styles.ecualizer_container}>
            <div className={styles.master}>
              <p> MASTER</p>
            </div>
            <div className={styles.side}>
              <p></p>
              <p>C</p>
              <p>L</p>
              <p>R</p>
            </div>
            <div className={styles.input_container}>
              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle3()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle2()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle()}
              />
              <div className={styles.medida}>
                <p>0</p>
                <p>10</p>
                <p>15</p>
                <p>20</p>
                <p>25</p>
                <p>30</p>
                <p>40</p>
              </div>
            </div>

            <div className={styles.botones}>
              <div className={styles.botones_container}>
                <p>AGC</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.botones_container}>
                <p>Comp</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.botones_container}>
                <p>EQ</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.container_stereo_mono}>
                <div className={styles.container_block_stereo_mono}>
                  <p>S</p>
                </div>
                <div className={styles.container_block_stereo_mono}>
                  <p>M</p>
                </div>
              </div>
              <div className={styles.border_top}></div>
            </div>
          </div>

          <div className={styles.ecualizer_container}>
            <div className={styles.master}>
              <p> MASTER</p>
            </div>
            <div className={styles.side}>
              <p></p>
              <p>C</p>
              <p>L</p>
              <p>R</p>
            </div>
            <div className={styles.input_container}>
              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle3()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle2()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle()}
              />
              <div className={styles.medida}>
                <p>0</p>
                <p>10</p>
                <p>15</p>
                <p>20</p>
                <p>25</p>
                <p>30</p>
                <p>40</p>
              </div>
            </div>

            <div className={styles.botones}>
              <div className={styles.botones_container}>
                <p>AGC</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.botones_container}>
                <p>Comp</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.botones_container}>
                <p>EQ</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.container_stereo_mono}>
                <div className={styles.container_block_stereo_mono}>
                  <p>S</p>
                </div>
                <div className={styles.container_block_stereo_mono}>
                  <p>M</p>
                </div>
              </div>
              <div className={styles.border_top}></div>
            </div>
          </div>

          <div className={styles.ecualizer_container}>
            <div className={styles.master}>
              <p> MASTER</p>
            </div>
            <div className={styles.side}>
              <p></p>
              <p>C</p>
              <p>L</p>
              <p>R</p>
            </div>
            <div className={styles.input_container}>
              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle3()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle2()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle()}
              />
              <div className={styles.medida}>
                <p>0</p>
                <p>10</p>
                <p>15</p>
                <p>20</p>
                <p>25</p>
                <p>30</p>
                <p>40</p>
              </div>
            </div>

            <div className={styles.botones}>
              <div className={styles.botones_container}>
                <p>AGC</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.botones_container}>
                <p>Comp</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.botones_container}>
                <p>EQ</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.container_stereo_mono}>
                <div className={styles.container_block_stereo_mono}>
                  <p>S</p>
                </div>
                <div className={styles.container_block_stereo_mono}>
                  <p>M</p>
                </div>
              </div>
              <div className={styles.border_top}></div>
            </div>
          </div>
          
          <div className={styles.ecualizer_container}>
            <div className={styles.master}>
              <p> MASTER</p>
            </div>
            <div className={styles.side}>
              <p></p>
              <p>C</p>
              <p>L</p>
              <p>R</p>
            </div>
            <div className={styles.input_container}>
              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle3()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle2()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle()}
              />
              <div className={styles.medida}>
                <p>0</p>
                <p>10</p>
                <p>15</p>
                <p>20</p>
                <p>25</p>
                <p>30</p>
                <p>40</p>
              </div>
            </div>

            <div className={styles.botones}>
              <div className={styles.botones_container}>
                <p>AGC</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.botones_container}>
                <p>Comp</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.botones_container}>
                <p>EQ</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.container_stereo_mono}>
                <div className={styles.container_block_stereo_mono}>
                  <p>S</p>
                </div>
                <div className={styles.container_block_stereo_mono}>
                  <p>M</p>
                </div>
              </div>
              <div className={styles.border_top}></div>
            </div>
          </div>

          <div className={styles.ecualizer_container}>
            <div className={styles.master}>
              <p> MASTER</p>
            </div>
            <div className={styles.side}>
              <p></p>
              <p>C</p>
              <p>L</p>
              <p>R</p>
            </div>
            <div className={styles.input_container}>
              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle3()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle2()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle()}
              />
              <div className={styles.medida}>
                <p>0</p>
                <p>10</p>
                <p>15</p>
                <p>20</p>
                <p>25</p>
                <p>30</p>
                <p>40</p>
              </div>
            </div>

            <div className={styles.botones}>
              <div className={styles.botones_container}>
                <p>AGC</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.botones_container}>
                <p>Comp</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.botones_container}>
                <p>EQ</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.container_stereo_mono}>
                <div className={styles.container_block_stereo_mono}>
                  <p>S</p>
                </div>
                <div className={styles.container_block_stereo_mono}>
                  <p>M</p>
                </div>
              </div>
              <div className={styles.border_top}></div>
            </div>
          </div>

         {/*  <div className={styles.ecualizer_container}>
            <div className={styles.master}>
              <p> MASTER</p>
            </div>
            <div className={styles.side}>
              <p></p>
              <p>C</p>
              <p>L</p>
              <p>R</p>
            </div>
            <div className={styles.input_container}>
              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle3()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle2()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle()}
              />
              <div className={styles.medida}>
                <p>0</p>
                <p>10</p>
                <p>15</p>
                <p>20</p>
                <p>25</p>
                <p>30</p>
                <p>40</p>
              </div>
            </div>

            <div className={styles.botones}>
              <div className={styles.botones_container}>
                <p>AGC</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.botones_container}>
                <p>Comp</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.botones_container}>
                <p>EQ</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.container_stereo_mono}>
                <div className={styles.container_block_stereo_mono}>
                  <p>S</p>
                </div>
                <div className={styles.container_block_stereo_mono}>
                  <p>M</p>
                </div>
              </div>
              <div className={styles.border_top}></div>
            </div>
          </div>

          <div className={styles.ecualizer_container}>
            <div className={styles.master}>
              <p> MASTER</p>
            </div>
            <div className={styles.side}>
              <p></p>
              <p>C</p>
              <p>L</p>
              <p>R</p>
            </div>
            <div className={styles.input_container}>
              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle3()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle2()}
              />

              <input
                type="range"
                name=""
                id="slider"
                className={styles.slider}
                value={sliderValue}
                min="0"
                max="100"
                onChange={handleSliderChange}
                style={getSliderBackgroundStyle()}
              />
              <div className={styles.medida}>
                <p>0</p>
                <p>10</p>
                <p>15</p>
                <p>20</p>
                <p>25</p>
                <p>30</p>
                <p>40</p>
              </div>
            </div>

            <div className={styles.botones}>
              <div className={styles.botones_container}>
                <p>AGC</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.botones_container}>
                <p>Comp</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.botones_container}>
                <p>EQ</p>
                <FontAwesomeIcon
                  className={styles.sort_icon}
                  icon={faSortDown}
                />
              </div>
              <div className={styles.container_stereo_mono}>
                <div className={styles.container_block_stereo_mono}>
                  <p>S</p>
                </div>
                <div className={styles.container_block_stereo_mono}>
                  <p>M</p>
                </div>
              </div>
              <div className={styles.border_top}></div>
            </div>
          </div>  */}
        </div>
      </div>
    </>
  );
};

export default Grabaciones;
