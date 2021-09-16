import { getEatery } from "../eateries/EateryDataManager.js"
import { getPark } from "../parks/ParkDataManager.js"
import { getAttraction } from "../attractions/AttractionDataManager.js"


export const Trip = (tripObject) =>{
    const tripEatery = getEatery(tripObject.eateryId)
    console.log(tripEatery)
    return `<section id=${tripObject.id} class="savedTrips">
            <p>${tripObject.parkId}</p>
            <p>${tripObject.bizarreId}</p>
            <p>${tripEatery}</p>
        </section>`
}