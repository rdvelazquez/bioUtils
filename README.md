# bioUtils

## Work with Bioinformatics Files in JavaScript


__Goals:__
- support sequence alignments and phylogenetic trees in fasta, fna, nexus and newick formats
- simple, fast and light
- fully tested, comprehensively documented
- work in Node and in the browser
- standardize input, output and formatting so that you can focus on analyzing the data

#### Docs: https://rdvelazquez.github.io/bioUtils/

### Install  
```
npm install bioutils
```  
or 
```
yarn add bioutils
```  

### Use
```
const bioUtils = require("bioutils");

// Read data from a file into a json object.
const exampleBioData = bioUtils.readFileSync("./exampleData.fasta");

// Get info about the data.
/*TODO: not sure if this will be implemented
// Some info is available in the "metaData".
const numberOfSequences = exampleBioData['metaData']['numberOfSequences'];
*/
// Other info can be obtained with functions.
const containsStopCodons = bioUtils.containsStopCodons(exampleBioData);

// Perform simple manipulations on the data.
const exampleBioDataWithoutStopCodons = bioUtils.replaceStopCodons(exampleBioData, "-");
const exampleBioDataAminoAcids = bioUtils.translateToAminoAcid(exampleBioData);

// Write the data to any file format you want.
bioUtils.writeFileSync(exampleBioDataWithoutStops, 'nexus', 'exampleOutputFile.nexus')
biUtils.writeFileSync(exampleBioDataAminoAcis, 'fasta', 'exampleOutputFileAA.fasta')
```

### Previous/Similar Work
 - https://github.com/TeselaGen/ve-sequence-parsers (looks very nice but doesn't support nexus or newick)
 - https://github.com/jalview/biojson (specifies a json schema for alignments but doesn't support trees and seems to be unmaintained since 2015)
 - Everyone's own piecemeal modules, functions and scripts (These are often all you need but this package is designed to provide another option)

 ## Development

Test `yarn test`  
Lint `yarn lint`  
Build Docs `yarn document`  
Publish to NPM... just `npm publish` 
