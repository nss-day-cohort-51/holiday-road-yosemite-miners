import { getStates } from "./parks/ParkDataManager.js"
import { getBizarres, getAttraction} from "./attractions/AttractionDataManager.js";
import { getEateries } from "./eateries/EateryDataManager.js";
import { park } from "./parks/park.js";
import { getParks } from "./parks/ParkDataManager.js";
import { Attraction } from "./attractions/Attraction.js";

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
    if (event.target.id === "stateDrop"){
        getParks(event.target.value)
        .then(response => ParkList(response.data) )
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

 //Bizarre event listener

 elementTarget.addEventListener ("change", event => {
     if (event.target.id === "bizarreDrop"){
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

// const showAttractions = () => {
//     const attractionElement = document.querySelector(".attraction")
//     getBizarres().then((allBizarres) => {
//         attractionElement.innerHTML = Attractions(allBizarres)
//     })
    
// }


//Parks drop down

const ParkList = (allParks) =>{
    const parkFinder = document.querySelector(".parkDrop")
    let postHTML = `<select><option value="0">Choose Park</option>`
    for (const parkObj of allParks) {
        postHTML += `<option value="${parkObj.id}">${parkObj.fullName}</option>`
    }
    postHTML += "</select>"
    parkFinder.innerHTML = postHTML;
}




const showPark = () => {
    const parkElement = document.querySelector(".detail-window");
    parkElement.innerHTML = park();
}



const startHolidayRoad = () =>{
showStateList()
showBizarreList()
showEateryList()

}

startHolidayRoad()