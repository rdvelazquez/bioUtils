const bioUtils = require("./../src/bioUtils")

test("fasta parser returns expected values for simple fasta string", () => {
  const exampleFastaString = ">seq1\nACT\n>seq2\nACC"
  const testData = bioUtils.fastaParser(exampleFastaString);
  expect(testData['sequences'][0]['name']).toBe("seq1");
  expect(testData['sequences'][0]['sequence']).toBe("ACT");
  expect(testData['tree']).toBe(undefined);
  expect(testData['metaData']['fileType']).toBe("fasta");
  });