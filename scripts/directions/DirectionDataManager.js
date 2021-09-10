import { settings } from "../Settings.js";

export const getCoordinates = () => {
  return fetch(
    `https://graphhopper.com/api/1/geocode?q=yosemite+national+park&locale=us&debug=true&key=${settings.graphhopperKey}`
  ).then((response) => response.json());
};

export const getDirections = () => {
  return fetch(
    `https://graphhopper.com/api/1/route?point=starting_latitude,starting_longitude&point=destination_latitude,destination_longitude&vehicle=car&locale=us&instructions=true&calc_points=true&key=${settings.graphhopperKey}`
  ).then((response) => response.json());
};
