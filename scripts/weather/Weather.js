export const weatherForecastItem = (weatherObj) => {
    return `<article id="weather-info__item">
    <h5 class="day-name">original format: ${weatherObj.dt}</h5>
    <p class="feels-like-temperature">Feels like ${weatherObj.list[0].main.temp}</p>
</article>`
}