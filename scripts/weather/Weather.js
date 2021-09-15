export const weatherForecastItem = (weatherObj) => {

    const a = Date(weatherObj.dt);
    const b = a.toString();
    const cArr = b.split(" ");
    const dayIWant = cArr[0];

    // PROBLEM: When I convert the date, each of my dates show as identical day and times
     
    return `<article id="weather-info__item">
    <h5 class="day-name">${b} original format: ${weatherObj.dt}</h5>
    <p class="feels-like-temperature">Feels like ${weatherObj.main.temp}</p>
</article>`
}