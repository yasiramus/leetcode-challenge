/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    for (let row=0; row<rows; row++){
        for(let col=row+1; col<grid[row].length; col++){

            if(grid[row][col] === 0 || grid[row][col] > 0){
                  console.log(row+col)  
            }
        }
    }
};