export const park = (parkObject) => {
    return `   <article class="park">
                    <h4 class="park_name">${parkObject.data.fullName}</h4>
                        <p>${parkObject.data.description}</p>
                    <address class="address">
                    ${parkObject.addresses.line1} <br>
                    ${parkObject.addreses.city}, ${parkObject.addresses.stateCode} ${parkObject.addresses.postalCode}
                    </address>
                    <button type="button" class="detail-btn">Details</button>
                </article>`
                
}