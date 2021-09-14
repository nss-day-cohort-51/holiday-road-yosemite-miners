export const weatherForecastItem = (weatherObj) => {
    return `<article id="weather-info__item">
    <h5 class="day-name">${weatherObj.list.dt}</h5>
    <p class="feels-like-temperature">Feels like ${weatherObj.list.main.feels_like}</p>
</article>`
}