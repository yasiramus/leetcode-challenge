// Max Sum of a Pair With Equal Sum of Digits
// question:
// You are given a 0-indexed array nums consisting of positive integers. You can choose two indices i and j, such that i != j, and the sum of digits of the number nums[i] is equal to that of nums[j].

// Return the maximum value of nums[i] + nums[j] that you can obtain over all possible indices i and j that satisfy the conditions.

// Example 1:

// Input: nums = [18,43,36,13,7]
// Output: 54
// Explanation: The pairs (i, j) that satisfy the conditions are:
// - (0, 2), both numbers have a sum of digits equal to 9, and their sum is 18 + 36 = 54.
// - (1, 4), both numbers have a sum of digits equal to 7, and their sum is 43 + 7 = 50.
// So the maximum sum that we can obtain is 54.
// Example 2:

// Input: nums = [10,12,19,14]
// Output: -1
// Explanation: There are no two numbers that satisfy the conditions, so we return -1.

// Constraints:

// 1 <= nums.length <= 105
// 1 <= nums[i] <= 109

// Solutions:
// Approach 1: Sorting
// Intuition
// We are given an array nums of positive integers. Our goal is to find the largest possible sum of two distinct elements, nums[i] and nums[j], where both numbers have the same digit sum. If no such pair exists, we return -1.

// Observe that we can divide the numbers into groups, where all numbers with the same digit sum belong to the same group. The two largest numbers in each group will always form the pair with the greatest sum for that group.

// So, what is the first technique that comes to mind when we need to select the largest values from a set? Most likely, it's sorting the values and picking the largest ones. However, in this case, we can't directly sort the elements. Instead, we need to map each number to its digit sum and then sort the numbers within each group that shares the same digit sum.

// For example, given the array nums = [36, 60, 45, 18, 33, 24], the digit sums of the elements are: [9, 6, 9, 9, 6, 6].

// Now, the elements with digit sum of 9 are [36, 45, 18] and those with digit sum of 6 are [24, 33, 60]. When we sort the elements in these groups, we get [18, 36, 45] and [24, 33, 60]. The two largest values in each group would create the largest sum for that digit sum. Therefore, for digit sum 9, the largest sum is 45 + 36 = 81, and for digit sum 6, it is 33 + 60 = 93.

// We can implement this using an array of pairs where each element is of the form {digitSum, value}. Then, we sort the array based on the digitSum values. If two elements have the same digit sum, we sort them based on their values. This way, all elements with the same digit sum will be grouped together in non-decreasing order. Finally, we'll update our result with the largest sum of two consecutive elements within each group, which is the sum of the two last elements of the group.

// Algorithm
// Helper Function - calculateDigitSum(int num):

// Initialize digitSum to 0.
// While num is greater than 0:
// Add num % 10 to digitSum.
// Divide num by 10.
// Return digitSum.

// Main Function:
// Iterate through the elements of nums:
// Compute the digit sum for each element using calculateDigitSum(number).
// Store each number and its digit sum as a pair in the array digitSumPairs.
// Sort the vector digitSumPairs based on digit sums. If two elements have the same digit sum, sort by their values.
// Initialize maxPairSum as -1.
// Iterate through the sorted array starting from index 1:
// Compare the current element's digit sum with the previous element's digit sum.
// If they are the same, calculate the sum of their values.
// Update maxPairSum with the larger value between maxPairSum and the calculated sum.
// Return maxPairSum.

// helper function to return the sum of the numbers
function calcualateDigitSum(number) {
  let sumOfNumbers = 0;
  while (number > 0) {
    sumOfNumbers += number % 10; //return the last digit and add it to sumOfNumbers
    number = Math.floor(number / 10);
  }
  return sumOfNumbers;
}

function maximumSum(nums) {
  let maxPairSum = -1;
  let digitSumPairs = nums
    .map((num) => ({
      key: calcualateDigitSum(num),
      value: num,
    }))
    .sort((a, b) => a.key - b.key || a.value - b.value);

  for (let index = 1; index < digitSumPairs.length; index++) {
    // comparing current key with previous key
    if (digitSumPairs[index].key === digitSumPairs[index - 1].key) {
      let currentValue =
        digitSumPairs[index].value + digitSumPairs[index - 1].value; // add their values

      maxPairSum = Math.max(maxPairSum, currentValue);
    }
  }

  return maxPairSum;
}
module.exports = maximumSum;
