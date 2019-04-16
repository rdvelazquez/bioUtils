const fastaParser = require("./../parsers/fastaParser");
const fnaParser = require("./../parsers/fnaParser");
const newickParser = require("./../parsers/newickParser");


/**
 * Converts a string into the bioUtils JSON format
 * @param {string} dataString input data using '\n' for line breaks; can be fasta, fna, nexus or newick
 * @param {object} metaData any metadata to be appended to the bioUtils JSON object
 * @returns {object} the bioUtils JSON object {'sequences': [{'name': string, 'sequence': string}],'tree': string,'metaData': {'fileType': string, (metaData param)}}
 * @example inputData('>seq1\nact\n>seq2\natc\n(seq1,seq2);', {'fileType': 'fna', 'otherMetaData': 'this is an example'})
 */ 
function inputData(dataString, metaData) {
    const dataLines = dataString.split("\n");

    // Figure out what kind of file it is "fasta, fna, nexus, newick"
    // TODO: better check if there's a conflict between the specified and infered filetypes so that the parsing doesn't break down later.
    
    var fileType;

    // Was fileType part of the 'metaData' input parameter?
    if (metaData) {
        if (metaData['fileType'] == 'fasta') {
            return fastaParser(dataString, metaData)
        } else if (metaData['fileType'] == 'fna') {
            return fnaParser(dataString, metaData)
        } else if (metaData['fileType'] == 'nexus') {
            return nexusParser(dataString, metaData)             
        } else if (metaData['fileType'] == 'newick') {
            return newickParser(dataString, metaData)
        }
    }

    // If no fileType specified...
    // Is it fasta or fna?
    if (fileType == undefined && dataLines[0].startsWith(">")){
        const lastTwoLines = [dataLines[dataLines.length-2], dataLines[dataLines.length-1]]
        if (lastTwoLines[0].startsWith("(") && lastTwoLines[0].endsWith(";")) {
            return fnaParser(dataString, metaData);
        } else if (lastTwoLines[1].startsWith("(") && lastTwoLines[1].endsWith(";")) {
            return fnaParser(dataString, metaData)
        } else {
            return fastaParser(dataString, metaData)
        }

    // Nexus?    
    } else if (dataLines[0].toUpperCase == '#NEXUS') {
        return nexusParser(dataString, metaData)

    // Newick?
    } else if (dataLines.length <= 2) {
        return newickParser(dataString, metaData)

    // If we can't figure out what file type it is just return an error object
    } else {
        console.log('File format could not be determined')
        return {'error': 'unable to determine the format of the input data (did not appear to be fasta, fna, nexus or newick'}
    }

}

module.exports = inputData;