export const getEateries = () => {
  return fetch(`http://holidayroad.nss.team/eateries`)  
  .then(response => response.json())
  .then(parsedResponse => {
      return parsedResponse;
  })
}
