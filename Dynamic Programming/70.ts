/** 70. Climbing Stairs */
function climbStairs(n: number): number {
    /** Solution 1 */
    // climbStairs(n) = climbStairs(n-1) + climbStairs(n-2)
    let arr = [0,1,2,3];
    for(let i = 4; i <= n; ++i){
        arr[i] = arr[i-1] + arr[i-2];
    }

    return arr[n];
    /** Solutoin 2 */
    // let ans = 1, pre = 1;
    // while(n--){
    //     pre += ans;
    //     ans = pre - ans;
    // }
    // return ans;
};


/** test case */
/** 1 <= n <= 45 */
console.log(climbStairs(1)); // 1
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5
console.log(climbStairs(5)); // 8
console.log(climbStairs(6)); // 13
console.log(climbStairs(7)); // 21
/**
4:

1111 // 1
112
121 // 3
211
22 // 1

5:

11111 // 1
1112
1121 // 4
1211
2111
122 
212 // 3
221

6:

111111 // 1
11112
11121
11211  // 5
12111
21111
1122
1212
2112
2121
2211
1221 // 6
222 // 1

*/