/**
 * 53. Maximum Subarray
 */

function maxSubArray(nums: number[]): number {
    if(nums.length === 1){
        return nums[0];
    }

    // nums = RemoveNegative(nums);
    // console.log('nums: ' + nums);
    return SumSubArray(nums);
};

function SumSubArray(nums: number[]): number{
    let sum = nums[0];
    let maxSum = nums[0];

    for(let i = 1; i < nums.length; i++){
        sum = Math.max(nums[i] + sum, nums[i]);
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}

// function RemoveNegative(nums: number[]): number[]{
//     let i = 0;
//     while(nums[i] < 0){
//         nums.shift();
//     }

//     i = nums.length - 1;
//     while(nums[i] < 0){
//         nums.pop();
//         // nums.splice(i, 1);
//         --i;
//     }
//     return nums;
// }

/** test case */
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,-4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([-1])); // -1
console.log(maxSubArray([-2,-1])); // -1
console.log(maxSubArray([5,4,-1,7,8])); // 23