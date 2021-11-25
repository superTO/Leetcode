/** 128. Longest Consecutive Sequence */
function longestConsecutive(nums: number[]): number {
    if(nums.length === 0) return 0;

    const arr = Array.from(new Set(nums)).sort((a, b) => a-b);
    let count = 1, max = 1;
    for(let i = 0; i < arr.length; ++i){
        if(arr[i] - arr[i+1] === -1){
            count += 1;
            max = Math.max(max, count);
        } else {
            count = 1
        }
    }
    return max;
};

/** StefanPochmann's Solution */
// function longestConsecutive(nums: number[]): number {
//     const arr = new Set(nums);
    
//     let max = 0;
//     for(let num of nums){
//         if(!arr.has(num-1)){
//             let x = num+1;
//             while(arr.has(x)){
//                 ++x;
//             }
//             max = Math.max(max, x - num)
//         }
//     }
//     return max;
// };

/** test case */
longestConsecutive([100,4,200,1,3,2]); //4
longestConsecutive([0,3,7,2,5,8,4,6,0,1]); //9

longestConsecutive([100,4,200,5,3,2]); //4
longestConsecutive([100,4,200,201,202,3,2]); //3