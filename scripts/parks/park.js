export const park = (parkObject) => {
    return `   <article class="park">
                    <h4 class="park_name">${parkObject.fullName}</h4>
                        <p>${parkObject.description}</p>
                    <address class="address">
                    ${parkObject.addresses[0].line1} <br>
                    ${parkObject.addresses[0].city}, ${parkObject.addresses[0].stateCode} ${parkObject.addresses[0].postalCode}
                    </address>
                    <button type="button" class="detail-btn">Details</button>
                </article>`
                
}

// export const Preveiw = () => {
//     return `<section>
//             <h4 class="Preview">Trip Preview</h4>
            
//             </section>`
// }