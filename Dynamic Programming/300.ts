/** 300. Longest Increasing Subsequence */
function lengthOfLIS(nums: number[]): number {
    /** !!important temp[] 內容並不是LIS只是長度剛好相同 */
    let temp = [nums[0]];
    for(let i = 1; i < nums.length; ++i){
        if(nums[i] > temp[temp.length-1]){
            temp.push(nums[i]);
        } else {
            // binary search
            let left = 0, right = temp.length;
            while(left < right){
                let mid = Math.floor((right+left) / 2);
                if(temp[mid] < nums[i]){
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            temp[right] = nums[i];
        }
        // console.log(temp);
    }
    return temp.length;
};


/** test case */

console.log(lengthOfLIS([4,10,4,3,8,9])); // 3
console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // 4
console.log(lengthOfLIS([0,1,0,3,2,3])); // 4
console.log(lengthOfLIS([7,7,7,7,7,7,7])); // 1