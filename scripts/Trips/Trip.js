export const Trip = (tripObject) =>{
    return `<section id=${tripObject.id} class="savedTrips">
            <p>${tripObject.parkId}</p>
            <p>${tripObject.bizarreId}</p>
            <p>${tripObject.eateryId}</p>
        </section>`
}