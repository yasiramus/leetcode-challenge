// Find the Number of Distinct Colors Among the Balls
// question:

// You are given an integer limit and a 2D array queries of size n x 2.

// There are limit + 1 balls with distinct labels in the range [0, limit]. Initially, all balls are uncolored. For every query in queries that is of the form [x, y], you mark ball x with the color y. After each query, you need to find the number of distinct colors among the balls.

// Return an array result of length n, where result[i] denotes the number of distinct colors after ith query.

// Note that when answering a query, lack of a color will not be considered as a color.

// Example 1:

// Input: limit = 4, queries = [[1,4],[2,5],[1,3],[3,4]]

// Output: [1,2,2,3]

// Explanation:

// After query 0, ball 1 has color 4.
// After query 1, ball 1 has color 4, and ball 2 has color 5.
// After query 2, ball 1 has color 3, and ball 2 has color 5.
// After query 3, ball 1 has color 3, ball 2 has color 5, and ball 3 has color 4.
// Example 2:

// Input: limit = 4, queries = [[0,1],[1,2],[2,2],[3,4],[4,5]]

// Output: [1,2,2,3,4]

// Explanation:

// After query 0, ball 0 has color 1.
// After query 1, ball 0 has color 1, and ball 1 has color 2.
// After query 2, ball 0 has color 1, and balls 1 and 2 have color 2.
// After query 3, ball 0 has color 1, balls 1 and 2 have color 2, and ball 3 has color 4.
// After query 4, ball 0 has color 1, balls 1 and 2 have color 2, ball 3 has color 4, and ball 4 has color 5.

// Constraints:
// 1 <= limit <= 109
// 1 <= n == queries.length <= 105
// queries[i].length == 2
// 0 <= queries[i][0] <= limit
// 1 <= queries[i][1] <= 109

// Approach: Two Hash Maps
// Intuition
// This approach uses small amounts of memory.

// A significant portion of our memory usage comes from the array of size limit + 1. When we look at the constraints, we can see that the value of limit can be extremely large, with the range 1 <= limit <= 10^9. Contrarily, the queries only range from 1 <= n <= 10^5, where n is the length of queries. As we navigate through the queries, we can see that not all of the ball labels are guaranteed to be accessed by the queries, leading to unnecessary memory usage.

// We can improve our storage efficiency by eliminating wasted space. Here, we need to choose a data structure that only allocates space as needed. Similar to how the colors are stored, we can utilize a hash map to store only the necessary labels accessed by the queries. By doing so, we can optimize the space complexity and prevent memory overuse.

// After making this adjustment, we can apply the same logic and procedure as the previous solution. With this space optimization, we can process and track the results from the queries while staying within the memory limit.

// Algorithm
// Initialize:
// an integer n, equal to the length of queries.
// an array result of length n, where result[i] denotes the number of distinct colors after the ith query.
// two hash maps:
// colorMap, which stores the number of distinct colors after processing current query.
// ballMap, which stores the distinct ball labels found when traversing queries and the current colors associated with them.
// Iterate from index 0 to n-1 to traverse the queries. For each query, query[i]:
// Initialize:
// an integer ball equal to query[i][0], denoting the current ball that will be colored.
// an integer color equal to query[i][1], denoting the color that the ball will be colored.
// If ball already exists in ballMap, meaning it is already colored:
// Check the existing color of ball, which will be labeled prevColor.
// Decrement the count of prevColor in colorMap.
// If the count becomes 0, remove prevColor from colorMap.
// Update ballMap[ball] to color.
// Increase the count of color in colorMap by one.
// Set result[i] to the current size of colorMap.
// Return the result array.
// Implementation

// Complexity Analysis
// Let n be the size of queries.

// Time Complexity: O(n)

// The algorithm iterates through each query exactly once, performing constant-time operations for each query.

// Specifically, for each query, it checks and updates the ballMap and colorMap, both of which are O(1) operations on average due to the use of hash maps.

// Therefore, the overall time complexity is linear in the number of queries, O(n).

// Note: The operations on the ballMap and colorMap (such as get, put, and remove) are considered O(1) on average due to the nature of hash maps.

// Space Complexity: O(n)

// The space complexity is determined by the ballMap and the colorMap.

// In the worst case, ballMap can store up to n distinct colors (if all queries introduce a new ball label), and the colorMap can store up to n distinct colors (if all queries introduce a new color). Therefore, the space complexity is O(2n), which simplifies to O(n).

// Note: The result array also contributes O(n) space, but since it is part of the output, it is typically not counted in the auxiliary space complexity. However, if we include it, the space complexity remains O(n).

// nb:limit isnt in use 
var queryResults = function (limit, queries) {
  const lengthOfQueries = queries.length;
  let result = new Array(lengthOfQueries).fill(0);
  let colorMap = new Map();
  let ballMap = new Map();

  for (let index = 0; index < lengthOfQueries; index++) {
    let [ball, color] = queries[index];

    if (ballMap.has(ball)) {
      let prevColor = ballMap.get(ball);

      colorMap.set(prevColor, colorMap.get(prevColor) - 1);

      if (colorMap.get(prevColor) === 0) {
        colorMap.delete(prevColor);
      }
    }

    ballMap.set(ball, color);
    colorMap.set(color, (colorMap.get(color) || 0) + 1);

    result[index] = colorMap.size;
  }

  return result;
};

module.exports = queryResults;
