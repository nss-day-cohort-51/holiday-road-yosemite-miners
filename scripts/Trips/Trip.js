
export const Trip = (park, eatery, attraction) =>{ 
                    return `<section class="savedTrips">
                            <p>${park.data[0].fullName}</p>
                            <p>${attraction.name}</p>
                            <p>${eatery.businessName}</p>
                    </section>`
            
}