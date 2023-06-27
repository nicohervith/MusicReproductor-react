import React, { useState, useEffect, useContext, useRef } from "react";
import TimelinePlugin from "wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js";
import RegionsPlugin from "wavesurfer.js/dist/plugin/wavesurfer.regions.min.js";
import wavesurfer from "wavesurfer.js";
import { songsdata } from "../Player/audios";

const Audiowave = () => {
  const wavesurferRef = useRef(null);
  const timelineRef = useRef(null);

  const [currentSong, setCurrentSong] = useState(songsdata[1]);

  // crate an instance of the wavesurfer
  const [wavesurferObj, setWavesurferObj] = useState();

  const [playing, setPlaying] = useState(true); // to keep track whether audio is currently playing or not
  const [volume, setVolume] = useState(1); // to control volume level of the audio. 0-mute, 1-max
  const [zoom, setZoom] = useState(1); // to control the zoom level of the waveform
  const [duration, setDuration] = useState(0); // duration is used to set the default region of selection for trimming the audio

  // create the waveform inside the correct component
  useEffect(() => {
    if (wavesurferRef.current && !wavesurferObj) {
      setWavesurferObj(
        wavesurfer.create({
          container: "#waveform",
          scrollParent: true,
          autoCenter: true,
          cursorColor: "#0084a3",
          loopSelection: true,
          waveColor: "#0084a3",
          progressColor: "#005e74",
          responsive: true,
          plugins: [
            TimelinePlugin.create({
              container: "#wave-timeline",
            }),
            RegionsPlugin.create({}),
          ],
        })
      );
    }
  }, [wavesurferRef, wavesurferObj]);

  // once the file URL is ready, load the file to produce the waveform
  useEffect(() => {
    if (currentSong.url && wavesurferObj) {
      wavesurferObj.load(currentSong.url);
    }
  }, [currentSong.url, wavesurferObj]);

  useEffect(() => {
    if (wavesurferObj) {
      // once the waveform is ready, play the audio
      wavesurferObj.on("ready", () => {
        wavesurferObj.play();
        wavesurferObj.enableDragSelection({}); // to select the region to be trimmed
        setDuration(Math.floor(wavesurferObj.getDuration())); // set the duration in local state
      });

      // once audio starts playing, set the state variable to true
      wavesurferObj.on("play", () => {
        setPlaying(true);
      });

      // once audio starts playing, set the state variable to false
      wavesurferObj.on("finish", () => {
        setPlaying(false);
      });

      // if multiple regions are created, then remove all the previous regions so that only 1 is present at any given time
      wavesurferObj.on("region-updated", (region) => {
        const regions = region.wavesurfer.regions.list;
        const keys = Object.keys(regions);
        if (keys.length > 1) {
          regions[keys[0]].remove();
        }
      });
    }
  }, [wavesurferObj]);

  const handlePlayPause = (e) => {
    wavesurferObj.playPause();
    setPlaying(!playing);
  };

  const handleReload = (e) => {
    // stop will return the audio to 0s, then play it again
    wavesurferObj.stop();
    wavesurferObj.play();
    setPlaying(true); // to toggle the play/pause button icon
  };

  const handleVolumeSlider = (e) => {
    setVolume(e.target.value);
  };

  const handleZoomSlider = (e) => {
    setZoom(e.target.value);
  };


  return (
    <section className="waveform-container">
      <div ref={wavesurferRef} id="waveform" />
      <div ref={timelineRef} id="wave-timeline" />
    </section>
  );
};

export default Audiowave;
