import { settings } from "../Settings.js";

export const getWeather = (zip) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?zip=${zip}&appid=${settings.weatherKey}&units=imperial`
  )
    .then((response) => response.json())
    .then((parsedResponse) => {
      return parsedResponse;
    });
};

