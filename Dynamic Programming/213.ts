/** 213. House Robber II */
function rob(nums: number[]): number {
    if(nums.length <= 3) return Math.max(...nums);
    
    const a = nums.slice(0, nums.length - 1);
    const b = nums.slice(1, nums.length);
    return Math.max(robPre(a), robPre(b));
};

/** 同 198. House Robber */
function robPre(nums: number[]): number{
    let a = 0, b = 0;
    for(let i = 0; i < nums.length; i++){
        if(i%2) a = Math.max(b, a + nums[i])
        else b = Math.max(a, b + nums[i])
    }
    return Math.max(a, b);
}

/** test case */

console.log(rob([2,3,2])); // 3
console.log(rob([1,2,3,1])); // 4
console.log(rob([2,1,1,2])); // 3
console.log(rob([1,2,5,5])); // 7
console.log(rob([7,2,5,1000,5])); // 1007