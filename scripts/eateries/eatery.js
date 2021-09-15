export const eatery = (eatObj) => {
    return ` <h4 id="eateryName">Eatery: ${eatObj.businessName} </h4>
    <button id="openEateryButton">Details</button>
    <dialog class="eateryModal" id="eateryModal">
        <div class="modal-header">
            <div class="title">More Details</div> 
            <h2>${eatObj.businessName} </h2>
            <button id="closeEateryButton" class="close-button">&times;</button> 
            </div>
            <div class="modal-body"> 
                <p class="detail-window__description">${eatObj.description}</p>
            </div>
    </dialog>
    <div id="overlay"><div>
`
}