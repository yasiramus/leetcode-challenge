// You are given a 0-indexed 2D matrix grid of size m x n, where (r, c) represents:

// A land cell if grid[r][c] = 0, or
// A water cell containing grid[r][c] fish, if grid[r][c] > 0.
// A fisher can start at any water cell (r, c) and can do the following operations any number of times:

// Catch all the fish at cell (r, c), or
// Move to any adjacent water cell.
// Return the maximum number of fish the fisher can catch if he chooses his starting cell optimally, or 0 if no water cell exists.

// An adjacent cell of the cell (r, c), is one of the cells (r, c + 1), (r, c - 1), (r + 1, c) or (r - 1, c) if it exists.

// Example 1:
// Input: grid = [[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]]
// Output: 7
// Explanation: The fisher can start at cell (1,3) and collect 3 fish, then move to cell (2,3) and collect 4 fish.
// Example 2:
// Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,1]]
// Output: 1
// Explanation: The fisher can start at cells (0,0) or (3,3) and collect a single fish.

// Constraints:
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 10
// 0 <= grid[i][j] <= 10

// Solution using the bfs approach
/**
 * @param {number[][]} grid
 * @return {number}
 */
// var findMaxFish = function(grid) {
//     const rows = grid.length;
//     const cols = grid[0].length;
//     for (let row=0; row<rows; row++){
//         for(let col=row+1; col<grid[row].length; col++){

//             if(grid[row][col] === 0 || grid[row][col] > 0){
//                   console.log(row+col)
//             }
//         }
//     }
// };

function getMaxFishCount(grid) {
  const numRows = grid.length;
  const numCols = grid[0].length;
  const visitedCells = Array.from({ length: numRows }, () =>
    Array(numCols).fill(false)
  );

  let maximumFishCollected = 0;
  console.log(maximumFishCollected, "visited_cells");

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (grid[row][col] > 0 && !visitedCells[row][col]) {
        maximumFishCollected = Math.max(
          maximumFishCollected,
          collectFishFromConnectedWaterCells(row, col, visitedCells, grid)
        );
      }
    }
  }

  return maximumFishCollected;
}

module.exports = getMaxFishCount;

function isValidWaterCell(row, col, visitedCells) {
  return (
    row >= 0 &&
    row < row.length &&
    col >= 0 &&
    col < row[0].length &&
    grid[row][col] > 0 &&
    !visitedCells[row][col]
  );
}

function collectFishFromConnectedWaterCells(
  startRow,
  startCol,
  visitedCells,
  grid
) {
  const movementDirections = [
    [0, 1], // Right
    [0, -1], // Left
    [1, 0], // Down
    [-1, 0], // Up
  ];
  let fishCollected = 0;
  const waterCellsQueue = [[startRow, startCol]];
  visitedCells[startRow][startCol] = true;

  while (waterCellsQueue.length > 0) {
    const [currentRow, currentCol] = waterCellsQueue.shift();
    fishCollected += grid[currentRow][currentCol];

    for (let [rowOffset, colOffset] of movementDirections) {
      const nextRow = currentRow + rowOffset;
      const nextCol = currentCol + colOffset;

      if (isValidWaterCell(nextRow, nextCol, visitedCells)) {
        visitedCells[nextRow][nextCol] = true;
        waterCellsQueue.push([nextRow, nextCol]);
      }
    }
  }
  return fishCollected;
}
