const bioUtils = require("./../src/bioUtils")
const fs = require("fs");


test("nexus parser returns expected values for CD2 nexus string", () => {
  const CD2NexusString = fs.readFileSync('./test/testData/CD2_hyphy.nexus', "utf-8");
  const CD2BioUtilsObject = bioUtils.nexusParser(CD2NexusString);
  
  expect(CD2BioUtilsObject['sequences'][0]['name']).toBe("HUMAN");
  expect(CD2BioUtilsObject['sequences'][0]['sequence'].substring(0,10)).toBe("AAAGAGATTA");
  expect(CD2BioUtilsObject['tree']).toBe("((((Pig:0.147969,Cow:0.213430):0.085099,Horse:0.165787,Cat:0.264806):0.058611,((RhMonkey{PR}:0.002015,Baboon{PR}:0.003108){PR}:0.022733,(Human{PR}:0.004349,Chimp{PR}:0.000799){PR}:0.011873){PR}:0.101856){PR}:0.340802,Rat:0.050958,Mouse:0.097950);");
  expect(CD2BioUtilsObject['metaData']['fileType']).toBe("nexus");
  });