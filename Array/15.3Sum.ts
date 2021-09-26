/**
 * 15. 3Sum
 */

function threeSum(nums: number[]): number[][] {
    nums = nums.sort((a, b) => a - b);

    const result:number[][] = [];
    for (let i = 0; i < nums.length-2; i++) {
        if(i > 0 && nums[i] === nums[i-1]){
            continue;
        }

        let l = i + 1;
        let r = nums.length - 1;
        while(l < r){
            if(nums[i] + nums[l] + nums[r] > 0){
                r--;
            } else if(nums[i] + nums[l] + nums[r] < 0){
                l++;
            } else {
                result.push([nums[i], nums[l], nums[r]]);

                const tempL = nums[l];
                const tempR = nums[r];
                
                while(l < r && nums[l] === tempL) l++;
                while(l < r && nums[r] === tempR) r--;
            }
        }
    }
    return result;
};


// TLE
// function threeSum(nums: number[]): number[][] {
//     if (nums.length < 3){
//         return [];
//     }

//     const result: number[][] = [];

//     
//     for(let i = 0; i < nums.length - 1; i++){
//         for(let j = i+1; j < nums.length; j++){
//             const final = nums.slice(j + 1, nums.length).find(x => (x + nums[i] + nums[j]) === 0 )

//             if (final !== undefined){
//                 const value = [nums[i], nums[j], final].sort((a, b) => a-b);
//                 // console.log('value: ' + value);
//                 // console.log('result: ' + result);
//                 // console.log(result.findIndex(x => value.toString() == x.toString()));

//                 if (result.findIndex(x => value.toString() == x.toString()) === -1){
//                     result.push(value);
//                 }
//             }
//         }
//     }

//     // console.log(result);
//     return result;
// };

// 別人的解答
// function threeSum(nums: number[]): number[][] {
//     nums = nums.sort((a, b) => a - b);
//     let i, j, l;
//     let result = [];
//     for (i = 0; i < nums.length; i++) {
//         j = i + 1;
//         l = nums.length - 1;
//         if (i > 0 && nums[i] == nums[i - 1]) {
//             continue;
//         }

//         while (j < l) {
//             if (l < nums.length - 1 && nums[l] == nums[l + 1]) {
//                 l--;
//                 continue;
//             }
//             let req = nums[i] + nums[j] + nums[l];
//             if (req > 0) {
//                 l--;
//             } else if (req < 0) {
//                 j++;
//             } else {
//                 result.push([nums[i], nums[j], nums[l]]);
//                 j++;
//                 l--;
//             }
//         }
//     }
//     return result;
// };

/**
 * test case
 */
// console.log(threeSum([-4, -1, -1, 0, 1, 2])); // [-1,-1,2] [-1,0,1]
// console.log(threeSum([-1, -1, 0, 1, 2])); // [-1,-1,2] [-1,0,1]
// console.log(threeSum([])); // []
// console.log(threeSum([-1,0])); // []
// console.log(threeSum([0, 0, 0, 0, 0, 0])); // [0,0,0]
// console.log(threeSum([-1, 0, 0, 1, 1, 1])); // [-1,0,1]
// console.log(threeSum([-2, 0, 1, 1, 2])); // [-2,0,2] [-2,1,1]
