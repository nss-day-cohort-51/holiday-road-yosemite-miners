import { settings } from "../Settings.js";

export const getWeather = (city) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${settings.weatherKey}&units=imperial&cnt=15`
  )
    .then((response) => response.json())
    .then((parsedResponse) => {
      return parsedResponse;
    });
};

//api.openweathermap.org/data/2.5/weather?zip={37167},{TN}&appid={API key}
