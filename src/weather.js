import React from "react";

import "./App.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            className="form-control"
            placeholder="Enter a city.."
            onChange=""
          />
        </div>
        <div className="col-3">
          <button type="Submit" class="btn btn-outline-info">
            Search
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <h1>New York</h1>
          <h2>62°F | °C</h2>
        </div>
        <div className="col-4">
          <img
            class="img-fluid rounded mx-auto d-block"
            src="https://uxwing.com/wp-content/themes/uxwing/download/weather/weather-icon.png"
            alt="weather-logo"
          />
        </div>
        <div className="col-4">
          <ul>
            <li>Wednesday 7:00</li>
            <li>Mostly Cloudy</li>
            <li>Precipitation: 9%</li>
            <li>Humidity: 77%</li>
            <li>Wind: 5mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
