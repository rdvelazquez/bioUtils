/**
 * Converts a newick string into a bioUtils object
 * @param {string} nexusString input newick string using '\n' for line breaks
 * @param {object} metaData any metadata to be appended to the bioUtils JSON object
 * @returns {object} the bioUtils JSON object {'sequences': []],'tree': string,'metaData': {'fileType': string, (metaData param)}}
 * @example inputData('>seq1\nact\n>seq2\natc\n(seq1,seq2););', {'fileType': 'fna', 'otherMetaData': 'this is an example'})
 */ 
function nexusParser(nexusString, metaData) {
    
    /** TODO:
    const nexusLines = nexusString.split("\n");

    var objectMetaData;
    metaData ? objectMetaData = metaData : objectMetaData = {'fileType': 'newick'}

    const bioUtilsJson = {
        'sequences': [],
        'tree': tree,
        'metaData': objectMetaData
    }

    return bioUtilsJson
    */
   
   return 'nexusParser not implemented yet'
}

module.exports = nexusParser;