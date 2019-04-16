const bioUtils = require("../src/bioUtils")

test("readFile works as expected on a simple fasta file", () => {
  const simpleFastaObject = bioUtils.readFileSync("./test/testData/CD2_reduced.fasta");
  expect(simpleFastaObject['sequences'][0]['name']).toEqual("Human");
  expect(simpleFastaObject['sequences'][0]['sequence']).toEqual("AAAGAGATTACGAATGCC");
  expect(simpleFastaObject['tree']).toEqual(undefined);
  expect(simpleFastaObject['metaData']['fileType']).toEqual("fasta");
});

test("readFile works as expected on a simple newick file", () => {
  const simpleNewickObject = bioUtils.readFileSync("./test/testData/CD2_reduced.tree");
  expect(simpleNewickObject['sequences']).toEqual(undefined);
  expect(simpleNewickObject['tree']).toEqual("((((Pig{FG}:0.147969,Cow:0.213430):0.085099,Horse:0.165787,Cat:0.264806):0.058611,((RhMonkey:0.002015,Baboon:0.003108):0.022733,(Human:0.004349,Chimp:0.000799):0.011873):0.101856):0.340802,Rat:0.050958,Mouse:0.097950);");
  expect(simpleNewickObject['metaData']['fileType']).toEqual("newick");
});