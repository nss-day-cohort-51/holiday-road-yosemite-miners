import { settings } from "../Settings.js";

export const getParks = (selection) => {

const apiKey = settings.npsKey;

return fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${selection}&api_key=${apiKey}`)
    .then(response => response.json())
    .then(parsedResponse => {
        return parsedResponse;
    })

}

export const getPark = (input) => {

    const apiKey = settings.npsKey
    return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${input}&api_key=${apiKey}`)
    .then(response => response.json())
    .then(parsedResponse => {
        return parsedResponse;
    })
}

// export const getParkByZip = (input) => {
//     const key = settings.npsKey
//     return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${input}&api_key=${key}`)
//     .then(response => response.json())
//     .then(parsedResponse => {
//         return parsedResponse.data[0].addresses[0].postalCode;
//     })
// }
 
export const getStates = () => {
    return fetch(`http://localhost:8088/states`)
    .then(response => response.json())
    .then(parsedResponse => {
        return parsedResponse;
    })

}