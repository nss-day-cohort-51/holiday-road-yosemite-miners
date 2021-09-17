

export const Trip = (park, eatery, attraction) =>{ 
             return `<section class="savedTrips">
                        <ol>
                            <li>-<strong>Park:</strong> ${park.data[0].fullName}</p>
                            <li>-<strong>Bizarre Attraction:</strong> ${attraction.name}</p>
                            <li>-<strong>Restaurant:</strong> ${eatery.businessName}</p>
                        </ol>
                    </section>`
            
}