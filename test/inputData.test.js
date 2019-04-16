const bioUtils = require("./../src/bioUtils")

// Note the inputData function is more thoroughly tested in readFile.test.js.
test("inputData returns expected values for simple fna string", () => {
  const exampleFnaString = ">seq1\nACT\n>seq2\nACC\n(seq1,seq2);"
  const testData = bioUtils.inputData(exampleFnaString);
  expect(testData['sequences'][0]['name']).toBe("seq1");
  expect(testData['sequences'][0]['sequence']).toBe("ACT");
  expect(testData['tree']).toBe("(seq1,seq2);");
  expect(testData['metaData']['fileType']).toBe("fna");
  });