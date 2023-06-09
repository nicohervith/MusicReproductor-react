import React from "react";
import Navigation from "../Navigation/Navigation";
import media from "../../Assets/Img/media.png";
import logeditor from "../../Assets/Img/logeditor.png";
import programacion from "../../Assets/Img/programacion.png";
import playout from "../../Assets/Img/playout.png";
import grabaciones from "../../Assets/Img/grabaciones.png";
import ajustes from "../../Assets/Img/ajustes.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navigation />
      <div className="home-container">
        <div className="title-container">
          <h3>Bienvenido Alexis Guzmán. </h3>
          <p>Elige tu espacio de trabajo</p>
        </div>
        <div className="choose-icons">
          <div className="container-icons">
            <Link className="link" to="/explorer">
              <div className="block-icon">
                <div className="block-icon-img">
                  <img src={media} alt="" />
                </div>
                <div>
                  <h3>Media Explorer</h3>
                  <p>Campo para texto descriptivo</p>
                </div>
              </div>
            </Link>

            <Link className="link" to="/logeditor">
              <div className="block-icon">
                <div className="block-icon-img">
                  <img src={logeditor} alt="" />
                </div>
                <div>
                  <h3>Log Editor</h3>
                  <p>Campo para texto descriptivo</p>
                </div>
              </div>
            </Link>

            <Link className="link" to="/programacion">
              <div className="block-icon">
                <div className="block-icon-img">
                  <img src={programacion} alt="" />
                </div>
                <div>
                  <h3>Programación</h3>
                  <p>Campo para texto descriptivo</p>
                </div>
              </div>
            </Link>

            <Link className="link" to="/playout">
              <div className="block-icon">
                <div className="block-icon-img">
                  <img src={playout} alt="" />
                </div>
                <div>
                  <h3>Playout</h3>
                  <p>Campo para texto descriptivo</p>
                </div>
              </div>
            </Link>

            <Link className="link" to="/grabaciones">
              <div className="block-icon">
                <div className="block-icon-img">
                  <img src={grabaciones} alt="" />
                </div>
                <div>
                  <h3>Grabaciones</h3>
                  <p>Campo para texto descriptivo</p>
                </div>
              </div>
            </Link>

            <Link className="link" to="/ajustes">
              <div className="block-icon">
                <div className="block-icon-img">
                  <img src={ajustes} alt="" />
                </div>
                <div>
                  <h3>Ajustes</h3>
                  <p>Campo para texto descriptivo</p>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
