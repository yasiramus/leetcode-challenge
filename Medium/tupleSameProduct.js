// Tuple with Same Product
// Question
// Given an array nums of distinct positive integers, return the number of tuples (a, b, c, d) such that a * b = c * d where a, b, c, and d are elements of nums, and a != b != c != d.

// Example 1:

// Input: nums = [2,3,4,6]
// Output: 8
// Explanation: There are 8 valid tuples:
// (2,6,3,4) , (2,6,4,3) , (6,2,3,4) , (6,2,4,3)
// (3,4,2,6) , (4,3,2,6) , (3,4,6,2) , (4,3,6,2)
// Example 2:

// Input: nums = [1,2,4,5,10]
// Output: 16
// Explanation: There are 16 valid tuples:
// (1,10,2,5) , (1,10,5,2) , (10,1,2,5) , (10,1,5,2)
// (2,5,1,10) , (2,5,10,1) , (5,2,1,10) , (5,2,10,1)
// (2,10,4,5) , (2,10,5,4) , (10,2,4,5) , (10,2,5,4)
// (4,5,2,10) , (4,5,10,2) , (5,4,2,10) , (5,4,10,2)

// Constraints:

// 1 <= nums.length <= 1000
// 1 <= nums[i] <= 104
// All elements in nums are distinct.

// # Intuition
// <!-- Describe your first thoughts on how to solve this problem. -->

// # Approach
// <!-- Describe your approach to solving the problem. -->

// # Complexity
// - Time complexity:
// <!-- Add your time complexity here, e.g. $$O(n)$$ -->

// - Space complexity:
// <!-- Add your space complexity here, e.g. $$O(n)$$ -->

// Approach : Optimized Brute Force
// Intuition
// A straightforward way to solve the problem is to test all possible combinations of values for a, b, c, and d and count how many satisfy the condition.
// This approach can be implemented using 4 nested for loops, with each loop assigning a value to one of a, b, c, or d. However, this method has a time complexity of O(n4 ), which is inefficient for the given constraints.

// To optimize this approach, we make the following observations:

// If a and b are both greater (or both smaller) than c and d, then the condition a * b == c * d cannot be true because the first product will be strictly greater than (or strictly smaller than) the second. To address this, we will sort the array to ensure that the selected values for c and d always lie between the values of a and b.
// If a * b is not a multiple of c for some fixed values of a, b, and c, the condition cannot be satisfied for any integer value of d. For cases where the condition can be satisfied, the value of d is already determined as d = a * b / c. Instead of searching the entire array to find a matching value for d, we can store all possible values in a hash map and efficiently check if the required value exists. As we process each potential value of c that could form a tuple (i.e., values that divide the product a * b), we add them to a hash map, possibleDValues, ensuring they are readily available for efficient lookups when needed.
// For example, consider the array [1, 2, 3, 4, 8]. Let a = 1 and b = 8. Their product is 8. If we choose c = 4, then d must be 8 / 4 = 2 to satisfy the condition. Number 2 exists in the array so the tuple (1, 8, 4, 2) is a valid one. However, for c = 3, c is not a divisor of a * b, so the condition cannot be satisfied for any value of d and therefore this combination won't lead to any valid tuple.

// Algorithm
// Sort the array in increasing order.
// Initialize numsLength to the length of the nums array.
// Initialize totalNumberOfTuples to 0.
// Iterate over nums to try out all possible values of a with indexOfA from 0 to numsLength - 1.
// Iterate over the rest values of nums to try all possible values for b with indexOfB from numsLength - 1 to indexOfA + 1.
// Define product as nums[indexOfA] * nums[indexOfB].
// Initialize a hash map possibleDValues using new Set().
// Iterate over nums with cIndex from aIndex + 1 to bIndex - 1:
// If the condition can be satisfied for some integer value of d, i.e. if product % nums[indexOfC] == 0:
// Define the desired value of d as dValue = product / nums[cIndex].
// If dValue is in possibleDValues then add 8 (all possible tuples) to totalNumberOfTuples.
// Add nums[cindex] to the possibleDValues.
// Return totalNumberOfTuples.
// Implementation

// Complexity Analysis
// Let n be the length of the nums array.

// Time complexity: O(n 3  )

// First, we sort the array in O(nlogn) time. Next, we use 3 nested loops to fix the values of a, b, and c, and for each combination, we check whether the required value of d exists in the array. Using a hash set allows us to perform both insertion and lookup operations in constant time on average. Thus, the operations within the innermost loop take constant time. As a result, the overall time complexity of the algorithm is O(n
// 3
//  ).

// Space complexity: O(n)

// We create a hash set to store the possible values variable d can take. This hash set can grow up to O(n) in size, so the algorithm requires O(n) extra space

// Soln
/**
 * @param {number[]} nums
 * @return {number}
 */

var tupleSameProduct = function (nums) {
  nums.sort((a, b) => a - b); //not neccessary

  let numsLength = nums.length;
  let totalNumberOfTuples = 0;

  // Iterate over all possible values for 'a'
  for (let indexOfA = 0; indexOfA < numsLength; indexOfA++) {
    // Break early if there aren't enough elements left to form a valid tuple
    // if (numsLength - indexOfA < 4) break;

    // Iterate over all possible values for 'b', starting from the end
    for (let indexOfB = numsLength - 1; indexOfB >= indexOfA + 1; indexOfB--) {
      let resultOfAB = nums[indexOfA] * nums[indexOfB];
      // console.log( nums[indexOfA],  nums[indexOfB])
      // console.log(resultOfAB,'[2,3,4,6]')
      // Use a map to store possible values of 'd' for better tracking
      let possibleDValues = new Map();
      // Iterate over all possible values for 'c' between 'a' and 'b'
      for (let indexOfC = indexOfA + 1; indexOfC < indexOfB; indexOfC++) {
        // Check if the product is divisible by nums[cIndex]
        if (resultOfAB % nums[indexOfC] === 0) {
          let valueOfD = resultOfAB / nums[indexOfC];

          // If 'valueOfD' is in the map, increment the tuple count by 8
          // Each valid tuple can be arranged in 8 different ways:
          // (a, b, c, d), (a, b, d, c), (b, a, c, d), (b, a, d, c),
          // (c, d, a, b), (c, d, b, a), (d, c, a, b), (d, c, b, a)

          if (possibleDValues.has(valueOfD)) {
            totalNumberOfTuples += 8;
          }
          // Add nums[indexOfC] to the map for future checks
          possibleDValues.set(nums[indexOfC]);
        }
      }
    }
  }

  return totalNumberOfTuples;
};

module.exports = tupleSameProduct;
