import { settings } from "../Settings.js";

export const getWeather = () => {
  return fetch(
    `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${settings.weatherKey}`
  ).then((response) => response.json());
};

//api.openweathermap.org/data/2.5/weather?zip={37167},{TN}&appid={API key}
