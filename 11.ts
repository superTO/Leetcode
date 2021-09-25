/** 11. Container With Most Water */
function maxArea(height: number[]): number {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while(left < right){
        max = Math.max(max, Math.min(height[left], height[right]) * (right-left));
        if(height[left] < height[right]){
            ++left;
        } else {
            --right;
        }
    }
    
    return max;
};

/** test case */
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,8,6,2,5,4,8,3,1])); // 40
console.log(maxArea([4,3,2,1,4])); // 16
console.log(maxArea([1,1])); // 1
console.log(maxArea([1,2,1])); // 2