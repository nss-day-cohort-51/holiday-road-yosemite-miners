import { Attractions } from "./Attractions.js";

export const AttractionList = (allAttractions) => {
    let postHTML = ""
    for (const attObj of allAttractions){
        postHTML += Attractions(attObj)
    }
    return postHTML;
}