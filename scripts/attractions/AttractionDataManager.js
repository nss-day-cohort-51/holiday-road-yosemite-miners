export const getBizarres = () => {
  return fetch(`http://holidayroad.nss.team/bizarreries`)
  .then(response => response.json())
  .then(parsedResponse => {
      return parsedResponse;
  })
};
