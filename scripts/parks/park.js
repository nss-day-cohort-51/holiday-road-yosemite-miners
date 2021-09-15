// details button for parks

export const park = (parkObject) => {
    return `   
                    <h4 class="park_name">${parkObject.fullName}</h4>
                    <button  id="openButton">Details</button>
                    <dialog class="modal" id="modal">
                        <div class="modal-header">
                            <div class="title">More Details</div>
                                <button id="closeButton" class="close-button">&times;</button>
                                <div class="modal-body">
                                    <p>${parkObject.description}</p>
                                </div>
                    <address class="address">
                        ${parkObject.addresses[0].line1} <br>
                        ${parkObject.addresses[0].city}, ${parkObject.addresses[0].stateCode} ${parkObject.addresses[0].postalCode}
                    </address>
                    </div>
                    </dialog>`}
