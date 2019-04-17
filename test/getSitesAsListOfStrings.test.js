const bioUtils = require("./../src/bioUtils")

test("getSitesAsListOfStrings works as expected", () => {
  const simpleNucExample = bioUtils.inputData('>seq1\nACTG\n>seq2\nACTC\n>seq3\nCCTA')
  expect(bioUtils.getSitesAsListOfStrings(simpleNucExample)).toEqual(['AAC', 'CCC', 'TTT', 'GCA'])
  });