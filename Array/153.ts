/** 153. Find Minimum in Rotated Sorted Array */

/** 這題在考根據rotated寫出(log n)的sort algorithm */
function findMin(nums: number[]): number {
    /** Solution 1 */
    // nums.sort((a, b) => a-b);
    // return nums[0];
    /** Solution 2 */
    // return Math.min(...nums);
    /** Solution 3 */
    for(let i = 0; i < nums.length; i++){
        if (nums[i+1] < nums[i]){
            return nums[i+1];
        }
    }
    return nums[0];
    /** Solution 4 */
    // let min = Number.MAX_SAFE_INTEGER;
    // for(let i = 0; i < nums.length; ++i){
    //     if(nums[i] < min){
    //         min = nums[i];
    //     }
    // }
    // return min;
};

/** test case */
/**
 * 看題目的時間比解題久, Array.prototype.sort() -> Timsort 
 * 複習sorting algorithm
 */