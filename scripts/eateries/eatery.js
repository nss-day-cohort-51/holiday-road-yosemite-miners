export const eatery = (eatObj) => {
    return ` <h4>Eatery: ${eatObj.businessName} </h4>
    <p class="detail-window__description">${eatObj.description}</p>
    <button class="eatery_details__button" type="button">Details</button>
`
}