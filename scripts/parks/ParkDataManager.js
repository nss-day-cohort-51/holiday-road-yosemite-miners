import { settings } from "../Settings.js";

export const getParks = () => {
    return fetch(
      `https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=${settings.npsKey}`
    ).then((response) => response.json());
  };