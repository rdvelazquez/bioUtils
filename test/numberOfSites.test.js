const bioUtils = require("./../src/bioUtils")

test("numberOfSites works as expected", () => {
  const simpleFastaObject = bioUtils.readFileSync("./test/testData/CD2_reduced.fasta")
  expect(bioUtils.numberOfSites(simpleFastaObject)).toBe(18);
  });