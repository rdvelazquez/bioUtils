/**
 * Converts a fasta string into a bioUtils object
 * @param {string} fastaString input fasta string using '\n' for line breaks
 * @param {object} metaData any metadata to be appended to the bioUtils JSON object
 * @returns {object} the bioUtils JSON object {'sequences': [{'name': string, 'sequence': string}],'tree': undefined,'metaData': {'fileType': string, (metaData param)}}
 * @example inputData('>seq1\nact\n>seq2\natc);', {'fileType': 'fna', 'otherMetaData': 'this is an example'})
 */ 
function fastaParser(fastaString, metaData) {
    const fastaLines = fastaString.split("\n");

    // Parse out the sequences.
    var sequences = [];
    for (var i=0; i<fastaLines.length; i++) {
        if (fastaLines[i].startsWith(">")) {
            const sequenceObject = {'name': fastaLines[i].substring(1), 'sequence': fastaLines[i+1]}
            sequences.push(sequenceObject);
        }
    }

    var objectMetaData;
    metaData ? objectMetaData = metaData : objectMetaData = {'fileType': 'fasta'}


    const bioUtilsJson = {
        'sequences': sequences,
        'tree': undefined,
        'metaData': objectMetaData
    }

    return bioUtilsJson
}

module.exports = fastaParser;