/* 1. Two Sum */
function twoSum(nums: number[], target: number): number[] {
    const result = new Map<number, number>();
    for(let i = 0; i < nums.length; i++){

        if(result.has(nums[i])){
            return [result.get(nums[i]), i];
        }

        result.set(target - nums[i], i);

    }
};
/*
**test case**

[-1,-2,-3,-4,-5]
-8

[0,4,3,0]
0

*/

twoSum([-1,-2,-3,-4,-5], -8);
twoSum([0,4,3,0], 0);
