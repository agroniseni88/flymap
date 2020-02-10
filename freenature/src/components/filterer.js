  export default (data, feat)=> {
    const filteredZone = Object.entries(data.properties)
      .filter(entry => entry[0] === feat && entry[1] !== undefined)
      .reduce((acc, entry) => {
        acc[entry[0]] = entry[1];
        return acc
      }, {})
    return filteredZone }