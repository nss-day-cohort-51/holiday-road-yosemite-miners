export const Attraction = (attObj) => {
    return `
    <h4 id="attractions">Attraction: ${attObj.name}</h4>
    <button id="openAttractionButton">Details</button>
    <dialog class="attractionModal" id="attractionModal">
        <div class="modal-header">
            <div class="title">More Details</div>
            <h2 id="attractions">${attObj.name}</h2>
            <button id="closeAttractionButton" class="close-button">&times;</button>
        </div>
        <div class="modal-body">
            <p>${attObj.description}</p>
        </div>
    </dialog>
<div id="overlay"><div>
    `
}