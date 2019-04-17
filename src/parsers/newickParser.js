/**
 * Converts a newick string into a bioUtils object
 * @param {string} newickString input newick string using '\n' for line breaks
 * @param {object} metaData any metadata to be appended to the bioUtils JSON object
 * @returns {object} the bioUtils JSON object {'sequences': []],'tree': string,'metaData': {'fileType': string, (metaData param)}}
 */ 
function newickParser(newickString, metaData) {
    const newickLines = newickString.split("\n");
    
    // Parse out the tree.
    var tree;
    treeLines = newickLines.filter(line => line.startsWith("("))
    if (treeLines.length == 1) {
        tree = treeLines[0]
    } else {
        tree = treeLines[0]
        console.log('multiple trees not yet supported; the fist tree was used')
    }

    var objectMetaData;
    metaData ? objectMetaData = metaData : objectMetaData = {'fileType': 'newick'}

    const bioUtilsJson = {
        'sequences': undefined,
        'tree': tree,
        'metaData': objectMetaData
    }

    return bioUtilsJson
}

module.exports = newickParser;