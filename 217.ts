/** 217. Contains Duplicate */
function containsDuplicate(nums: number[]): boolean {
    nums.sort((a, b) => a-b);
    return Array.from(new Set(nums)).toString() == nums.toString() ? false : true;
};


// console.log(containsDuplicate([1,2,3,1])); // true
// console.log(containsDuplicate([1,2,3,4])); // false
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // true