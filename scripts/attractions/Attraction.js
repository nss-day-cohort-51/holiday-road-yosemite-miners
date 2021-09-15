export const Attraction = (attObj) => {
    return `
    <h4 id="attractions">Attraction: ${attObj.name}</h4>
    <button id="openButton">Details</button>
    <div class="modal" id="modal">
        <div class="modal-header">
            <div class="title">More Details</div>
            <button id="closeButton" class="close-button">&times;</button>
        </div>
        <div class="modal-body">
            <p>${attObj.description}</p>
        </div>
    </div>
<div id="overlay"><div>
    `
}