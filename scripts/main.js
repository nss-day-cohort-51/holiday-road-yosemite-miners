import { getStates } from "./parks/ParkDataManager.js"
import { getBizarres, getAttraction } from "./attractions/AttractionDataManager.js";
import { getEateries } from "./eateries/EateryDataManager.js";
import { park } from "./parks/park.js";
import { getParks } from "./parks/ParkDataManager.js";
import { getPark } from "./parks/ParkDataManager.js";
import { Attraction } from "./attractions/Attraction.js";
import { getWeather } from "./weather/WeatherDataManager.js";
import { WeatherList } from "./weather/WeatherList.js";



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


//Bizarre event listener to populate trip preview

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
    let postHTML = `<select><option value="0">Choose Eatery</option>`;
    for (const eateryObject of allEateries) {
        postHTML += `<option value="${eateryObject.id}">${eateryObject.businessName}</option>`
    }
    postHTML += `</select>`
    eateryFinder.innerHTML = postHTML;
}

const showEateryList = () => {
    getEateries().then((allEateries => EateryList(allEateries)))
}


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
const showWeatherList = (postalCode) => {
    //Get a reference to the location on the DOM where the list will display
    const postElement = document.querySelector(".fiveday-forecast");
    getWeather(postalCode).then((allWeatherItems) => {
        postElement.innerHTML = WeatherList(allWeatherItems.list);
    });
};

//Modal For Details Button
const openModalButtons = document.querySelectorAll("[data-modal-target]")
const closeModalButtons = document.querySelectorAll("[data-close-button]")
const overlay = document.getElementById("overlay")

openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal")
        closeModal(modal)
    })
})

const openModal = (modal) => {
    if (modal == null) return
    modal.classList.add("active")
    overlay.classList.add("active")
}

const closeModal = (modal) => {
    if (modal == null) return
    modal.classList.remove("active")
    overlay.classList.remove("active")
}

const startHolidayRoad = () => {
    showStateList()
    showBizarreList()
    showEateryList()
    showWeatherList(37214);


}


startHolidayRoad()

