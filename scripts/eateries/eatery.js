export const eatery = (eatObj) => {
    return ` <h4 id="eateryName">Restaurant: ${eatObj.businessName} </h4>
    <button id="openEateryButton">Details</button>
    <dialog class="eateryModal" id="eateryModal">
        <img class="eateryImg" src="./images/food.jpg">
        <button id="closeEateryButton" class="close-button">&times;</button> 
        <div class="modal-header">
            <div class="title">More Details</div> 
            <h2>${eatObj.businessName} </h2>
            </div>
            <div class="modal-body"> 
                <hr>
                <p class="detail-window__description">${eatObj.description}</p>
            </div>
    </dialog>
`
}