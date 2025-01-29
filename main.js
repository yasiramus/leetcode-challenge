// const arrayOfIntegers = require ('Essay/arrayOfIntegers');
// arrayOfIntegers();
const getMaxFishCount = require("./Medium/getMaxFishCount");

const testCase1 = [
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 1],
];

const testCase2 = [
  [0, 2, 1, 0],
  [4, 0, 0, 3],
  [1, 0, 0, 4],
  [0, 3, 2, 0],
];
const findFishMax1 = getMaxFishCount(testCase1);

const findFishMax2 = getMaxFishCount(testCase2);

console.log("Fish max: ", findFishMax1);

console.log("Fish max_two: ", findFishMax2);
