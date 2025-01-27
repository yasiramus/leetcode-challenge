// Question:
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// You can return the answer in any order.

// Example :
Input: (nums = [2, 7, 11, 15]), (target = 9);
Output: [0, 1];

// solution:
//1. using the brute appeoach  //has limitation
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

// 2.using the hash map approach
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

// 3. using the sorted approach 
// this approach is used if their index numbers won't be afftected
function twoSumSorted(nums, target) {
  nums.sort((a, b) => a - b); // Sorting the array first
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;  // Move left pointer right to increase sum
    } else {
      right--; // Move right pointer left to decrease sum
    }
  }
  return [];
}


// summary
// 3 approaches to solving the array of interger, target and return their index numbers 
// first approach:brute force search (bfs) approach
// which is simple and straingth foward
// however it has limitation
// cant be use for lage number and it time and space complexity

// 2. Optimization Using Hash Map (Efficient Lookups)
// Optimization Idea:Instead of looping through the array twice, store each element in a hash map (object or dictionary).
// While iterating through the array,
//  check if the Output (target - currentNumber) exists in the hash map.
//  Time Complexity:we traverse the array once.
// Space Complexity: to store the elements in the hash map.

// Step 3: Two-Pointer Technique (If Sorted Input Allowed)
// Optimization Idea:
// If the array is sorted, use two pointers (one at the start and one at the end).
// Sum the values and adjust pointers based on the result.