export const Attraction = (attObj) => {
    return `
    <h4 id="attractions">Attraction: ${attObj.name}</h4>
    <button id="openAttractionButton">Details</button>
    <dialog class="attractionModal" id="attractionModal">
    <img class="bizarreImg" src="./images/bizarre.jpg">
    <button id="closeAttractionButton" class="close-button">&times;</button>
        <div class="modal-header">
            <div class="title">More Details</div>
            <h2 id="attractions">${attObj.name}</h2>        
        </div>
        <div class="modal-body">
            <hr>
            <p>${attObj.description}</p>
        </div>
    </dialog>
    `
}