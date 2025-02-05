function areAlmostEqual(firstString, secondString) {
  if (firstString === secondString) return true;

  let stringFrequencyMap1 = new Array(26).fill(0);
  let stringFrequencyMap2 = new Array(26).fill(0);

  let numDiffs = 0;
  for (let index = 0; index < firstString.length; index++) {
    let firstStringCharacter = firstString.charCodeAt(index) - 97;
    let secondStringCharacter = secondString.charCodeAt(index) - 97;

    if (firstString[index] !== secondString[index]) {
      numDiffs++;
      if(numDiffs > 2) return false;
    }

    stringFrequencyMap1[firstStringCharacter]++;
    stringFrequencyMap2[secondStringCharacter]++;
  }

  return stringFrequencyMap1.toString() === stringFrequencyMap2.toString();
}

module.exports = areAlmostEqual;
