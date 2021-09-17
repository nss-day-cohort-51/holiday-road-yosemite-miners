// details button for parks

export const park = (parkObject) => {
    return `   
                    <h4 class="park_name">Park: ${parkObject.fullName}</h4>
                    
                    <button  id="openParkButton">Details</button>
                    <dialog class="parkModal" id="parkModal">
                    <img class="parkImg" src="${parkObject.images[0].url}">
                    <button id="closeParkButton" class="close-button">&times;</button>
                        <div class="modal-header">
                            <div class="title">More Details</div>
                            <h2 class="park_name">${parkObject.fullName}</h2>
                                <div class="modal-body">
                                    <hr>
                                    <p>${parkObject.description}</p>
                                </div>
                    <address class="address">
                        ${parkObject.addresses[0].line1} <br>
                        ${parkObject.addresses[0].city}, ${parkObject.addresses[0].stateCode} ${parkObject.addresses[0].postalCode}
                    </address>
                    </div>
                    </dialog>`}
