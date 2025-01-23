// Question:
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// You can return the answer in any order.

// Example :
Input: (nums = [2, 7, 11, 15]), (target = 9);
Output: [0, 1];

// solution:
// using the brute appeoach 
function arrayOfIntegers(arrayOfNums, target) {
  const lengthOfArray = arrayOfNums.length;

  // looping start at index 0; which is the first value
  for (let firstNum = 0; firstNum < lengthOfArray; firstNum++) {
    // looping start at index 1; which is the second number in that order
    // meaning if firstNum is at index 1 secondNum will be at index 2, 3 and so on
    for (let secondNum = firstNum + 1; secondNum < lengthOfArray; secondNum++) {
      if (arrayOfNums[firstNum] + arrayOfNums[secondNum] === target)
        return [firstNum, secondNum];
    }
  }
  return []
}
arrayOfIntegers(nums, target);
