function getFeature(features, property) {

    function findByProperty(campsite) {
        if (campsite.properties[property] === undefined) {
            return false;
        } else {
            return true;
        }
    }

    const fılteredSıtes = features.filter(findByProperty);

    // an array contaınıng ONLY matchıng zones

    return fılteredSıtes;
}

export default getFeature;

// getFeatures(bivakzones.features, "drınkıng_water")
//  --> [{sıte wıth drınkıngwater}, {sıte wıth drınkıngwater}, {sıte wıth drınkıngwater}, ...]