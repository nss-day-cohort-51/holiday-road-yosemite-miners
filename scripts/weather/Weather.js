export const weatherForecastItem = (weatherObj) => {
    return `<article id="weather-info__item">
    <h5 class="day-name">original format: ${weatherObj.dt}</h5>
<<<<<<< HEAD
    <p class="feels-like-temperature">Feels like ${weatherObj.main.temp}</p>
=======
    <p class="feels-like-temperature">Feels like ${weatherObj.list[0].main.temp}</p>
>>>>>>> origin/mf-attCSS
</article>`
}