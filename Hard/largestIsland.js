// You are given an n x n binary matrix grid. You are allowed to change at most one 0 to be 1.

// Return the size of the largest island in grid after applying this operation.

// An island is a 4-directionally connected group of 1s.

// Example 1:
// Input: grid = [[1,0],[0,1]]
// Output: 3
// Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.

// Example 2:
// Input: grid = [[1,1],[1,0]]
// Output: 4
// Explanation: Change the 0 to 1 and make the island bigger, only one island with area = 4.

// Example 3:
// Input: grid = [[1,1],[1,1]]
// Output: 4
// Explanation: Can't change any 0 to 1, only one island with area = 4.
 

// Constraints:
// n == grid.length
// n == grid[i].length
// 1 <= n <= 500
// grid[i][j] is either 0 or 1.

// # Intuition
// <!-- Describe your first thoughts on how to solve this problem. -->

// # Approach
// <!-- Describe your approach to solving the problem. -->

// # Complexity
// - Time complexity:
// <!-- Add your time complexity here, e.g. $$O(n)$$ -->

// - Space complexity:
// <!-- Add your space complexity here, e.g. $$O(n)$$ -->


// soluntion 
var largestIsland = function(grid) {
    const gridSize = grid.length;
    const directions = [[0,1], [1,0], [0,-1], [-1,0]];
    let islandId = 2;
    let islandSizeMap = new Map();

    // Function to explore an island using DFS
    const exploreIsland = (row, col, id) => {
        if (row < 0 || col < 0 || row >= gridSize || col >= gridSize || grid[row][col] !== 1) return 0;
        
        grid[row][col] = id;
        let size = 1;
        
        for (let [deltaRow, deltaCol] of directions) {
            size += exploreIsland(row + deltaRow, col + deltaCol, id);
        }
        return size;
    };

    // Step 1: Identify and label all islands
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            if (grid[row][col] === 1) {
                let size = exploreIsland(row, col, islandId);
                islandSizeMap.set(islandId, size);
                islandId++;
            }
        }
    }

    // Step 2: Find the largest existing island
    let maxIslandSize = Math.max(...islandSizeMap.values(), 0);

    // Step 3: Try flipping each `0` to `1` to find the best possible island size
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            if (grid[row][col] === 0) {
                let connectedIslands = new Set();
                let newIslandSize = 1;

                for (let [deltaRow, deltaCol] of directions) {
                    let newRow = row + deltaRow, newCol = col + deltaCol;
                    if (newRow >= 0 && newCol >= 0 && newRow < gridSize && newCol < gridSize && grid[newRow][newCol] > 1) {
                        let id = grid[newRow][newCol];
                        if (!connectedIslands.has(id)) {
                            connectedIslands.add(id);
                            newIslandSize += islandSizeMap.get(id);
                        }
                    }
                }
                maxIslandSize = Math.max(maxIslandSize, newIslandSize);
            }
        }
    }

    return maxIslandSize;
};