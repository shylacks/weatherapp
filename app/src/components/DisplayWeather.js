import React from "react";
import { connect } from "react-redux";

const epaStandard = (index) => {
  switch (index) {
    case 1:
      return (
        <div
          style={{
            color: "green",
            backgroundColor: "whitesmoke",
            padding: "5px",
          }}
        >
          1 - Good
        </div>
      );
    case 2:
      return (
        <div
          style={{
            color: "green",
            backgroundColor: "whitesmoke",
            padding: "5px",
          }}
        >
          2 - Moderate
        </div>
      );
    case 3:
      return (
        <div
          style={{
            color: "yellow",
            backgroundColor: "whitesmoke",
            padding: "5px",
          }}
        >
          3 - Unhealthy for sensitive group
        </div>
      );
    case 4:
      return (
        <div
          style={{
            color: "yellow",
            backgroundColor: "whitesmoke",
            padding: "5px",
          }}
        >
          4 - Unhealthy
        </div>
      );
    case 5:
      return (
        <div
          style={{
            color: "red",
            backgroundColor: "whitesmoke",
            padding: "5px",
          }}
        >
          5 - Very Unhealthy
        </div>
      );
    case 6:
      return (
        <div
          style={{
            color: "red",
            backgroundColor: "whitesmoke",
            padding: "5px",
          }}
        >
          6 - Good
        </div>
      );
  }
};

const DisplayWeather = (props) => {
  const location = props.json.location;
  const current = props.json.current;
  return location && current ? (
    <div id="info">
      <div style={{ gridColumn: "1/4", padding: 10 }}>
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
          <img
            src={current.condition.icon}
            style={{ padding: "5px", backgroundColor: "whitesmoke" }}
          />
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
        <div className="spec">
          <span className="specTitle">US - EPA standard:</span>
          {epaStandard(current.air_quality["us-epa-index"])}
        </div>
        <div className="spec">
          <span className="specTitle">Carbon Monoxide:</span>
          {current.air_quality.co.toFixed(2)} (μg/m3)
        </div>
        <div className="spec">
          <span className="specTitle"> Ozone:</span>
          {current.air_quality.o3.toFixed(2)} (μg/m3)
        </div>
        <div className="spec">
          <span className="specTitle"> Nitrogen dioxide:</span>
          {current.air_quality.no2.toFixed(2)} (μg/m3)
        </div>
        <div className="spec">
          <span className="specTitle">Sulphur dioxide:</span>
          {current.air_quality.so2.toFixed(2)} (μg/m3)
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

const mapStateToProps = (state) => {
  return {
    json: state.json,
  };
};

export default connect(mapStateToProps, null)(DisplayWeather);
