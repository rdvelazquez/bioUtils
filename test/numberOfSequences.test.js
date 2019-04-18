const bioUtils = require("./../src/bioUtils")

test("numberOfSequences works as expected", () => {
  const simpleFastaObject = bioUtils.readFileSync("./test/testData/CD2_reduced.fasta")
  expect(bioUtils.numberOfSequences(simpleFastaObject)).toBe(10);
  });