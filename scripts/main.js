import { getStates } from "./parks/ParkDataManager.js";
import {  getBizarres, getAttraction,} from "./attractions/AttractionDataManager.js";
import { getEateries, getEatery } from "./eateries/EateryDataManager.js";
import { park } from "./parks/park.js";
import { getParks, getPark } from "./parks/ParkDataManager.js";
import { Attraction } from "./attractions/Attraction.js";
import { getWeather } from "./weather/WeatherDataManager.js";
import { eatery } from "./eateries/eatery.js";
import { createTrip, getTrips} from "./Trips/TripDataManager.js";
import { TripList } from "./Trips/TripList.js";
import { weatherForecastItem } from "./weather/Weather.js";

//State Drop Down
const StateList = (allStates) => {
  const stateFinder = document.querySelector(".stateDrop");
  let postHTML = `<select id="stateDrop"><option value="0" disabled selected hidden>Choose State</option>`;
  for (const StateObject of allStates) {
    postHTML += `<option value="${StateObject.code}">${StateObject.name}</option>`;
  }
  postHTML += `</select>`;
  stateFinder.innerHTML = postHTML;
};

const showStateList = () => {
  getStates().then((allStates) => StateList(allStates));
};

//State Selection event listener
const elementTarget = document.querySelector("main");

elementTarget.addEventListener("change", (event) => {
  if (event.target.id === "stateDrop") {
    getParks(event.target.value).then((response) => ParkList(response.data));
  }
});

//Bizarre Drop down
const BizarreList = (allBizarres) => {
  const bizarreFinder = document.querySelector(".bizarreDrop");
  let postHTML = `<select id="bizarreDrop"><option value="0"disabled selected hidden>Choose Attraction</option>`;
  for (const bizarreObject of allBizarres) {
    postHTML += `<option value="${bizarreObject.id}">${bizarreObject.name}</option>`;
  }
  postHTML += `</select>`;
  bizarreFinder.innerHTML = postHTML;
};

const showBizarreList = () => {
  getBizarres().then((allBizarres) => BizarreList(allBizarres));
};

//Bizarre event listener ti populate trip preview

elementTarget.addEventListener("change", (event) => {
  if (event.target.id === "bizarreDrop") {
    const attractionId = parseInt(event.target.value);
    getAttraction(attractionId).then((response) => {
      const attractionElement = document.querySelector(".attraction");
      attractionElement.innerHTML = Attraction(response);
    });
  }
});

//Eatery Drop Down
const EateryList = (allEateries) => {
  const eateryFinder = document.querySelector(".eateryDrop");
  let postHTML = `<select id="eateryDrop"><option value="0" disabled selected hidden>Choose Eatery</option>`;
  for (const eateryObject of allEateries) {
    postHTML += `<option value="${eateryObject.id}">${eateryObject.businessName}</option>`;
  }
  postHTML += `</select>`;
  eateryFinder.innerHTML = postHTML;
};

const showEateryList = () => {
  getEateries().then((allEateries) => EateryList(allEateries));
};

elementTarget.addEventListener("change", (event) => {
  if (event.target.id === "eateryDrop") {
    const eateryId = parseInt(event.target.value);
    getEatery(eateryId).then((response) => {
      const attractionElement = document.querySelector(".eatery-name__block");
      attractionElement.innerHTML = eatery(response);
    });
  }
});
//Parks drop down

const ParkList = (allParks) => {
  const parkFinder = document.querySelector(".parkDrop");
  let postHTML = `<select id="parkDrop"><option value="0" disabled selected hidden>Choose Park</option>`;
  for (const parkObj of allParks) {
    postHTML += `<option value="${parkObj.parkCode}">${parkObj.fullName}</option>`;
  }
  postHTML += "</select>";
  parkFinder.innerHTML = postHTML;
};

//Parks event listener

elementTarget.addEventListener("change", (event) => {
  if (event.target.id === "parkDrop") {
    const parkId = event.target.value;
    getPark(parkId).then((response) => {
      getWeather(response.data[0].addresses[0].postalCode)
      .then(data => {
        const parkElement = document.querySelector(".park-name__block");
        const weatherElement = document.querySelector(".fiveday-forecast")
        weatherElement.innerHTML = weatherForecastItem(data)
        parkElement.innerHTML = park(response.data[0]);

      })

    })
  } 
});


//Save Button
let postObject = {};
elementTarget.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.id === "save-trip") {
    const park = document.querySelector("#parkDrop").value;
    const bizarre = document.querySelector("#bizarreDrop").value;
    const eatery = document.querySelector("#eateryDrop").value;
    postObject = {
      parkId: park,
      bizarreId: parseInt(bizarre),
      eateryId: parseInt(eatery),
    };

    createTrip(postObject).then((database) => {
      showTripList();
      window.location.reload()
    });
    
  }

});

// Trip List 
const showTripList = () => {
  getTrips().then((allTrips) => {
  TripList(allTrips);
  });
};


//Modal For Details Button
const openModalButtons = document.querySelector("main");

openModalButtons.addEventListener("click", (event) => {
  if (event.target.id === "openAttractionButton") {
    const modal = document.querySelector(".attractionModal");
    modal.showModal();
  } else if (event.target.id === "closeAttractionButton") {
    const closeAttractionModal = document.getElementById("attractionModal");
    closeAttractionModal.close();
  } else if (event.target.id === "openEateryButton") {
    const openEateryModal = document.querySelector(".eateryModal");
    openEateryModal.showModal();
  } else if (event.target.id === "closeEateryButton") {
    const closeEateryModal = document.getElementById("eateryModal");
    closeEateryModal.close();
  } else if (event.target.id === "openParkButton") {
    const openParkModal = document.querySelector(".parkModal");
    openParkModal.showModal();
  } else if (event.target.id === "closeParkButton") {
    const closeParkModal = document.getElementById("parkModal");
    closeParkModal.close();
  }
});

const startHolidayRoad = () => {
  showStateList();
  showBizarreList();
  showEateryList();
  showTripList();
};

startHolidayRoad();
