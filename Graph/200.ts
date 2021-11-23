/** 200. Number of Islands */
function numIslands(grid: string[][]): number {
    let m = grid.length, n = grid[0].length;

    let count = 0;

    for(let i = 0; i < m; ++i){
        for(let j = 0; j < n; ++j){
            if(grid[i][j] === '1'){
                dfs(grid, i, j);
                ++count;
            }
        }
    }

    return count;
};

function dfs(grid: string[][], i: number, j: number): void{
    if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] !== '1') return;
    
    grid[i][j] = 'visited';
    dfs(grid, i+1, j);
    dfs(grid, i-1, j);
    dfs(grid, i, j+1);
    dfs(grid, i, j-1);
}

numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
])

numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
])