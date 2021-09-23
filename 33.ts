/** 33. Search in Rotated Sorted Array */
/** 
 * Constraints:
 * 1 <= nums.length <= 5000
 * -104 <= nums[i] <= 104
 * All values of nums are unique.
 * nums is guaranteed to be rotated at some pivot.
 * -104 <= target <= 104
 */

// Binary search
function search(nums: number[], target: number): number {
    // return nums.findIndex(x => x === target);
    let left = 0;
    let right = nums.length - 1;
    while(left < right){
        let mid = Math.floor((left+right)/2);
        // roated
        if(nums[mid] > nums[right]){
            // [4,5,6,7,0,1,2]
            left = mid + 1;
        } else { 
            // [5,6,7,0,1,2,4]
            right = mid;
        }
    }
    let rot = left;
    /** usual binary search */
    left = 0;
    right = nums.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let realMid = (mid+rot)%nums.length;
        if(target > nums[realMid]){
            left = mid + 1;
        } else if(target < nums[realMid]){
            right = mid - 1;
        } else {
            return realMid;
        }
    }

    return -1;
};

/** test case */
console.log(search([4,5,6,7,0,1,2], 0)); // 4
console.log(search([0,1,2,4,5,6,7], 1)); // 1
console.log(search([0,1,2,4,5,6,7], 7)); // 6
console.log(search([5,6,7,0,1,2], 0)); // 3