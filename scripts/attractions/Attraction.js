export const Attraction = (attObj) => {
    return `
    <h4 id="attractions">Attraction: ${attObj.name}</h4>
    <p>${attObj.description}</p>
    <button class="attraction_details__button" type="button">Details</button>
    `
}