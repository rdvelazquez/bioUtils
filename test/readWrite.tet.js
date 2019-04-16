const bioUtils = require("../src/bioUtils")

test("Writing an fna object to file then reading the file works as expected (i.e. you get out what you put in)", () => {
  const exampleFnaObjectIn = {'sequences': [{'name': 'seq1', 'sequence': 'ACT'}, {'name': 'seq2', 'sequence': 'ACC'}], 'tree': '(seq1,seq2);', 'metaData': {'fileType': 'fna'}}
  bioUtils.writeFileSync(exampleFnaObjectIn, './tempData/exampleFnaObject.fna');
  const exampleFnaObjectOut = bioUtils.readFileSync('./tempData/exampleFnaObject.fna');

  expect(exampleFnaObjectIn).toEqual(exampleFnaObjectOut);
});
