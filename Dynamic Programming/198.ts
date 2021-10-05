/** 198. House Robber */

/** Recursive (top-down) */
// function rob(nums: number[]): number {
//     return helper(nums, nums.length - 1, new Array(nums.length).fill(-1));
// };

// function helper(nums: number[], i: number, sum: number[]): number{
//     if(i < 0) return 0;
//     if(sum[i] >= 0) return sum[i];
//     sum[i] = Math.max(helper(nums, i - 2, sum) + nums[i], helper(nums, i - 1, sum));
//     // console.log(sum);
//     return sum[i];
// }
// function rob(nums: number[]): number {
//     const dp =  new Array(nums.length + 1).fill(0);
//     dp[1] = nums[0];
//     for(let i = 1; i < nums.length; i++){
//         dp[i + 1] = Math.max(dp[i - 1] + nums[i], dp[i])
//     }
//     return dp[nums.length];
// }

/** O(1)space */
function rob(nums: number[]): number {
    let a = 0, b = 0;
    for(let i = 0; i < nums.length; i++){
        if(i%2) a = Math.max(b, a + nums[i])
        else b = Math.max(a, b + nums[i])
    }
    return Math.max(a, b);
}


/** test case */
console.log(rob([1,2,3,1])); // 4
console.log(rob([2,7,9,3,1])); // 12
console.log(rob([2,1,1,2])); // 4
console.log(rob([1,2,5,5])); // 7