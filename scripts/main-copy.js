import { getStates } from "./parks/ParkDataManager.js"
import { getBizarres, getAttraction } from "./attractions/AttractionDataManager.js";
import { getEateries, getEatery } from "./eateries/EateryDataManager.js";
import { park } from "./parks/park.js";
import { getParks } from "./parks/ParkDataManager.js";
import { getPark } from "./parks/ParkDataManager.js";
import { Attraction } from "./attractions/Attraction.js";
import { getWeather } from "./weather/WeatherDataManager.js";
import { WeatherList } from "./weather/WeatherList.js";
import { eatery } from "./eateries/eatery.js";

//State Drop Down
const StateList = (allStates) => {
    const stateFinder = document.querySelector(".stateDrop")
    let postHTML = `<select id="stateDrop"><option value="0">Choose State</option>`;
    for (const StateObject of allStates) {
        postHTML += `<option value="${StateObject.code}">${StateObject.name}</option>`
    }
    postHTML += `</select>`
    stateFinder.innerHTML = postHTML;
}

const showStateList = () => {
    getStates().then((allStates) => StateList(allStates))
}

//State Selection event listener
const elementTarget = document.querySelector("main")

elementTarget.addEventListener("change", event => {
    if (event.target.id === "stateDrop") {
        getParks(event.target.value)
            .then(response => ParkList(response.data))
    }
})

//Bizarre Drop down
const BizarreList = (allBizarres) => {
    const bizarreFinder = document.querySelector(".bizarreDrop")
    let postHTML = `<select id="bizarreDrop"><option value="0">Choose Attraction</option>`;
    for (const bizarreObject of allBizarres) {
        postHTML += `<option value="${bizarreObject.id}">${bizarreObject.name}</option>`
    }
    postHTML += `</select>`
    bizarreFinder.innerHTML = postHTML;
}

const showBizarreList = () => {
    getBizarres().then((allBizarres => BizarreList(allBizarres)))
}

//Bizarre event listener ti populate trip preview

elementTarget.addEventListener("change", event => {
    if (event.target.id === "bizarreDrop") {
        const attractionId = parseInt(event.target.value)
        getAttraction(attractionId)
            .then(response => {
                const attractionElement = document.querySelector(".attraction")
                attractionElement.innerHTML = Attraction(response)
            })
    }

})



//Eatery Drop Down
const EateryList = (allEateries) => {
    const eateryFinder = document.querySelector(".eateryDrop")
    let postHTML = `<select id="eateryDrop"><option value="0">Choose Eatery</option>`;
    for (const eateryObject of allEateries) {
        postHTML += `<option value="${eateryObject.id}">${eateryObject.businessName}</option>`
    }
    postHTML += `</select>`
    eateryFinder.innerHTML = postHTML;
}

const showEateryList = () => {
    getEateries().then((allEateries => EateryList(allEateries)))
}


elementTarget.addEventListener("change", event => {
    if (event.target.id === "eateryDrop") {
        const eateryId = parseInt(event.target.value)
        getEatery(eateryId)
            .then(response => {
                const attractionElement = document.querySelector(".eatery-name__block")
                attractionElement.innerHTML = eatery(response)
            })
    }

})
//Parks drop down

const ParkList = (allParks) => {
    const parkFinder = document.querySelector(".parkDrop")
    let postHTML = `<select id="parkDrop"><option value="0">Choose Park</option>`
    for (const parkObj of allParks) {
        postHTML += `<option value="${parkObj.parkCode}">${parkObj.fullName}</option>`
    }
    postHTML += "</select>"
    parkFinder.innerHTML = postHTML;
}

//Parks event listener

elementTarget.addEventListener("change", event => {
    if (event.target.id === "parkDrop") {
        const parkId = event.target.value
        getPark(parkId)
            .then(response => {
                const parkElement = document.querySelector(".park-name__block")
                parkElement.innerHTML = park(response.data[0])
            })
    }

})




// Weather is triggered by the park selection event listener
// Show 5-day weather list
const showWeatherList = (cityName) => {
    //Get a reference to the location on the DOM where the list will display
    const postElement = document.querySelector(".fiveday-forecast");
    getWeather(cityName).then((allWeatherItems) => {
        postElement.innerHTML = WeatherList(allWeatherItems.list);
    });
};

const startHolidayRoad = () => {
    showStateList()
    showBizarreList()
    showEateryList()
    showWeatherList("Huntsville");


}

startHolidayRoad()