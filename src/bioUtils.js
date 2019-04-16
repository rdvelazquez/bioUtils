// io
const inputData = require('./io/inputData');
const readFileSync = require('./io/readFileSync');
const outputData = require('./io/outputData');
const writeFileSync = require('./io/writeFileSync');

// parsers
const fastaParser = require('./parsers/fastaParser');
const fnaParser = require('./parsers/fnaParser');
const newickParser = require('./parsers/newickParser');

// getInfo
const containsStopCodons = require('./getInfo/containsStopCodons')

// manipulation
const translateToAminoAcids = require('./manipulation/translateToAminoAcids')

module.exports = {
    'inputData': inputData,
    'readFileSync': readFileSync,
    'outputData': outputData,
    'writeFileSync': writeFileSync,
    'fastaParser': fastaParser,
    'fnaParser': fnaParser,
    'newickParser': newickParser,
    'containsStopCodons': containsStopCodons,
    'translateToAminoAcids': translateToAminoAcids
}