import React from "react";
import { Link } from "react-router-dom";
import LOGO2 from "../../Assets/Img/LOGO2.png";

const Login = () => {
  return (
    <div className="main-div">
      <div className="login-container">
        <div className="login-img">
          <img
            src="https://us.123rf.com/450wm/alex742109/alex7421091611/alex742109161100031/66337270-profesional-de-audio-de-radio-de-la-consola-de-mezcla-difusi%C3%B3n-de-televisi%C3%B3n.jpg"
            alt=""
          />
        </div>
        <div className="login-inputs">
          <div class="img-login">
            <img src={LOGO2} alt="" />
          </div>
          <p className="login-text">Iniciar sesión</p>
          <input
            type="text"
            className="input-login-paceholder"
            placeholder="Usuario"
          />
          <input
            type="text"
            className="input-login-paceholder"
            placeholder="Contraseña"
          />
          <div className="button-container">
            <div>
              <p className="login-text">¿Contraseña olvidada?</p>
            </div>
            <div>
              <Link to="/home">
                <button>Iniciar</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
