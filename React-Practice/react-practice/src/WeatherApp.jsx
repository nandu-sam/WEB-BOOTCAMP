import React, { useState } from "react";
const api = {
  key: "5962b99ed9bf93379bb5994e0e5ea41e",
  base: "https://api.openweathermap.org/data/2.5/",
};
const WeatherApp = () => {
  const [query, setQuery] = useState(" ");
  const [weather, setWeather] = useState({});
  const search = (e) => {
    if (e.key == "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery(" ");
        });
    }
  };
  const 
  return (
    <div>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search....."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={search}
          />
        </div>
        <div>
          <div className="location-box">
            <div className="location">
              {weather.name},{weather.sys.country}
              <div className="date">
                {dateBuilder(new Date())}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WeatherApp;
