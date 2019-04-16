const codonTables = require("../resources/codonTables.json")

/**
 * Translate a codon bioUtils json object into an amino acid bioUtils json object.
 * @param {object} dataObject the bioUtils JSON object
 * @param {string} geneticCode the genetic code to use for translating codons to amino acids
 * @returns {object} the translated dataObject the bioUtils JSON object
 */ 
function translateToAminoAcids(dataObject, geneticCode) {
    if (dataObject == 'placeholder') {
        return 'placeholder'
    }

    // Determine the genetc code to use:
    var geneticCodeString
    if (geneticCode) {
        geneticCodeString = geneticCode
    } else if (dataObject['metaData']['geneticCode']) {
        geneticCodeString = dataObject['metaData']['geneticCode']
    } else {
        geneticCodeString = 'Universal Code'
    }

    // Get the dictonary of codon: AA for the genetic code.
    const geneticCodeIndex = codonTables['indexTable'][geneticCodeString];
    const codonDict = codonTables[geneticCodeIndex]['table']

    // Function for translating a single codon to amino acid.
    const translateCodon = (codon, codonDict) => {
        if (Object.keys(codonDict).includes(codon)){
            return codonDict[codon]
        } else if (codon = '---'){
            return '-'
        } else {
            return '?'
        }
    }

    // Translate all the sequences.
    var translatedSequences = []
    for (var i=0; i<dataObject['sequences'].length; i++) {
        const sequence = dataObject['sequences'][i]['sequence']
        const codons = sequence.match(/.{1,3}/g);
        const translatedSequence = codons.map(codon => translateCodon(codon, codonDict)).join('')
        translatedSequences.push({'name': dataObject['sequences'][i]['name'], 'sequence': translatedSequence})
        //console.log('translatedSequence: ', translatedSequence);
    }

    // Construct and return the translated object
    const translatedBioUtilsJsonObject = {'sequences': translatedSequences, 'tree': dataObject['tree'], 'metaData': dataObject['metaData']}
    return translatedBioUtilsJsonObject
}

module.exports = translateToAminoAcids;