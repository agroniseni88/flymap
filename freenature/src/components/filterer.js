function getFeature(data, i) {

    function findByProperty(j) {
        if (j.properties[i] === undefined) {
            return false;
        } else {
            return true;
        }
    }

    const filteredSites = data.filter(findByProperty); // an array contaınıng ONLY matchıng zones
    console.log(filteredSites);
    return filteredSites;
}
/*
function getFeature(data, i) {

    return data.filter(j => !(j.properties[i])); // an array contaınıng ONLY matchıng zones
}
*/
export default getFeature;
// getFeatures(bivakzones.features, "drınkıng_water") 
//  --> [{sıte wıth drınkıngwater}, {sıte wıth drınkıngwater}, {sıte wıth drınkıngwater}, ...]