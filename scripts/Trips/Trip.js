import { getEatery } from "../eateries/EateryDataManager.js"
import { getPark } from "../parks/ParkDataManager.js"
import { getAttraction } from "../attractions/AttractionDataManager.js"


export const Trip = (tripObject) =>{
    const tripEatery = getEatery(tripObject.eateryId)
    console.log(tripEatery)
    return `<hr><section id="trip--${tripObject.id}" class="savedTrips">
    <h4>Trip #${tripObject.id}</h4>
            <p>${tripObject.parkId}</p>
            <p>${tripObject.bizarreId}</p>
            <p>${tripEatery}</p>
        </section>`
}