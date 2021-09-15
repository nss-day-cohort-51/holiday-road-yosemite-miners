export const eatery = (eatObj) => {
    return ` <h4>Eatery: ${eatObj.businessName} </h4>
    <button id="openButton">Details</button>
    <dialog class="modal" id="modal">
        <div class="modal-header">
            <div class="title">More Details</div> 
            <button id="closeButton" class="close-button">&times;</button> 
            </div>
            <div class="modal-body"> 
                <p class="detail-window__description">${eatObj.description}</p>
            </div>
    </dialog>
    <div id="overlay"><div>
`
}