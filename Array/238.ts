/**
 * 238. Product of Array Except Self
 * 
 * Constraints:
 * 2 <= nums.length <= 105
 * -30 <= nums[i] <= 30
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 */
// Topics: prefix sum
function productExceptSelf(nums: number[]): number[] {    
    const answer: number[] = new Array(nums.length).fill(1);
    
    for(let i = nums.length - 2; i >= 0; i--){
        answer[i] = answer[i+1] * nums[i+1];
    }
    // console.log('answer: ' + answer);
    
    let prefixProduct = 1;
    for(let i = 0; i < nums.length; i++){
        answer[i] *= prefixProduct;
        prefixProduct *= nums[i];
    }
    
    return answer;
};

/** test case */
console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]
console.log(productExceptSelf([1,2,3,4,2])); // [48,24,16,12,24]
console.log(productExceptSelf([-1,1,0,-3,3])); // [0,0,9,0,0]
console.log(productExceptSelf([-1,0,1,-3,3])); // [0,9,0,0,0]
console.log(productExceptSelf([-1,1,-1,1,-1])); // [1,-1,1,-1,1]
console.log(productExceptSelf([0,0,0,0,0])); // [0,0,0,0,0]
