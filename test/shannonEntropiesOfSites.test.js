const bioUtils = require("../src/bioUtils")
const fullyConservedMSA = bioUtils.readFileSync("./test/testData/fullyConserved.fasta");
const partiallyConservedMSA = bioUtils.readFileSync("./test/testData/partiallyConserved.fasta")


test("shannonEntropiesOfSites of fully conserved sequences returns a list of zeros", () => {
  const result = bioUtils.shannonEntropiesOfSites(fullyConservedMSA)
  expect(result).toEqual([0,0,0])
  });

test("shannonEntropiesOfSites of partially conserved sequence returns a list of zeros", () => {
  const result = bioUtils.shannonEntropiesOfSites(partiallyConservedMSA)
  expect(result[0].toFixed(2)).toBe("1.58")
  expect(result[1].toFixed(2)).toBe("0.92")
  expect(result[2]).toEqual(0)
  });