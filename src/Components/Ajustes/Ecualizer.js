import React, { useState } from "react";
import styles from "./Ajustes.module.css";

const Ecualizer = () => {
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Ecualizer;
