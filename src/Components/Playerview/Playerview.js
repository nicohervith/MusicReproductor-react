import React from "react";
import Navigation from "../Navigation/Navigation";
import Accord from "../Explorer/Accord";

const Player = () => {
  return (
    <>
      <Navigation />
      <div className="explorer-container">
        <div className="first-aside">
          <Accord />
        </div>
      </div>
    </>
  );
};

export default Player;
