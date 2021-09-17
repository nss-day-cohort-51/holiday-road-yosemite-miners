import { Trip } from "./Trip.js";
import { getPark } from "../parks/ParkDataManager.js";
import { getEatery } from "../eateries/EateryDataManager.js";
import { getAttraction } from "../attractions/AttractionDataManager.js";



export const TripList = (allTrips) => {
  const tripElement = document.querySelector(".trip__block");
  let postHTML = "";
  for (const tripObject of allTrips) {
   
    getPark(tripObject.parkId)
      .then(park => {
        getEatery(tripObject.eateryId)
          .then(eatery => {
            getAttraction(tripObject.bizarreId)
              .then(attraction => {
                postHTML += Trip(park, eatery, attraction);
                console.log(tripObject.id,"as;dlkfja;sldkfj")
                tripElement.innerHTML = postHTML
              })
            })
      })
  }
  
}

