import React from "react";
import { connect } from "react-redux";

const DisplayWeather = (props) => {
  const location = props.json.location;
  const current = props.json.current;
  return location && current ? (
    <div id="info">
      <div style={{ gridColumn: "1/4", padding: 10}}>
        <span className="specTitle" style={{ fontWeight: 600 }}>
          Last update:{" "}
        </span>{" "}
        {current.last_updated}
      </div>
      <div id="informationsAboutCountry">
        <div className="spec">
          <span className="specTitle">City:</span> {location.name}
        </div>
        <div className="spec">
          <span className="specTitle">Country:</span> {location.country}
        </div>
        <div className="spec">
          <span className="specTitle">Latitude and Longitude: </span>
          {location.lat + ", " + location.lon}
        </div>
        <div className="spec">
          <span className="specTitle">Timezone:</span> {location.tz_id}
        </div>
        <div className="spec">
          <span className="specTitle">Localtime:</span> {location.localtime}
        </div>
      </div>
      <div id="weatherConditions">
        <div className="spec" style={{ fontSize: 30 }}>
          {current.condition.text}
          <br></br>
          <img src={current.condition.icon} />
        </div>

        <div className="spec">
          <span className="specTitle">Temperature:</span> {current.temp_c}°C (
          {current.feelslike_c}°C)
        </div>
        <div className="spec">
          <span className="specTitle">Speed of wind: </span>
          {current.wind_kph} km/h
        </div>
        <div className="spec">
          <span className="specTitle">Wind direction:</span> {current.wind_dir}
        </div>
        <div className="spec">
          <span className="specTitle">Preassure:</span> {current.pressure_mb}{" "}
          kPa
        </div>
      </div>
      <div id="airQuality">
        <div className="spec" style={{ fontSize: 30 }}>
          {current.condition.text}
          <br></br>
          <img src={current.condition.icon} />
        </div>

        <div className="spec">
          <span className="specTitle">Temperature:</span> {current.temp_c}°C (
          {current.feelslike_c}°C)
        </div>
        <div className="spec">
          <span className="specTitle">Speed of wind: </span>
          {current.wind_kph} km/h
        </div>
        <div className="spec">
          <span className="specTitle">Wind direction:</span> {current.wind_dir}
        </div>
        <div className="spec">
          <span className="specTitle">Preassure:</span> {current.pressure_mb}{" "}
          kPa
        </div>
      </div>
    </div>
  ) : (
    <div>State is empty</div>
  );
};

const mapStateToProps = (state) => {
  return {
    json: state.json,
  };
};

export default connect(mapStateToProps, null)(DisplayWeather);
