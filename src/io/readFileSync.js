const fs = require("fs");
const inputData = require("./inputData");

/**
 * Converts file into the bioUtils JSON format. Just wraps the `inputData` function for easier use.  
 * -- NODE ONLY --
 * @param {string} filePath a relative or absolute file path
 * @param {object} metaData any metadata to be appended to the bioUtils JSON object
 * @returns {object} the bioUtils JSON object {'sequences': [{'name': string, 'sequence': string}],'tree': string,'metaData': {'fileType': string}}
 */ 
function readFileSync(filePath, metaData) {
    const dataString = fs.readFileSync(filePath, "utf-8");
    return inputData(dataString, metaData)
}

module.exports = readFileSync;