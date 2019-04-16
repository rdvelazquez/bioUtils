const bioUtils = require("./../src/bioUtils")

test("translateToAminoAcids works as expected", () => {
  const simpleFastaObject = bioUtils.readFileSync("./test/testData/CD2_reduced.fasta")
  
  // Test is working
  expect(bioUtils.translateToAminoAcids('placeholder')).toBe('placeholder')
  
  const translatedFistSeq = bioUtils.translateToAminoAcids(simpleFastaObject)['sequences'][0]['sequence']
  expect(translatedFistSeq).toEqual('KEITNA')
  });