export const Trip = (tripObject) =>{
    return `
        <section class="savedTrips">
            <p>${tripObject.parkId}<p>
            <p>${tripObject.bizarreId}<p>
            <p>${tripObject.eateryId}<p>
        </section>
    `
}