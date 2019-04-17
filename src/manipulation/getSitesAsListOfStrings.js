/**
 * return a list of strings where each string is a site (0 -> numbrer of sites) 
 * and each character in the string is the character at that site and 
 * corresponding sequence (sequences listed in the same, decending order of the MSA)
 * @param {object} dataObject the bioUtils JSON object
 * @returns {list} the list of strings
 */ 
function getSitesAsListOfStrings(dataObject) {
    // from bioUtils object to a list of lists
    const seqLists = dataObject['sequences'].map(sequence => sequence['sequence'].split(''))
    // Invert the matrix
    siteLists = seqLists[0].map((col, i) => seqLists.map(row => row[i]));
    // From lists of chars to strings
    siteStrings = siteLists.map(site => site.join(''))
    return siteStrings

}

module.exports = getSitesAsListOfStrings;