
<<<<<<< HEAD
export const Trip = (park, eatery, attraction) =>{ 
                    return `<section class="savedTrips">
                            <p>${park.data[0].fullName}</p>
                            <p>${attraction.name}</p>
                            <p>${eatery.businessName}</p>
                    </section>`
            
=======

export const Trip = (tripObject) =>{
    const tripEatery = getEatery(tripObject.eateryId)
    console.log(tripEatery)
    return `<hr><section id="trip--${tripObject.id}" class="savedTrips">
    <h4>Trip #${tripObject.id}</h4>
            <p>${tripObject.parkId}</p>
            <p>${tripObject.bizarreId}</p>
            <p>${tripEatery}</p>
        </section>`
>>>>>>> main
}