import { settings } from "../Settings.js";

export const getWeather = (postalCode) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?zip=${postalCode}&appid=${settings.weatherKey}&units=imperial&cnt=5`
  ).then((response) => response.json());
};


//api.openweathermap.org/data/2.5/weather?zip={37167},{TN}&appid={API key}

