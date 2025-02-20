// Find Unique Binary String

// question 
// Given an array of strings nums containing n unique binary strings each of length n, return a binary string of length n that does not appear in nums. If there are multiple answers, you may return any of them.

// Example 1:

// Input: nums = ["01","10"]
// Output: "11"
// Explanation: "11" does not appear in nums. "00" would also be correct.
// Example 2:

// Input: nums = ["00","01"]
// Output: "11"
// Explanation: "11" does not appear in nums. "10" would also be correct.
// Example 3:

// Input: nums = ["111","011","001"]
// Output: "101"
// Explanation: "101" does not appear in nums. "000", "010", "100", and "110" would also be correct.
 

// Constraints:

// n == nums.length
// 1 <= n <= 16
// nums[i].length == n
// nums[i] is either '0' or '1'.
// All the strings of nums are unique.


// Approach: Cantor's Diagonal Argument
// Intuition

// We start by initializing the answer result to an empty string. to get the result, we need to assign either "0" or"1"to each index if or indices 0 to n - 1. How do we assign them so result is guaranteed to be different from every string in nums? We know that two strings are different, as long as they differ by at least one character. We can intentionally construct our result based on this fact.

// For each index i, we will check the ith character of the ith
//  string in nums. That is, we check result = nums[i][i]. We then assign result[i] to the opposite of result. That is, if nums[index][index] = "0", we assign result[index] = "1". If nums[index][index] = "1", we assign result[index] = "0".

// What is the point of this strategy?
// result will differ from every string in at least one position. More specifically:

// result differs from nums[0]in nums[0][0].
// result differs from nums[1]in nums[1][1].
// result differs from nums[2]in nums[2][2].
// ...
// result differs from nums[n - 1] in nums[n - 1][n - 1].
// Thus, it is guaranteed that reult does not appear in nums and is a valid answer.

// This strategy is applicable because both the length of result and the length of each string in nums are larger than or equal to n, the number of strings in nums. Therefore, we can find one unique position for each string innums.

// Algorithm

// Initialize the result to empty string. 
// Iterate over the indices of nums starting from zeo
// Set result += nums[i][i].
// If nums[i][i] = "0", add "1"to result. Otherwise, add"0"to result.
// Return result.

// Implementation
var findDifferentBinaryString = function(nums) {
    let result = "";
    for(let index = 0; index < nums.length; index++){
        result += nums[index][index] === "0"? "1":"0"
    }
    return result
};


// Time complexity:O(n)

// We iterate over each string in nums. Assuming the string building is efficient, each iteration costsO(1), and joining the result string at the end costsO(n).

// Space complexity:O(1)

//result isn't counted as part of the space complexity.

