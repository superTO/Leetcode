/** 417. Pacific Atlantic Water Flow */
/** 看不懂題目
 * 找出哪些座標的水可以同時流向the Pacific and Atlantic oceans.
 */
/** 解題構想
 * dp 紀錄 可以流到Pacific 和 可以流到 Atlantic 最後合起來等於解答
 * 
 * int[][] dir = {{0,1},{1,0},{0,-1},{-1,0}}; // 這代表四個方位
 */
// function pacificAtlantic(heights: number[][]): number[][] {
//     const m = heights.length;
//     const n = heights[0].length;
        // 這邊 create 的不是二維陣列
//     const dpP = new Array(m).fill(new Array(n).fill(false));
//     const dpA = new Array(m).fill(new Array(n).fill(false));

//     console.log(dpP);
//     console.log(dpA);
//     // Set bolder
//     // for(let i = 0; i < m; ++i){
//     //     dpP[i][0] = true;
//     //     dpA[i][n - 1] = true;
//     // }

//     // for(let i = 0; i < n; ++i){
//     //     dpP[0][i] = true;
//     //     dpA[m-1][i] = true;
//     // }

//     // DFS (找能到達Pacific 和 Atlantic)
//     for(let i = 0; i < m; ++i){
//         dfs(heights, i, 0, dpP)
//         dfs(heights, i, n-1, dpA)
//     }

//     for(let i = 0; i < n; ++i){
//         dfs(heights, 0, i, dpP)
//         dfs(heights, m-1, i, dpA)
//     }
//     console.log(dpA);
//     console.log(dpP);

//     // 找兩邊都能到達的點
//     const result = [];
//     for(let i = 0; i < m; ++i){
//         for(let j = 0; j < n; ++j){
//             if(dpA[i][j] && dpP[i][j]) result.push([i, j])
//         }
//     }

//     return result;
// };

function dfs([i, j]: [number, number], visited: boolean[][], heights: number[][]) {
    if (visited[i][j]) {
        return;
    }
    visited[i][j] = true;

    const neighboors = [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]];
    for(let [x, y] of neighboors){
        if(x >= 0 && y >=0 && x < heights.length && y < heights[0].length){
            if(heights[x][y] >= heights[i][j] && !visited[x][y]){
                dfs([x, y], visited, heights);
            }
        }
    }
}

function pacificAtlantic(heights: number[][]): number[][] {
    const m = heights.length;
    const n = heights[0].length;
    // For tracking the reachability from both shores.

    const pacificCells = new Array(m).fill(0).map(() => new Array<boolean>(n));
    const atlanticCells = Array.from(new Array(m),
        () => new Array<boolean>(n));

    // Walk vertical shores.
    for (let i = 0; i < m; i++) {
        dfs([i, 0], pacificCells, heights);
        dfs([i, n - 1], atlanticCells, heights);
    }
    // Walk horizontal shores.
    for (let i = 0; i < n; i++) {
        dfs([0, i], pacificCells, heights);
        dfs([m - 1, i], atlanticCells, heights);
    }

    // Find the overlapping reachable cells.
    const result = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacificCells[i][j] && atlanticCells[i][j]) {
                result.push([i, j]);
            }
        }
    }
    return result;
};

/** test case */
console.log(pacificAtlantic([[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]])); // [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
// console.log(pacificAtlantic([[2, 1], [1, 2]])); // [[0,0],[0,1],[1,0],[1,1]]
