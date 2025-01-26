// Question:
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// You can return the answer in any order.

// Example :
Input: (nums = [2, 7, 11, 15]), (target = 9);
Output: [0, 1];

// solution:
// using the brute appeoach  //has limitation
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
  return [];
}
arrayOfIntegers(nums, target);

// using the hash map approach
// works using both small and larger numbers
function twoSum(nums, target) {
  const map = new Map(); // Create a hash map to store numbers and their indices
  // map method create an object instance of a key value pair
  // has proprities such as get, set, has, delete, forEach
  // Loop through the array
  for (let i = 0; i < nums.length; i++) {
    let result = target - nums[i]; // Calculate the required result

    // Check if the result exists in the map which is the nums array if the value exit in the array
    //it return it index number
    if (map.has(result)) {
      return [map.get(complement), i]; // Return indices of the two numbers
    }

    // setting or Store the current number and its index in the map
    map.set(nums[i], i);
  }

  return []; // Return empty array if no solution is found
}

// Test your function
console.log(twoSum([3, 8, 12, 4, 7], 11)); // Expected output: [0, 1]
console.log(twoSum([2, 7, 11, 15], 9)); // Expected output: [0, 1]
