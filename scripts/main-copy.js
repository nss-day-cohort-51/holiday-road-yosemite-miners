import { getStates } from "./parks/ParkDataManager.js";
import { getBizarres } from "./attractions/AttractionDataManager.js";
import { getEateries } from "./eateries/EateryDataManager.js";
import { WeatherList } from "./weather/WeatherList.js";
import { getWeather } from "./weather/WeatherDataManager.js";

//State Drop Down
const StateList = (allStates) => {
  const stateFinder = document.querySelector(".stateDrop");
  let postHTML = `<select><option value="0">Choose State</option>`;
  for (const StateObject of allStates) {
    postHTML += `<option ${StateObject.id}">${StateObject.name}</option>`;
  }
  postHTML += `</select>`;
  stateFinder.innerHTML = postHTML;
};

const showStateList = () => {
  getStates().then((allStates) => StateList(allStates));
};

//Bizarre Drop down
const BizarreList = (allBizarres) => {
  const bizarreFinder = document.querySelector(".bizarreDrop");
  let postHTML = `<select><option value="0">Choose Attraction</option>`;
  for (const bizarreObject of allBizarres) {
    postHTML += `<option value="${bizarreObject.id}">${bizarreObject.name}</option>`;
  }
  postHTML += `</select>`;
  bizarreFinder.innerHTML = postHTML;
};

const showBizarreList = () => {
  getBizarres().then((allBizarres) => BizarreList(allBizarres));
};

//Eatery Drop Down
const EateryList = (allEateries) => {
  const eateryFinder = document.querySelector(".eateryDrop");
  let postHTML = `<select><option value="0">Choose Eatery</option>`;
  for (const eateryObject of allEateries) {
    postHTML += `<option value="${eateryObject.id}">${eateryObject.businessName}</option>`;
  }
  postHTML += `</select>`;
  eateryFinder.innerHTML = postHTML;
};

//Parks drop down
const ParkList = (allParks) => {
  const parkFinder = document.querySelector(".parkDrop");
  let postHTML = `<select><option value="0">Choose Park</option>`;
  for (const parkObj of allParks) {
    postHTML += `<option value="${parkObj.id}">${parkObj.fullName}</option>`;
  }
  postHTML += "</select>";
  parkFinder.innerHTML = postHTML;
};

const showEateryList = () => {
  getEateries().then((allEateries) => EateryList(allEateries));
};

// Weather is triggered by the park selection event listener
// Show 5-day weather list
const showWeatherList = (postalCode) => {
  //Get a reference to the location on the DOM where the list will display
  const postElement = document.querySelector(".fiveday-forecast");
  getWeather(postalCode).then((allWeatherItems) => {
    postElement.innerHTML = WeatherList(allWeatherItems.list);
  });
};

const startHolidayRoad = () => {
  showStateList();
  showBizarreList();
  showEateryList();
  showWeatherList(37214);
};

startHolidayRoad();
