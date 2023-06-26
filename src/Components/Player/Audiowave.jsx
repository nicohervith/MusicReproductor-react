import React, { useEffect, useRef } from "react";
import { useState } from "react";
import * as Tone from "tone";
import { songsdata } from "../Player/audios";

const Audiowave = ({ audioElem }) => {
  const [currentSong, setCurrentSong] = useState(songsdata[1]);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Crear el objeto Player de Tone.js y cargar el archivo de audio
    const player = new Tone.Player({
      url: currentSong.url,
    });

    // Conectar el player al nodo de salida (Tone.Master)
    player.connect(Tone.Master);

    // Cargar el archivo de audio
    player.load().then(() => {
      // Obtener los datos de forma de onda del audio
      Tone.Offline(() => {
        player.start();
        Tone.Transport.start();
      }).then((buffer) => {
        // Crear una representación visual de la forma de onda en el canvas
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const width = canvas.width;
        const height = canvas.height;
        const data = buffer.getChannelData(0);
        const step = Math.ceil(data.length / width);

        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
        ctx.lineWidth = 2;

        for (let i = 0; i < width; i++) {
          const min = 1.0;
          const max = -1.0;
          let sum = 0;

          for (let j = 0; j < step; j++) {
            const value = data[i * step + j];
            sum += value;
            min = Math.min(min, value);
            max = Math.max(max, value);
          }

          const average = sum / step;
          const ypos = (average + 1) * (height / 2);

          if (i === 0) {
            ctx.moveTo(i, ypos);
          } else {
            ctx.lineTo(i, ypos);
          }
        }

        ctx.stroke();
      });
    });

    return () => {
      // Detener y liberar los recursos al desmontar el componente
      player.stop();
      player.dispose();
    };
  }, [currentSong]);

  return <canvas ref={canvasRef} width={500} height={200} />;
};

export default Audiowave;
