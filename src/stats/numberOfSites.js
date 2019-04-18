/**
 * @param {object} dataObject the bioUtils JSON object
 * @returns {int} The number of sites of sites of the fist sequence counting gaps
 */ 
function numberOfSites(dataObject) {
    const firstSequence = Object.values(dataObject["sequences"][0])[1]
    return firstSequence.length
}

module.exports = numberOfSites;