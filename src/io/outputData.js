/**
 * Converts a bioUtils JSON object to a string in one of the supported file formats
 * @param {object} dataObject the bioUtils JSON object {'sequences': [{'name': string, 'sequence': string}],'tree': string,'metaData': {'fileType': string}}
 * @param {string} fileType the desired filetype for the output string, if none is given the function will default to the filetype in the dataObject metaData
 * @returns {string} the data string in a particular file type format using '\n' for line breaks; can be fasta, fna, nexus or newick
 */ 
function outputData(dataObject, fileType) {
    // If no fileType is given than use the fileType from the object's metaData
    const outputFileType = fileType || dataObject['metaData']['fileType']

    // Compose the dataString.
    var dataString;
    var sequenceString;
    if (outputFileType == 'fasta' || outputFileType == 'fna') {
        const sequenceStringArray = dataObject['sequences'].map(seq => '>' + seq['name'] + '\n' + seq['sequence'] + '\n')
        sequenceString = sequenceStringArray.join('')
        dataString = sequenceString
        if (outputFileType == 'fna') {
            dataString = dataString + dataObject['tree']
        }
    } else if (outputFileType == 'nexus') {
        // TODO: get nexus sequence string and taxa
    } else if (outputFileType == 'newick') {
        dataString = dataObject['tree']
    }

    return dataString
}

module.exports = outputData;