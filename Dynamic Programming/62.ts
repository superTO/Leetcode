/** 62. Unique Paths */

/** 嘗試將space complexity => O(2*n) */
/** 方法和 1143. Longest Common Subsequence 相同 */
function uniquePaths(m: number, n: number): number {
    if(m === 1 || n === 1) return 1;

    // const dp = new Array(2).fill(new Array(n).fill(1));
    const dp = Array.from(new Array(m).fill(1), () => new Array(n).fill(1));

    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            dp[i%2][j] = dp[(i-1)%2][j] + dp[i%2][j-1];
        }
    }

    // console.log(dp);
    return dp[1][n-1];
};


/** AC -- Runtime: 103 ms, Memory Usage: 39.6 MB */
// function uniquePaths(m: number, n: number): number {
//     if(m === 1 || n === 1) return 1;

//     const dp = new Array(m).fill(new Array(n).fill(1));
//     // const dp = Array.from(new Array(m).fill(1), () => new Array(n).fill(1));

//     for(let i = 1; i < m; i++){
//         for(let j = 1; j < n; j++){
//             dp[i][j] = dp[i-1][j] + dp[i][j-1];
//         }
//     }

//     // console.log(dp);
//     return dp[m-1][n-1];
// };

/**
 * 1. 2^n
 * 2. using two dimensional array but time complexity O(n*m)
 * 3. space complexity O(m*n)
 */

/** test case */
console.log(uniquePaths(3, 7)); //28
console.log(uniquePaths(3, 2)); //3 
console.log(uniquePaths(7, 3)); //28
console.log(uniquePaths(3, 3)); //6

console.log(uniquePaths(2, 2)); //2
console.log(uniquePaths(1, 1)); //1
/**
 * [1,1,1]
 * [1,2,3]
 * [1,3,6]
 */