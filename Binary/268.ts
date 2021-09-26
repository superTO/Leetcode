/** 268. Missing Number */


// 利用 XOR a^b^b = a 的特性
/**
 * [3,0,1]
 * 
 * final = 0^0^3 (i=0)
 * final = (0^0^3)^1^0 (i=1)
 * final = (0^0^3^1^0)^2^1 (i=2)
 * 
 * final = (0^0^3^1^0^2^1) ^ 3 (nums.length)
 */
function missingNumber(nums: number[]): number {
    let final = 0;
    for(let i = 0; i < nums.length; ++i){
        final = final ^ i ^ nums[i];
    }
    return final ^ nums.length
};


// my solution
// function missingNumber(nums: number[]): number {
//     nums.sort((a, b)=> a-b);

//     let final = nums.length
//     for(let i = 0; i < final; ++i){
//         if(nums[i] !== i){
//             return i;
//         }
//     }
//     return final
// };

/** test case */
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // 8
console.log(missingNumber([3,0,1])); // 2
console.log(missingNumber([0,1])); // 2
console.log(missingNumber([0])); // 1
console.log(missingNumber([1])); // 0