const fs = require("fs");
const outputData = require("./outputData");

/**
 * Writes a bioUtils json object to a file in a standard format (fasta, fna, nexus or newick). Just wraps the `outputData` function for easier use.  
 * -- NODE ONLY --
 * @param {object} the bioUtils JSON object {'sequences': [{'name': string, 'sequence': string}],'tree': string,'metaData': {'fileType': string}}
 * @param {string} fileType the type of file to write: fasta, fna, nexus or newick; if none is give than the fileType from the dataObject metaData will be used
 * @param {string} filePath a relative or absolute file path 
 * @returns {null} This function writes a file but does not return anything. 
 */ 
function writeFileSync(dataObject, filePath, fileType) {
    const dataString = outputData(dataObject, fileType);
    fs.writeFileSync(filePath, dataString);
    return
}

module.exports = writeFileSync;