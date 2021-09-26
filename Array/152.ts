/** 152. Maximum Product Subarray
 * 
 * Constraints:
 * 1 <= nums.length <= 2 * 104
 * -10 <= nums[i] <= 10
 */

function maxProduct(nums: number[]): number {
    const maxProduct: number[] = new Array(nums.length);
    const minProduct: number[] = new Array(nums.length);
    let max = nums[0];

    maxProduct[0] = nums[0];
    minProduct[0] = nums[0];

    for(let i = 1; i < nums.length; i++){
        maxProduct[i] = Math.max(nums[i], maxProduct[i-1] * nums[i], minProduct[i-1] * nums[i]);
        minProduct[i] = Math.min(nums[i], minProduct[i-1] * nums[i], maxProduct[i-1] * nums[i]);

        max = Math.max(max, maxProduct[i]);
    }

    return max;
};

/** test case */
console.log(maxProduct([2,3,-2,4])); // 6
console.log(maxProduct([-2,0,-1])); // 0
console.log(maxProduct([-2,0,-1,-2])); // 2
console.log(maxProduct([-2,-3,-1])); // 6
console.log(maxProduct([-2,-3,-1,-4])); // 24
console.log(maxProduct([-2,-3,-1,-4,-5])); // 60
console.log(maxProduct([-2])); // ?
