const codonTables = require("../resources/codonTables.json")

/**
 * Determins if any of the sequences contain stop codons
 * @param {object} dataObject the bioUtils JSON object
 * @param {string} geneticCode the genetic code to use for looking for stop codons
 * @returns {boolean} whether or not the data contains stop codons
 */ 
function containsStopCodons(dataObject, geneticCode) {

    // Determine the genetc code to use:
    var geneticCodeString
    if (geneticCode) {
        geneticCodeString = geneticCode
    } else if (dataObject['metaData']['geneticCode']) {
        geneticCodeString = dataObject['metaData']['geneticCode']
    } else {
        geneticCodeString = 'Universal Code'
    }
    // Get the array of stop codons for that genetic code.
    const geneticCodeIndex = codonTables['indexTable'][geneticCodeString];
    const stopCodons = codonTables[geneticCodeIndex]["stop_codons"]

    // Check if any sequence has a stop codon (for the basic reading frame)
    var containsStopCodons = false
    for (var i=0; i<dataObject['sequences'].length; i++) {
        const sequence = dataObject['sequences'][i]['sequence']
        const codons = sequence.match(/.{1,3}/g);
        const thisSequencesContainsStopCodon = stopCodons.some(stopCodon => codons.includes(stopCodon))
        if (thisSequencesContainsStopCodon) {
            containsStopCodons = true
            break
        }
    }

    return containsStopCodons
}

module.exports = containsStopCodons;