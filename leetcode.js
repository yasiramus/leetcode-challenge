// medium
// First Completely Painted Row or Column
// You are given a 0-indexed integer array arr, and an m x n integer matrix mat. arr and mat both contain all the integers in the range [1, m * n].

// Go through each index i in arr starting from index 0 and paint the cell in mat containing the integer arr[i].

// Return the smallest index i at which either a row or a column will be completely painted in mat.
// test cases
// Input: arr = [1,3,4,2], mat = [[1,4],[2,3]]
// Output: 2
// Explanation: The moves are shown in order, and both the first row and second column of the matrix become fully painted at arr[2].
/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
export var firstCompleteIndex = function (arr, mat) {
  let rows = mat.length;
  let cols = mat[0].length;
  let cellPosition = {};
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      cellPosition[mat[row][col]] = [row, col];
    }
  }

  let rowsCount = new Array(rows).fill(0);
  let colsCount = new Array(cols).fill(0);

  for (let list = 0; list < arr.length; list++) {
    let [row, col] = cellPosition[arr[list]];
    rowsCount[row]++;
    colsCount[col]++;
    if (rowsCount[row] === cols || colsCount[col] === rows) return list;
  }
  return -1;
};


// // medium 
// You are given a 0-indexed 2D array grid of size 2 x n, where grid[r][c] represents the number of points at position (r, c) on the matrix. Two robots are playing a game on this matrix.

// Both robots initially start at (0, 0) and want to reach (1, n-1). Each robot may only move to the right ((r, c) to (r, c + 1)) or down ((r, c) to (r + 1, c)).

// At the start of the game, the first robot moves from (0, 0) to (1, n-1), collecting all the points from the cells on its path. For all cells (r, c) traversed on the path, grid[r][c] is set to 0. Then, the second robot moves from (0, 0) to (1, n-1), collecting the points on its path. Note that their paths may intersect with one another.

// The first robot wants to minimize the number of points collected by the second robot. In contrast, the second robot wants to maximize the number of points it collects. If both robots play optimally, return the number of points collected by the second robot.

 

// Example 1:


// Input: grid = [[2,5,4],[1,5,1]]
// Output: 4
// Explanation: The optimal path taken by the first robot is shown in red, and the optimal path taken by the second robot is shown in blue.
// The cells visited by the first robot are set to 0.
// The second robot will collect 0 + 0 + 4 + 0 = 4 points.
// Example 2:


// Input: grid = [[3,3,1],[8,5,2]]
// Output: 4
// Explanation: The optimal path taken by the first robot is shown in red, and the optimal path taken by the second robot is shown in blue.
// The cells visited by the first robot are set to 0.
// The second robot will collect 0 + 3 + 1 + 0 = 4 points.
// Example 3:


// Input: grid = [[1,3,1,15],[1,3,3,1]]
// Output: 7
// Explanation: The optimal path taken by the first robot is shown in red, and the optimal path taken by the second robot is shown in blue.
// The cells visited by the first robot are set to 0.
// The second robot will collect 0 + 1 + 3 + 3 + 0 = 7 points.
 

// Constraints:

// grid.length == 2
// n == grid[r].length
// 1 <= n <= 5 * 104
// 1 <= grid[r][c] <= 105

// solution
/**
 * @param {number[][]} grid
 * @return {number}
 */
export var gridGame = function(grid) {
    
  let numCol = grid[0].length;

  let topSum=new Array(numCol).fill(0);
  let bottomSum=new Array(numCol).fill(0);

  topSum[numCol-1] = grid[0][numCol-1]
  for(let row=numCol -2; row >= 0; row--){
      topSum[row] = topSum[row +1]+ grid[0][row]
  }
  bottomSum[0] = grid[1][0]
  for(let bottom = 1; bottom < numCol; bottom++){
   bottomSum[bottom]= bottomSum[bottom - 1] + grid[1][bottom] 
  }
  let result=Infinity;
  for(let i=0; i<numCol;i++){
      let topRemains = i + 1 < numCol? topSum[i+1]:0;
      let bottomRemains = i > 0 ? bottomSum[i-1]:0;
      console.log(topRemains, result)
      result = Math.min(result, Math.max(topRemains, bottomRemains));
  }

  return result

}