const bioUtils = require("./../src/bioUtils")

test("outputData returns expected value (string) for simple fna object", () => {
  const exampleFnaObject = {'sequences': [{'name': 'seq1', 'sequence': 'ACT'}, {'name': 'seq2', 'sequence': 'ACC'}], 'tree': '(seq1,seq2);', 'metaData': {'fileType': 'fna'}}
  const exampleFnaString = ">seq1\nACT\n>seq2\nACC\n(seq1,seq2);"
  const testData = bioUtils.outputData(exampleFnaObject);
  expect(bioUtils.outputData(exampleFnaObject)).toEqual(exampleFnaString);
  });