// io
const inputData = require('./io/inputData');
const readFileSync = require('./io/readFileSync');
const outputData = require('./io/outputData');
const writeFileSync = require('./io/writeFileSync');

// parsers
const fastaParser = require('./parsers/fastaParser');
const fnaParser = require('./parsers/fnaParser');
const newickParser = require('./parsers/newickParser');
const nexusParser = require('./parsers/nexusParser');

// stats
const containsStopCodons = require('./stats/containsStopCodons')
const numberOfSites = require('./stats/numberOfSites')
const numberOfSequences = require('./stats/numberOfSequences')
const shannonEntropiesOfSites = require('./stats/misc/shannonEntropiesOfSites')

// manipulation
const translateToAminoAcids = require('./manipulation/translateToAminoAcids')
const getSitesAsListOfStrings = require('./manipulation/misc/getSitesAsListOfStrings')

module.exports = {
    'inputData': inputData,
    'readFileSync': readFileSync,
    'outputData': outputData,
    'writeFileSync': writeFileSync,
    'fastaParser': fastaParser,
    'fnaParser': fnaParser,
    'newickParser': newickParser,
    'nexusParser': nexusParser,
    'containsStopCodons': containsStopCodons,
    'numberOfSites': numberOfSites,
    'numberOfSequences': numberOfSequences,
    'shannonEntropiesOfSites': shannonEntropiesOfSites,
    'translateToAminoAcids': translateToAminoAcids,
    'getSitesAsListOfStrings': getSitesAsListOfStrings
}