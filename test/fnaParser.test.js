const bioUtils = require("./../src/bioUtils")

test("fna parser returns expected values for simple fna string", () => {
  const exampleFnaString = ">seq1\nACT\n>seq2\nACC\n(seq1,seq2);"
  const testData = bioUtils.fnaParser(exampleFnaString);
  expect(testData['sequences'][0]['name']).toBe("seq1");
  expect(testData['sequences'][0]['sequence']).toBe("ACT");
  expect(testData['tree']).toBe("(seq1,seq2);");
  expect(testData['metaData']['fileType']).toBe("fna");
  });