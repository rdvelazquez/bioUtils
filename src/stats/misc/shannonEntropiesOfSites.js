const getSitesAsListOfStrings = require("../../manipulation/misc/getSitesAsListOfStrings");

function shannonEntropiesOfSites(msa) {
  /**
  * Attempt to quantify the diversity of an alignment using Shannon entropy
  * @param {object} msa a bioUtils JSON object
  * @returns {list} a list of the diversity for each site
  */ 

  const sites = getSitesAsListOfStrings(msa);
  const shannonEntropies = sites.map(site => shannonEntropyOfStirng(site))
  return shannonEntropies
}

// from https://gist.github.com/ppseprus/afab8500dec6394c401734cb6922d220
const shannonEntropyOfStirng = str => {
  return [...new Set(str)]
    .map(chr => {
      return str.match(new RegExp(chr, 'g')).length;
    })
    .reduce((sum, frequency) => {
      let p = frequency / str.length;
      return sum + p * Math.log2(1 / p);
    }, 0);
};

module.exports = shannonEntropiesOfSites;