import { settings } from "../Settings.js";

export const getWeather = (postalCode) => {
  return fetch(
    `api.openweathermap.org/data/2.5/forecast?zip=${postalCode}&appid=${settings.weatherKey}&units=imperial&cnt=5`
  ).then((response) => response.json());
};

