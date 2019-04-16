const bioUtils = require("./../src/bioUtils")

test("containsStopCodons works as expected", () => {
  const simpleFastaObject = bioUtils.readFileSync("./test/testData/CD2_reduced.fasta")
  expect(bioUtils.containsStopCodons(simpleFastaObject)).toBe(false);

  const simpleFastaObjectWithStops = bioUtils.readFileSync("./test/testData/CD2_reduced_stopcodon.fasta")
  expect(bioUtils.containsStopCodons(simpleFastaObjectWithStops)).toBe(true);

  // Test the ways to input the genetic code (the function assumes universal if none is give, which is how the lines above work).
  expect(bioUtils.containsStopCodons(simpleFastaObject, 'Universal Code')).toBe(false);
  const simpleFastaObjectWithGeneticCode = Object.assign(simpleFastaObject, {'geneticCode': 'Universal Code'});
  expect(bioUtils.containsStopCodons(simpleFastaObjectWithGeneticCode)).toBe(false);
  });