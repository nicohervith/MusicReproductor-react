import React from "react";
import Accord from "../Explorer/Accord";
import playlisticon from "../../Assets/Img/playlisticon.png";
import whatsapp from "../../Assets/Img/whatsapp.png";

const MediaExplorer = () => {
  return (
    <>
      <div className="first-aside">
        <div className="  dropdown-container-aside">
          <Accord />
        </div>
        <div className="">
          <div className="social-media">
            <div className="social-media-blocks">
              <img
                src={playlisticon}
                alt=""
                style={{
                  width: "15px",
                  objectFit: "cover",
                  margin: "auto",
                }}
              />
              <p>Playlist</p>
              <p>(0)</p>
            </div>
            <div className="social-media-blocks">
              <img
                src={whatsapp}
                alt=""
                style={{
                  width: "15px",
                  objectFit: "cover",
                  margin: "auto",
                }}
              />
              <p>Social Media</p>
              <p>(0)</p>
            </div>
            <div className="social-media-blocks-reproduction">
              <img
                src="https://www.cotopaxi.com.ec/sites/default/files/2020-08/BLANCO%20760X440PX_0.png"
                alt=""
              />
              <div className="reproduciendo">
                <p>Reproduciendo a</p>
                <p className="artist">Manuel turizo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaExplorer;
