/** 55. Jump Game */
/** DP solution */
// function canJump(nums: number[]): boolean {
//     if(nums.findIndex(x => x === 0) === -1) return true;

//     // dp 紀錄可到達的index
//     const dp = new Array(nums.length).fill(false);
//     dp[0] = true;


//     for(let i = 1; i < nums.length; ++i){
//         for(let j = 0; j < i; ++j){
//             // 可到達j && j + nums[j] 可到達 i
//             if(dp[j] && (j + nums[j] >= i)){
//                 dp[i] = true;
//                 break;
//             }
//         }
//     }
//     return dp[nums.length-1];
// };

/** Solution 2 */
function canJump(nums: number[]): boolean {
    let last = nums.length - 1;

    for(let i = nums.length - 2; i >= 0; i--){
        if(i + nums[i] >= last) last = i;
    }
    return last === 0;
};

// function canJump(nums: number[]): boolean {
//     if(nums.findIndex(x => x === 0) === -1) return true;

//     let reach = 0, i = 0;
//     while(i < nums.length && i <= reach){
//         reach = Math.max(reach, i + nums[i]);
//         ++i;
//     }
//     return i === nums.length;
// };

/** test case */
console.log(canJump([2,3,1,1,4])); // true
console.log(canJump([3,2,1,0,4])); // false

console.log(canJump([1,0])); // true
console.log(canJump([1,0,0])); // false
console.log(canJump([2,0])); // true
console.log(canJump([2,5,0,0])); // true
console.log(canJump([2,0,0,5])); // false