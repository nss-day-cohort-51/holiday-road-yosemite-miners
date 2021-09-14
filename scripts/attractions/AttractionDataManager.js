export const getBizarres = () => {
  return fetch(`http://holidayroad.nss.team/bizarreries`)
  .then(response => response.json())
  .then(parsedResponse => {
      return parsedResponse;
  })
};

export const getAttraction = (input) => {
  return fetch(`http://holidayroad.nss.team/bizarreries/${input}`)
  .then(response => response.json())
  .then(parsedResponse => {
      return parsedResponse;
  })
}
