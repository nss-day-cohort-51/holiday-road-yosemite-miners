export const weatherForecastItem = (weatherObj) => {
    console.log(weatherObj, "weather")
    return `
       
        <section class="dayOne">
         <h5 class="day-name">${weatherObj.list[0].dt}</h5>
            <p class="feels-like-temperature">Feels like ${weatherObj.list[0].main.temp}</p>
        </section>

        <section class="dayOne">
         <h5 class="day-name">${weatherObj.list[8].dt}</h5>
            <p class="feels-like-temperature">Feels like ${weatherObj.list[8].main.temp}</p>
        </section>

        <section class="dayOne">
         <h5 class="day-name">${weatherObj.list[16].dt}</h5>
            <p class="feels-like-temperature">Feels like ${weatherObj.list[16].main.temp}</p>
        </section>

        <section class="dayOne">
         <h5 class="day-name">${weatherObj.list[24].dt}</h5>
            <p class="feels-like-temperature">Feels like ${weatherObj.list[24].main.temp}</p>
        </section>

        <section class="dayOne">
         <h5 class="day-name">${weatherObj.list[32].dt}</h5>
            <p class="feels-like-temperature">Feels like ${weatherObj.list[32].main.temp}</p>
        </section>`
        
}