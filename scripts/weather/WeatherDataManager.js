import { settings } from "../Settings.js";

export const getWeather = (zip) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?zip=${zip}&appid=${settings.weatherKey}&units=imperial`
  )
    .then((response) => response.json())
    .then((parsedResponse) => {
      return parsedResponse.list[0];
    });
};

//api.openweathermap.org/data/2.5/weather?zip={37167},{TN}&appid={API key}
//https://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${settings.weatherKey}&units=imperial&cnt=15