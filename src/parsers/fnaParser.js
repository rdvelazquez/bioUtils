/**
 * Converts a fna string into a bioUtils object
 * @param {string} fnaString input fna string using '\n' for line breaks
 * @param {object} metaData any metadata to be appended to the bioUtils JSON object
 * @returns {object} the bioUtils JSON object {'sequences': [{'name': string, 'sequence': string}],'tree': string,'metaData': {'fileType': string, (metaData param)}}
 * @example 
 * inputData('>seq1\nact\n>seq2\natc\n(seq1,seq2);')
 * // returns {'sequences': [ {'seq1': 'act'}, {'seq2': 'atc'} ],
 * //          'tree': '(seq1,seq2);',
 * //          'metaData': {'fileType': 'fna'})
 * //          }
 */ 
function fnaParser(fnaString, metaData) {
    const fnaLines = fnaString.split("\n");

    // Parse out the sequences.
    var sequences = [];
    for (var i=0; i<fnaLines.length; i++) {
        if (fnaLines[i].startsWith(">")) {
            const sequenceObject = {'name': fnaLines[i].substring(1), 'sequence': fnaLines[i+1]}
            sequences.push(sequenceObject);
        }
    }
    
    // Parse out the tree.
    var tree;
    treeLines = fnaLines.filter(line => line.startsWith("("))
    if (treeLines.length == 1) {
        tree = treeLines[0]
    } else {
        tree = treeLines[0]
        console.log('multiple trees not yet supported; the fist tree was used')
    }

    var objectMetaData;
    metaData ? objectMetaData = metaData : objectMetaData = {'fileType': 'fna'}

    const bioUtilsJson = {
        'sequences': sequences,
        'tree': tree,
        'metaData': objectMetaData
    }

    return bioUtilsJson
}

module.exports = fnaParser;