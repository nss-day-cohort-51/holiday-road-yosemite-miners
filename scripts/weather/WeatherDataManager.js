import { settings } from "../Settings.js";

export const getWeather = () => {
  return fetch(
    `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${settings.weatherKey}`
  ).then((response) => response.json());
};
