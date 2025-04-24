import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./Searchbox.css";
import { useState } from "react";

export default function Searchbox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.weatherstack.com/current";
  const API_KEY = "a86ad28f2e342d400a0141e2b283be83";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?access_key=${API_KEY}&query=${city}`
      );
      let jsonResponse = await response.json();
      // console.log(jsonResponse);

      let result = {
        city: city,
        temperature: jsonResponse.current.temperature,
        humidity: jsonResponse.current.humidity,
        feelslike: jsonResponse.current.feelslike,
        weather_descriptions: jsonResponse.current.weather_descriptions[0],
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="Searchbox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit" endIcon={<SendIcon />}>
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No Such place in our API</p>}
      </form>
    </div>
  );
}
