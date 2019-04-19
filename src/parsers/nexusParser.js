/**
 * Converts a newick string into a bioUtils object
 * TODO: This is currently only handling a small subset of nexus formats and data.
 * TODO: This was written with simplicity and readability in mind; it can and should be speed up a bit though.
 * @param {string} nexusString input newick string using '\n' for line breaks
 * @param {object} metaData any metadata to be appended to the bioUtils JSON object
 * @returns {object} the bioUtils JSON object {'sequences': [],'tree': string,'metaData': {'fileType': string, (metaData param)}}
 */ 
function nexusParser(nexusString, metaData) {
    const nexusLines = nexusString.split("\n");

    // 1. Parse out the sequences.
    // 1a. Get a list of the labels
    const taxaLabelsIndex = nexusLines.indexOf("\tTAXLABELS") + 1;
    const taxaLabels = nexusLines[taxaLabelsIndex]
        .slice(0, -1)
        .trim()
        .split(" ")
        .map(name => name.slice(1, -1));
    // 1b. Go through the list of labels and add the sequence character strings
    const sequenceStartIndex = nexusLines.indexOf("MATRIX") + 1;
    var sequences = [];
    for (let i=0; i<taxaLabels.length; i++) {
        const sequenceObject = {'name': taxaLabels[i], 'sequence': nexusLines[sequenceStartIndex + i].replace(';','').replace(' ','')}
        sequences.push(sequenceObject)
    }

    // 2. Parse out the tree.
    var tree;
    const treeIndex = nexusLines.indexOf("BEGIN TREES;") + 1;
    if (treeIndex == 1) {
        tree = undefined;
    } else {
        const numberOfTrees = nexusLines.slice(treeIndex).indexOf("END;");
        if (numberOfTrees >1) {
            console.log('multiple trees not yet supported; the fist tree was used')
        }
        const treeLine = nexusLines[treeIndex];
        tree = treeLine.substring(treeLine.indexOf("("));
    }

    // 3. Add the metaData
    var objectMetaData;
    metaData ? objectMetaData = metaData : objectMetaData = {'fileType': 'nexus'}

    // 4. Create and return the object
    const bioUtilsJson = {
        'sequences': sequences,
        'tree': tree,
        'metaData': objectMetaData
    }
    return bioUtilsJson  
}

module.exports = nexusParser;