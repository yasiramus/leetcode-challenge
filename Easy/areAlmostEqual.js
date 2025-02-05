// question
// Check if One String Swap Can Make Strings Equal

// You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

// Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

// Example 1:

// Input: s1 = "bank", s2 = "kanb"
// Output: true
// Explanation: For example, swap the first character with the last character of s2 to make "bank".
// Example 2:

// Input: s1 = "attack", s2 = "defend"
// Output: false
// Explanation: It is impossible to make them equal with one string swap.
// Example 3:

// Input: s1 = "kelb", s2 = "kelb"
// Output: true
// Explanation: The two strings are already equal, so no string swap operation is required.

// Constraints:

// 1 <= s1.length, s2.length <= 100
// s1.length == s2.length
// s1 and s2 consist of only lowercase English letters.

// nb:expected result :return a boolean value
function areAlmostEqual(firstString, secondString) {
  let firstStringToLowerCase = firstString.toLowerCase();
  let secondStringToLowerCase = secondString.toLowerCase();
  if (firstStringToLowerCase === secondStringToLowerCase) return true;
  let stringFrequencyMap1 = new Array(26).fill(0);
  let stringFrequencyMap2 = new Array(26).fill(0);

  let numDiffs = 0;
  for (let index = 0; index < firstStringToLowerCase.length; index++) {
    let firstStringCharacter = firstStringToLowerCase.charCodeAt(index) - 97;
    let secondStringCharacter = secondStringToLowerCase.charCodeAt(index) - 97;

    if (firstStringToLowerCase[index] !== secondStringToLowerCase[index]) {
      numDiffs++;
      if (numDiffs > 2) return false;
    }

    stringFrequencyMap1[firstStringCharacter]++;
    stringFrequencyMap2[secondStringCharacter]++;
  }

  return stringFrequencyMap1.toString() === stringFrequencyMap2.toString();
}

module.exports = areAlmostEqual;
