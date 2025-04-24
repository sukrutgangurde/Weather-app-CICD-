import Searchbox from "./Searchbox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function Weatherapp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelslike: 32,
    humidity: 20,
    temperature: 8,
    weather_descriptions: "sunny",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>This is weather app</h2>
      <Searchbox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
