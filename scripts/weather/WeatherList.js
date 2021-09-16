import { weatherForecastItem } from "./Weather.js";

export const WeatherList = (allWeather) => {
    let postHTML = "";

    // Loop over the array of weather DataTransferItemList, invoke the weatherForecastItem component which returns HTML representation
    for (const weatherObject of allWeather) {

        postHTML += weatherForecastItem(weatherObject)
    }
    return postHTML;
}

// the function needs to take the results from running the zip code then