import { Trip } from "./Trip.js";

export const TripList = (allTrips) => {
  let postHTML = "";
  for (const tripObject of allTrips) {
    postHTML += Trip(tripObject);
  }
  return postHTML;
};
