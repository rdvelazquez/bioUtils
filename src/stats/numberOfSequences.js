/**
 * @param {object} dataObject the bioUtils JSON object
 * @returns {int} The number of sequences
 */ 
function numberOfSequences(dataObject) {
    return dataObject["sequences"].length
}

module.exports = numberOfSequences;