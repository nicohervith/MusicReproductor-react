import moment from "moment/moment";
import React from "react";

const Datetime = () => {
  var showdate = moment().format("LTS");
  /* var displayDate = showdate.getDate(); */
  return (
    <div className="clock-container">
      <input className="clock" type="text" value={showdate} readOnly="true" />
    </div>
  );
};
export default Datetime;
