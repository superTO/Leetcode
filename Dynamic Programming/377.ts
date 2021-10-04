/** 377. Combination Sum IV */

/** 這題是簡單版的 322. Coin Change */

/** Solution Recursive (Top-Down) */
function combinationSum4(nums: number[], target: number): number {
    nums = nums.filter(x => x <= target);
    if(nums.length === 0) return 0;
    
    nums.sort((a, b) => a-b);
    // We can fill the array with -1 to indicate that the result hasn't been calculated yet. 
    // 0 is not a good choice because it means there is no combination sum for the target.
    const dp = new Array(target + 1).fill(-1);
    dp[0] = 1;
    return Combination(nums, target, dp);
};

function Combination(nums: number[], target: number, count: number[]): number{
    // if(target === 0) return 1;
    if(count[target] !== -1) return count[target];

    let sum = 0;
    for(let num of nums){
        if(target >= num){
            // console.log(target);
            // console.log('num: ' + num);
            sum += Combination(nums, target - num, count);
        }
    }
    // Because maybe count[target] = 0, count needs to fill -1 not 0.
    count[target] = sum;
    // console.log(count);
    return sum;
}

/** Solution Iteration(bottom-up) */
// function combinationSum4(nums: number[], target: number): number {
//     nums = nums.filter(x => x <= target);
//     if(nums.length === 0) return 0;
    
//     const dp = new Array(target + 1).fill(0);
//     dp[0] = 1;
//     for(let i = 1; i <= target; i++){
//         for(let num of nums){
//             if(i - num >= 0){
//                 dp[i] += dp[i - num];
//                 // console.log(dp);
//             }
//         }
//     }
    
//     return dp[target];
// };


/** test case */

/**
 * 1 <= nums.length <= 200
 * 1 <= nums[i] <= 1000
 * All the elements of nums are unique.
 * 1 <= target <= 1000
 */
console.log(combinationSum4([1,2,3], 4)); // 7
console.log(combinationSum4([9], 3)); // 0
// console.log(combinationSum4([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350,360,370,380,390,400,410,420,430,440,450,460,470,480,490,500,510,520,530,540,550,560,570,580,590,600,610,620,630,640,650,660,670,680,690,700,710,720,730,740,750,760,770,780,790,800,810,820,830,840,850,860,870,880,890,900,910,920,930,940,950,960,970,980,990,111], 999)); // 1

/** 
 ** nums 固定 target 減少 **
 * 
 * F(target) = MaxCount
 * F(target - nums[i]) = MaxCount - 1;
 * ==> F(target) = F(target - nums[i]) + 1
 */