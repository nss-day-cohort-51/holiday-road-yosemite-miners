export const weatherForecastItem = (weatherObj) => {

    const dateFormat = (dateObj) => {
        const newDate = new Date(dateObj * 1000);
        const dateToString = newDate.toString(); 
        const dateFormat = dateToString.substring(0,3); 
        return dateFormat;
    }

    console.log(weatherObj)
    return `
       
        <section class="weather-info__item">
         <h5 class="day-name">${dateFormat(weatherObj.list[0].dt)}</h5>
            <p class="feels-like-temperature">Temp: ${Math.round(weatherObj.list[0].main.temp)}</p>
            <img class="weatherImg" src="http://openweathermap.org/img/wn/${weatherObj.list[0].weather[0].icon}@2x.png">
            <p class="weatherDescription">${weatherObj.list[0].weather[0].description}</p>
        </section>

        <section class="weather-info__item">
         <h5 class="day-name">${dateFormat(weatherObj.list[8].dt)}</h5>
            <p class="feels-like-temperature">Temp: ${Math.round(weatherObj.list[8].main.temp)}</p>
            <img class="weatherImg" src="http://openweathermap.org/img/wn/${weatherObj.list[0].weather[0].icon}@2x.png">
            <p class="weatherDescription">${weatherObj.list[0].weather[0].description}</p>
        </section>

        <section class="weather-info__item">
         <h5 class="day-name">${dateFormat(weatherObj.list[16].dt)}</h5>
            <p class="feels-like-temperature">Temp: ${Math.round(weatherObj.list[16].main.temp)}</p>
            <img class="weatherImg" src="http://openweathermap.org/img/wn/${weatherObj.list[0].weather[0].icon}@2x.png">
            <p class="weatherDescription">${weatherObj.list[0].weather[0].description}</p>
        </section>

        <section class="weather-info__item">
         <h5 class="day-name">${dateFormat(weatherObj.list[24].dt)}</h5>
            <p class="feels-like-temperature">Temp: ${Math.round(weatherObj.list[24].main.temp)}</p>
            <img class="weatherImg" src="http://openweathermap.org/img/wn/${weatherObj.list[0].weather[0].icon}@2x.png">
            <p class="weatherDescription">${weatherObj.list[0].weather[0].description}</p>
        </section>

        <section class="weather-info__item">
         <h5 class="day-name">${dateFormat(weatherObj.list[32].dt)}</h5>
            <p class="feels-like-temperature">Temp: ${Math.round(weatherObj.list[32].main.temp)}</p>
            <img class="weatherImg" src="http://openweathermap.org/img/wn/${weatherObj.list[0].weather[0].icon}@2x.png">
            <p class="weatherDescription">${weatherObj.list[0].weather[0].description}</p>
        </section>`
        
}

